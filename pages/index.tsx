import React from "react";
import { Container } from "@/components/container";
import { HomeTopContent } from "@/components/hometopcontent";
import { HomeMidContents } from "@/components/homemidcontents";
import { GearWrapper } from "@/components/gearwrapper";
import { Meta } from "@/components/meta";

const Home = () => {
    
    return(
        <>
            <Meta pageTitle={"HOME"} pageDesc={"研究部屋αのホームページ"}/>

            <HomeTopContent title={"HOME"}>
                <GearWrapper/>
            </HomeTopContent>
            <Container>
                <HomeMidContents/>
            </Container>
        </>
    )
}

export default Home


export const getStaticProps = async () => {
    return {       
        props : {

        }
    }
}