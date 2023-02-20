import React, { useState, useRef } from "react"
import styles from "styles/accordion.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

export const Accordion = () => {
    const [isOpen, setIsOpen] = useState(false);
    const accordionRef = useRef<HTMLDivElement>(null);

    const handleAccordionClick = () => {
    setIsOpen(!isOpen);
    if (accordionRef.current) {
        accordionRef.current.style.height = isOpen
        ? "0px"
        : `${accordionRef.current.scrollHeight}px`;
    }
    }

    return (
        <div className={styles.accordioncontainer}>
            <div className={styles.accordionheader}>
                <button  onClick={handleAccordionClick}>
                    <p className={isOpen ? styles.open : styles.close}>このページの目的</p>
                    <FontAwesomeIcon 
                    icon={faCircleChevronDown}
                    className={isOpen ? styles.openicon : styles.closeicon}
                    />
                </button>
            </div>
            <div
            className={styles.accordionbody}
            ref={accordionRef}
            style={{ height: isOpen ? "accordionRef.current.style.height" : "0px" }}
            >
                <p>
                    このページは、このWebサイトの管理人である私が研究している内容についてを、主に発信しています。
                    このページの目的は、皆さんに学んでいる内容を知ってもらうとともに、
                    自身のアウトプットのために各ページを作成しています。
                </p>
            </div>
        </div>
    )
}

