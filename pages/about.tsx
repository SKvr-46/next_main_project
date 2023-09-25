import React from "react";
import styles from "styles/about.module.scss"
import { Container } from "@/components/container";
import { Card } from "@/components/card";
import { Meta } from "@/components/meta";
import { PageTopContent } from "@/components/pagetopcontent";
import { GearWrapper } from "@/components/gearwrapper";
import { GetStaticProps, NextPage } from "next";


const About:NextPage = () => {
    const background_content_title  = "-----学歴-----"
    const background_1              = "クラーク記念国際高等学校 卒"
    const background_2              = "明治大学 総合数理学部 卒 （位相幾何学）"
    const background_3              = "東京大学大学院 地球惑星科学専攻 （地震学）"
    const skills_content_title      = "-----使用言語など-----"
    const skills_1                  = "研究： Python Fortran C"
    const skills_2                  = "WEB： Typescript Ruby React/Next.js Vue3 Rails"
    const skills_3                  = "その他の言語(触ったことがある程度)： Go"
    const personal_content_title    = "-----趣味-----"
    const personal_1                = "チェス、トレーニング、野鳥観察、数学、地震学"
    const production__content_title = "-----制作物など-----"
    const production_1              = "https://next-game-6q37.vercel.app/"
    const production_2              = "https://gentle-quokka-bd2bd5.netlify.app"
    const production_3              = "https://next-clock-sample.vercel.app"
    const production_4              = "https://next-gpt-finddishes-git-main-skvr-46.vercel.app"
    const production_5              = "https://next-password-generator-git-main-skvr-46.vercel.app"
    const Publications_title        = "-----出版物-----"
    const publications_1            = "https://www.amazon.co.jp/Theoretical-Chess-Puzzles-English-K-ebook/dp/B0B66S2P8L/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1695650388&sr=8-2"

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
                content_title={background_content_title} 
                subtitle_1={background_1}
                subtitle_2={background_2}
                subtitle_3={background_3}
                backgroundcolor={"black"} 
                color={"white"}/>
                <Card 
                title={"Skills"} 
                content_title={skills_content_title} 
                subtitle_1={skills_1}
                subtitle_2={skills_2}
                subtitle_3={skills_3}
                backgroundcolor={"purple"} 
                color={"white"}/>
                <Card 
                title={"Personal"} 
                content_title={personal_content_title} 
                subtitle_1={personal_1} 
                backgroundcolor={"#20b2aa"} 
                color={"black"}/>
                <Card 
                title={"Productions"} 
                content_title={production__content_title} 
                subtitle_1={
                <a 
                href={production_1.toString()} target="_blank" rel="noopener noreferrer"
                className={styles.link}
                style={{fontSize:"18px"}}
                >
                        Next.js/React: <br/> {production_1.toString()}
                </a>
                } 
                subtitle_2={
                <a 
                href={production_2.toString()} target="_blank" rel="noopener noreferrer"
                className={styles.link}
                style={{fontSize:"18px"}}
                >
                        Vue3: <br/>{production_2.toString()}
                </a>
                }
                subtitle_3={
                    <a 
                    href={production_3.toString()} target="_blank" rel="noopener noreferrer"
                    className={styles.link}
                    style={{fontSize:"18px"}}
                    >
                            Next.js/React: <br/>{production_3.toString()}
                    </a>
                    }
                subtitle_4={
                    <a 
                    href={production_4.toString()} target="_blank" rel="noopener noreferrer"
                    className={styles.link}
                    style={{fontSize:"18px"}}
                    >
                            Next.js&OpenAI API: <br/>{production_4.toString()}
                    </a>
                    }      
                subtitle_5={
                    <a 
                    href={production_5.toString()} target="_blank" rel="noopener noreferrer"
                    className={styles.link}
                    style={{fontSize:"18px"}}
                    >
                            Next.js/React: <br/>{production_5.toString()}
                    </a>
                    }                                  
                backgroundcolor={"#daa520"} 
                color={"black"}/>
                <Card 
                title={"Publications"} 
                content_title={Publications_title} 
                subtitle_1={
                    <a 
                    href={publications_1.toString()} target="_blank" rel="noopener noreferrer"
                    className={styles.link}
                    style={{fontSize:"18px"}}
                    >
                            Theoretical Chess Puzzles (English Edition)
                    </a>
                }
                backgroundcolor={"#66CC66"} 
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