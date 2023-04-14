import React from "react";
import { Meta } from "@/components/meta";
import { Container } from "@/components/container";
import { PageTopContent } from "@/components/pagetopcontent";
import { GearWrapper } from "@/components/gearwrapper";
import styles from "styles/mystudy.module.scss"
import { getAllPost } from "@/lib/api";
import { BlogContentType } from "@/lib/api";
import Link from "next/link";
import { Accordion } from "@/components/accordion";
import { GetStaticProps, NextPage } from "next";

//My Studyのページ全体
const MyStudy:NextPage<{post:BlogContentType[]}> = ({ post } : { post:BlogContentType[] }) => {
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
            <Accordion/>
                <div>
                    <ul className={styles.list}>
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

//100個の記事を渡す
export const getStaticProps:GetStaticProps = async () => {

        const posts = await getAllPost()
        return {
            props:{
                post: posts,
            },
        }
}
