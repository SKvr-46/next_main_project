//ロゴ　コンポーネント
import styles from "styles/logo.module.scss"
import Link from "next/link"

type LogoPropsType = {
    logoIsBox: boolean
}

export const Logo = (props:LogoPropsType) => {
    const {logoIsBox = true} = props
    return (
        <Link href="/" className={logoIsBox ? styles.box : styles.nonbox}>研究部屋α</Link>
    )
}