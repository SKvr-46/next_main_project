import { GetStaticPaths, GetStaticProps, NextPage} from "next";
import { client } from "@/lib/api";
import { BlogContentType } from "@/lib/api";
import { getPostBySlug } from "@/lib/api";
import { Container } from "@/components/container";
import styles from "styles/post.module.scss"
import { Meta } from "@/components/meta";


//記事を表示するコンポーネント
export const BlogPage = ({blog} :{blog: BlogContentType}) => {
    return (
        <Container>
            <Meta pageTitle={blog.title} pageDesc={"研究紹介のページ"}/>
            <div className={styles.postcontainer}>
                <h1 className={styles.title}>{blog.title}</h1>
                <h2 className={styles.publish}>{blog.publishDate}</h2>
                <div
                dangerouslySetInnerHTML={{
                __html: `${blog.content}`,
                }}
                className={styles.content}
                />
            </div>
        </Container>
    )
}
export default BlogPage



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

// microCMSへAPIリクエスト(contextにはgetStaticPathsのpathsが入っている)
export const getStaticProps:GetStaticProps = async (context) => {

    const slug = context.params?.slug as string
    const post = await getPostBySlug(slug) //posts.contents[0]

    return {
        props: {
        blog: post,
        },
    }
    }

