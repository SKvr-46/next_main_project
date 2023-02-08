import styles from "styles/container.module.scss"

type ContainerType = {
    children: React.ReactNode
}

export const Container = (props:ContainerType) => {
    const {children} = props
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}