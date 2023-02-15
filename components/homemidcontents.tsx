//HOME画面コンテンツ
import styles from "styles/homemidcontents.module.scss"
import Link from "next/link"

export const HomeMidContents = () => {
    return (
        <div className={styles.gridContainer}>
            <div className={styles.area_1}>
                <Link href="/about">About Me</Link>
            </div>
            <div className={styles.area_2}>
                <Link href="/mystudy">My Study</Link>
            </div>
        </div>
    )
}