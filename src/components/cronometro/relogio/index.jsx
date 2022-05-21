import React from "react";
import { secondsFormated } from "../../../common/utils/time_conversion";
import Style from './Relogio.module.css'

export default function Relogio({ curTime }) {

    const curTimeInString = secondsFormated(curTime)

    const [hours = '00', minutes = '00', seconds = '00'] = curTimeInString.split(':')
    const [hoursTen, hoursUnity] = hours.padStart(2, '0')
    const [minutesTen, minutesUnity] = minutes.padStart(2, '0')
    const [secondsTen, secondsUnity] = seconds.padStart(2, '0')

    return (
        <React.Fragment>
            <span className={Style.numbers}>{hoursTen}</span>
            <span className={Style.numbers}>{hoursUnity}</span>
            <span className={Style.division}>:</span>
            <span className={Style.numbers}>{minutesTen}</span>
            <span className={Style.numbers}>{minutesUnity}</span>
            <span className={Style.division}>:</span>
            <span className={Style.numbers}>{secondsTen}</span>
            <span className={Style.numbers}>{secondsUnity}</span>
        </React.Fragment>
    )
}