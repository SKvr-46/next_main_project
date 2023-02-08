import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { Container } from "./container";

type LayoutType = {
    children: React.ReactNode
}

export const Layout = (props:LayoutType) => {
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