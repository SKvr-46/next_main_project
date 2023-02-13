import React from "react";
import { Container } from "@/components/container";
import { Card } from "@/components/card";
import { Meta } from "@/components/meta";


const About = () => {
    const background_1 ="クラーク記念国際高等学校 卒"
    const background_2 = "明治大学 総合数理学部 卒"
    const background_3 = "東京大学大学院 地球惑星科学専攻"
    const skills_1 = "研究： Python Fortran C"
    const skills_2 = "WEB： HTML CSS Javascript Typescript React/Next.js"
    const skills_3 = "その他の言語(触ったことがある程度)： PHP Ruby Java"
    const personal = "趣味：チェス 数学 トレーニング"
    return (
        <Container>
            <Meta pageTitle={"About Me"} pageDesc={"研究部屋αの管理人のページ"}/>

            <Card 
            title={"Background"} 
            subtitle_1={background_1} 
            subtitle_2={background_2}
            subtitle_3={background_3}
            backgroundcolor={"black"} 
            color={"white"}/>
            <Card 
            title={"Skills"} 
            subtitle_1={skills_1}
            subtitle_2={skills_2}
            subtitle_3={skills_3}
            backgroundcolor={"purple"} 
            color={"white"}/>
            <Card 
            title={"Personal"} 
            subtitle_1={personal} 
            backgroundcolor={"#20b2aa"} 
            color={"black"}/>
        </Container>
    )
}

export default About

export const getStaticProps = async () => {
    return {       
        props : {

        }
    }

}