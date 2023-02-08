import styles from "styles/footer.module.scss"
import { Container } from "./container"
import { Logo } from "./logo"

export const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <Container>
                <Logo logoIsBox={false}/>
                <address>koeich4@gmail.com</address>
            </Container>
        </footer>
    )
}