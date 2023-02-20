import React from "react";
import { Container } from "@/components/container";
import { PageTopContent } from "@/components/pagetopcontent";
import { HomeMidContents } from "@/components/homemidcontents";
import { GearWrapper } from "@/components/gearwrapper";
import { GetStaticProps } from 'next'
import { Meta } from "@/components/meta";
import { NextPage } from "next";

const Home:NextPage = () => {

    return(
        <>
            <Meta pageTitle={"HOME"} pageDesc={"研究部屋βのホームページ"}/>
            <PageTopContent
            title_1={"Welcome to"} 
            title_2={"My"}
            title_3={"HOME Page!"}
            >
                <GearWrapper/>
            </PageTopContent>
            <Container>
                <HomeMidContents/>
            </Container>
        </>
    )
}

export default Home


export const getStaticProps:GetStaticProps = async () => {
    return {       
        props : {}
    }
}