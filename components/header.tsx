//ヘッダーコンポーネント
import React from "react";
import styles from "styles/header.module.scss"
import { Container } from "./container";
import { Logo } from "./logo";
import { Nav } from "./nav";

export const Header = () => {
    return (
        <header className={styles.head}>
            <Container>
                <div className={styles.flexContainer}>
                    <Logo logoIsBox/>
                    <Nav/>
                </div>
            </Container>
        </header>
    )
}