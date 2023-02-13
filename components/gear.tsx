//歯車単体のコンポーネント
import styles from "styles/gear.module.scss"
type GearPropsType = {
    right:boolean
}

export const Gear = (props:GearPropsType) => {
    const {right = true} = props
    return (
            <div className={right ? styles.gear_1 : styles.gear_2}>
                <div className={styles.bar_1}></div>
                <div className={styles.bar_2}></div>
                <div className={styles.bar_3}></div>                    
                <div className={styles.bar_4}></div>
                <div className={styles.circle}></div>
            </div>
    )
}