//幅を92%に固定するコンポーネント
import styles from "styles/container.module.scss"

type ContainerPropsType = {
    children: React.ReactNode
}

export const Container = (props:ContainerPropsType) => {
    const {children} = props
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}