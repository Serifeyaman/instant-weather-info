const INITIALSTATE = {
    cityWeather: {}
}

const WeatherReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        case 'GET_WEATHER':
            return {
                ...state,
                cityWeather: action.cityWeather
            }
        case 'RESET_WEATHER':
            return {
                ...state,
                cityWeather: undefined
            }

        default:
            return state;
    }
}

export default WeatherReducer