import { GetStaticPaths, GetStaticProps} from "next";
import { client } from "@/lib/api";
import { BlogContentType } from "@/lib/api";
import { ParsedUrlQuery } from "querystring";


export const BlogPage = (blog: BlogContentType) => {
    return (
        <div>
            <h1>{blog.title}</h1>
            <h1>{blog.publish}</h1>
            <div
            dangerouslySetInnerHTML={{
            __html: `${blog.content}`,
            }}
            />
        </div>
    )
}
export default BlogPage



//slugで記事を抽出する
export const getPostBySlug = async (slug: string ) => {
    try {
        const post = await client.get({
            endpoint: "blogs",
            queries: {filters: `slug[equals]${slug}`}
        })
        return post.contents[0]

    } catch (err) {
        console.log("--getPostBySlug")
        console.log(err)
    }
}

// APIリクエストを行うパスを指定（getstaticpropsより先に実行）
export const getStaticPaths:GetStaticPaths = async () => {

        const posts = await client.get({ endpoint: "blogs" })
        const paths = posts.contents?.map(
            ({slug} : BlogContentType) => `/blog/${slug}`
        )
        return (
            {paths, fallback: false}
        )

}

// microCMSへAPIリクエスト
export const getStaticProps:GetStaticProps = async (context) => {

    const slug = context.params?.slug as string
    const post = await getPostBySlug(slug)

    return {
        props: {
        blog: post,
        },
    }
    }

