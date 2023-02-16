import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN || "",
    apiKey: process.env.API_KEY || "",
})

//blogのプロパティ
export type BlogContentType = {
    slug :string 
    title: string
    publishDate: string 
    content: string 
}

//slugで記事を抽出する
export const getPostBySlug = async (slug: string ) => {
    try {
        const posts = await client.get({
            endpoint: "blogs",
            queries: {filters: `slug[equals]${slug}`}
        })
        return posts.contents[0]

    } catch (err) {
        console.log("--getPostBySlug")
        console.log(err)
    }
}



export const getAllPost = async (limit = 100) => {
    try {
        const posts = await client.get({
            endpoint: "blogs",
            queries: {orders: "-publishDate", limit: limit}
        })
        return posts.contents

    } catch (err) {
        console.log("--getAllPost")
        console.log(err)
    }
}
