//ページ最初の領域のコンポーネント　Welcome..などの部分
import styles from "styles/pagetopcontent.module.scss"

type TopContentPropsType = {
    children: React.ReactNode
    title_1: string
    title_2: string
    title_3: string
}

export const PageTopContent = (props:TopContentPropsType) => {
    const {children, title_1, title_2, title_3} = props
    return (
        <div className={styles.topwrapper}>
            <div className={styles.containerwrapper}>
                {children}
                <div className={styles.title}>
                    <p>{title_1}</p>
                    <p>{title_2}</p>
                    <p>{title_3}</p>
                </div>
            </div>
        </div>
    )
}