//HOMEの歯車と風車のコンポーネント
import styles from "styles/gearwrapper.module.scss"
import { Gear } from "./gear"

export const GearWrapper = () => {
    return (
        <>
        <div className={styles.gearwrapper}>
            <div className={styles.propeller_bar}></div>
            <div className={styles.propeller_1}></div>
            <div className={styles.propeller_2}></div>
            <div className={styles.geararea_1}>
                <Gear right={true} />
            </div>
            <div className={styles.geararea_2}>
                <Gear right={false}/>
            </div>
            <div className={styles.geararea_3}>
                <Gear right={true}/>
            </div>
        </div>
        </>
    )
}