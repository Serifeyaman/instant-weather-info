import { getCityWeather } from "services/WeatherServices";

export const getWeather = (myData) => {
    return dispatch => {
        getCityWeather(myData).then((res) => {
            dispatch({
                type:'GET_WEATHER',
                cityWeather: res.data
            })
        }).catch(err => console.log(err))
    }
}

export const resetWeather = () => {
    return dispatch => {
        dispatch({
            type:'RESET_WEATHER'
        })
    }
}