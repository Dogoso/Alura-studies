export const timeInSeconds = (time) => {
    const [hours = '00', minutes = '00', seconds = '00'] = time.split(':')
    const hoursInSeconds = Number(hours) * 60 * 60
    const minutesInSeconds = Number(minutes) * 60
    return hoursInSeconds + minutesInSeconds + Number(seconds)
}

export const secondsFormated = (seconds) => {
    const inHours = Math.floor((seconds / 60) / 60)
    const inMinutes = Math.floor( (seconds - (inHours * 60 * 60))  / 60)
    const inSeconds = (seconds - ((inHours * 60 * 60) + (inMinutes * 60)))

    return `${inHours}:${inMinutes}:${inSeconds}`
}