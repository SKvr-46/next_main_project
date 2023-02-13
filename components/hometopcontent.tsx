import styles from "styles/hometopcontent.module.scss"


type TopContentPropsType = {
    children: React.ReactNode
    title: string
}

export const HomeTopContent = (props:TopContentPropsType) => {
    const {children, title} = props
    return (
        <div className={styles.topwrapper}>
            <div className={styles.containerwrapper}>
                {children}
                <div className={styles.title}>
                    <p>Welcome To </p>
                    <p>My</p>
                    <p>{title} Page!</p>
                </div>
            </div>
        </div>
    )
}