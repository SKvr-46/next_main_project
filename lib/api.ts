import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN || "",
    apiKey: process.env.API_KEY || "",
})

export type BlogContentType = {
    slug :string | number | string[]
    title: string
    publish: string | number
    content: string 
    eyecatch?: string
    categories?: string
}
