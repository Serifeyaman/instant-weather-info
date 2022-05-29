export const tempratureConverter = (kTemp) => {
    let temp = kTemp - 273;
    return `${Math.round(temp)} °C`
}

export const getTodayDate = () => {
    const today = new Date().toLocaleDateString('en-GB', {  
        day:   'numeric',
        month: 'short',
    });
    return today;
}


export const getHour = (msTime) => {
    let utcTime = new Date(msTime);

    let localTimeString = utcTime.toLocaleTimeString(undefined, {
        hour:   '2-digit',
        minute: '2-digit',
    });

    return localTimeString?.split(" ")[0];

}
