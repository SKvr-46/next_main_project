//HOME画面コンテンツ
import styles from "styles/homemidcontents.module.scss"

export const HomeMidContents = () => {
    return (
        <div className={styles.gridContainer}>
            <div className={styles.area_1}>
                <a href="/about">About Me</a>
            </div>
            <div className={styles.area_2}>
                <a href="/mystudy">My Study</a>
            </div>
        </div>
    )
}