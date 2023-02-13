import React from "react";
import { Meta } from "@/components/meta";

const MyStudy = () => {
    return (
        <>
            <Meta pageTitle={"My Study"} pageDesc={"管理人の研究紹介のページ"}/>
            <h1>＊改装中＊</h1>
        </>
    )
}

export default MyStudy


//記事コンテンツをたくさん書くので、SSRでレンダリング
export const getServerSideProps = async () => {
    return {       
        props : {
            paths:[],
            fallback:false,
        }
    }

}