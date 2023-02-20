import styles from "styles/card.module.scss"

type CardPropstype = {
    title: string
    subtitle_1: string
    subtitle_2?: string
    subtitle_3?: string
    subtitle_4?: string
    subtitle_5?: string
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