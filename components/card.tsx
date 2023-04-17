import { ReactNode } from "react"
import styles from "styles/card.module.scss"

type CardPropstype = {
    title: string
    content_title: string
    subtitle_1: ReactNode
    subtitle_2?: ReactNode
    subtitle_3?: ReactNode
    subtitle_4?: ReactNode
    subtitle_5?: ReactNode
    subtitle_6?: ReactNode
    subtitle_7?: ReactNode
    subtitle_8?: ReactNode
    backgroundcolor:string
    color:string
}

export const Card = (props:CardPropstype) => {
    const {
        title,
        content_title,
        subtitle_1,
        subtitle_2,
        subtitle_3, 
        subtitle_4,
        subtitle_5,
        subtitle_6,
        subtitle_7,
        subtitle_8,
        backgroundcolor, 
        color 
        } = props

        
        
    return (
        <div className={styles.cardwrapper}>
            <div className={styles.outer}
                style={{background:backgroundcolor, color:color}}
                >
                <p className={styles.title}>{title}</p>
                <ul className={styles.subtitle}>
                    <li>{content_title}</li>
                    <li>{subtitle_1}</li>
                    <li>{subtitle_2}</li>
                    <li>{subtitle_3}</li>
                    <li>{subtitle_4}</li>
                    <li>{subtitle_5}</li>
                    <li>{subtitle_6}</li>
                    <li>{subtitle_7}</li>
                    <li>{subtitle_8}</li>
                </ul>
            </div>
        </div>
    )
}