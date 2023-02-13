//ナビゲーション　コンポーネント
import React from "react";
import Link from "next/link";
import styles from "styles/nav.module.scss"
import { useState } from "react";


export const Nav = () => {
    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const toggleMenu = () => {
        setmenuIsOpen((prev) => !prev)
    }

    const closeMenu = () => {
        setmenuIsOpen(false)
    }

    return (
        <nav className={menuIsOpen ? styles.open : styles.close}>
            <button onClick={toggleMenu} className={styles.btn}>
                <span className={styles.bar}></span>
            </button>
            <ul className={styles.list}>
                <li>
                    <Link href="/" onClick={closeMenu}>HOME</Link>
                </li>
                <li>
                    <Link href="/about" onClick={closeMenu}>ABOUT ME</Link>
                </li>
                <li>
                    <Link href="/mystudy" onClick={closeMenu}>MY STUDY</Link>
                </li>
            </ul>
        </nav>
    )
}

