import React from "react";
import { Meta } from "@/components/meta";
import { GetServerSideProps, NextPage } from "next";
import { Container } from "@/components/container";
import { PageTopContent } from "@/components/pagetopcontent";
import { GearWrapper } from "@/components/gearwrapper";

import { client } from "@/lib/api";
import { BlogContentType } from "@/lib/api";
import Link from "next/link";


const MyStudy = ({post} :{post:BlogContentType[]}) => {
    return (
        <>
            <Meta pageTitle={"My Study"} pageDesc={"管理人の研究紹介のページ"}/>
            <PageTopContent
            title_1={"Research"} 
            title_2={"Introduction"}
            title_3={"Page"}
            >
                <GearWrapper/>
            </PageTopContent>
            <Container>
                <div>
                    <ul>
                        {post.map((blog) => (
                            <li key={blog.title}>
                                <Link href={`/blog/${blog.slug}`}>
                                {blog.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </>
    )
}

export default MyStudy


export const getStaticProps = async () => {
    try {
        const posts = await client.get({
            endpoint: "blogs"
        })

        return {
            props:{
                post: posts.contents,
            },
        }
    } catch(err) {
        console.log("--getStaticProps--")
        console.log(err)
    }
}
