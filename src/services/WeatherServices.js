import axios from "axios";
import { URL } from "constants/api"

export const getCityWeather = (data) => {
    return axios.get(`${URL}/data/2.5/weather?q=${data.cityName}&${data.country}&appid=${data.appid}`)
}