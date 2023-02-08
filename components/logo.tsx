import styles from "styles/logo.module.scss"
import Link from "next/link"

type LogoType = {
    logoIsBox: boolean
}

export const Logo = (props:LogoType) => {
    const {logoIsBox = true} = props
    return (
        <Link href="/" className={logoIsBox ? styles.box : styles.nonbox}>研究部屋α</Link>
    )
}