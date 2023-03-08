import { ReactNode } from "react";
import styles from "styles/card.module.scss"

type CardPropstype = {
    title: string
    subtitle_1: ReactNode
    subtitle_2?: ReactNode
    subtitle_3?: ReactNode
    subtitle_4?: ReactNode
    subtitle_5?: ReactNode
    backgroundcolor:string
    color:string
}

export const Card = (props:CardPropstype) => {
    const {
        title,
        subtitle_1,
        subtitle_2,
        subtitle_3, 
        subtitle_4,
        subtitle_5,
        backgroundcolor, 
        color 
        } = props


        
    return (
        <div className={styles.cardwrapper}>
            <div className={styles.outer} style={{background:backgroundcolor, color:color}}>
                <div className={styles.title}>{title}</div>
                <ul className={styles.subtitle}>
                    <li>{subtitle_1}</li>
                    <li>{subtitle_2}</li>
                    <li>{subtitle_3}</li>
                    <li>{subtitle_4}</li>
                    <li>{subtitle_5}</li>
                </ul>
            </div>
        </div>
    )
}