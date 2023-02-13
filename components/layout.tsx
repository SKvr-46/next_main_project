//共通レイアウトのコンポーネント
import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

type LayoutPropsType = {
    children: React.ReactNode
}

export const Layout = (props:LayoutPropsType) => {
    const {children} = props
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}