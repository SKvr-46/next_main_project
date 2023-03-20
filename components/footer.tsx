//フッターコンポーネント
import styles from "styles/footer.module.scss"
import { Container } from "./container"
import { Logo } from "./logo"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" 
import {faGithub} from "@fortawesome/free-brands-svg-icons" 


export const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <Container>
                <Logo logoIsBox={false}/>
                <address>koeich4@gmail.com</address>
                <a href="https://github.com/SKvr-46" className={styles.link}>
                    <FontAwesomeIcon icon={faGithub}/>
                    <span className="sr-only">Github</span>
                </a>
            </Container>
        </footer>
    )
}