import React from "react";
import Style from './Relogio.module.css'

export default function Relogio() {
    return (
        <React.Fragment>
            <span className={Style.numbers}>0</span>
            <span className={Style.numbers}>0</span>
            <span className={Style.division}>:</span>
            <span className={Style.numbers}>0</span>
            <span className={Style.numbers}>0</span>
            <span className={Style.division}>:</span>
            <span className={Style.numbers}>0</span>
            <span className={Style.numbers}>0</span>
        </React.Fragment>
    )
}