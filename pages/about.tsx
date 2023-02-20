import React from "react";
import { Container } from "@/components/container";
import { Card } from "@/components/card";
import { Meta } from "@/components/meta";
import { PageTopContent } from "@/components/pagetopcontent";
import { GearWrapper } from "@/components/gearwrapper";
import { GetStaticProps, NextPage } from "next";


const About:NextPage = () => {
    const background_1 ="-----学歴-----"
    const background_2 ="クラーク記念国際高等学校 卒"
    const background_3 = "明治大学 総合数理学部 卒 （位相幾何学）"
    const background_4 = "東京大学大学院 地球惑星科学専攻 （地震学）"
    const skills_1 = "-----使用言語など-----"
    const skills_2 = "研究： Python Fortran C"
    const skills_3 = "WEB： HTML CSS Javascript Typescript React/Next.js"
    const skills_4 = "その他の言語(触ったことがある程度)： PHP Ruby Java"
    const personal_1 = "-----趣味-----"
    const personal_2 = "チェス、数学、トレーニング"
    return (
        <>
            <Meta pageTitle={"About Me"} pageDesc={"研究部屋αの管理人のページ"}/>
            <PageTopContent
            title_1={"Page"} 
            title_2={"Of"}
            title_3={"Self-introduction"}
            >
                <GearWrapper/>
            </PageTopContent>

            <Container>
                <Card 
                title={"Background"} 
                subtitle_1={background_1} 
                subtitle_2={background_2}
                subtitle_3={background_3}
                subtitle_4={background_4}
                backgroundcolor={"black"} 
                color={"white"}/>
                <Card 
                title={"Skills"} 
                subtitle_1={skills_1}
                subtitle_2={skills_2}
                subtitle_3={skills_3}
                subtitle_4={skills_4}
                backgroundcolor={"purple"} 
                color={"white"}/>
                <Card 
                title={"Personal"} 
                subtitle_1={personal_1} 
                subtitle_2={personal_2} 
                backgroundcolor={"#20b2aa"} 
                color={"black"}/>
            </Container>
        </>
    )
}

export default About

export const getStaticProps:GetStaticProps = async () => {
    return {       
        props : {}
    }

}