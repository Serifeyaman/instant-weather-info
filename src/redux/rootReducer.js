import { combineReducers } from "redux";
import WeatherReducer from "./weather/reducer";

const rootReducer = combineReducers({
    WeatherReducer
});

export default rootReducer