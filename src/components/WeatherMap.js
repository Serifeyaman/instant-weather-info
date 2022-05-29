import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from 'redux/weather/action';
import TurkeyMap from 'turkey-map-react';
import { myContext } from 'utils/context/MyContext';
import WeatherCard from './WeatherCard';

const MyTurkeyMap = () => {

  const dispatch = useDispatch();
  const { cityWeather } = useSelector(state => state.WeatherReducer)

  const [outClicked, setOutClicked] = useState(false)

  const getCityWeather = (cityName) => {
    let myData = {
      cityName: cityName,
      country: "TR",
      appid: sessionStorage.getItem("appid")
    }
    dispatch(getWeather(myData))
  }

  return (
    <myContext.Provider value={{ setOutClicked: setOutClicked, outClicked: outClicked }}>
      {
        cityWeather?.weather?.length > 0
          ?
          <WeatherCard cityWeather={cityWeather} />
          :
          <TurkeyMap
            hoverable={true}
            onClick={({ name }) => getCityWeather(name)}
            customStyle={{ idleColor: "whitesmoke", hoverColor: "lightgray" }}
            showTooltip={true}

          />

      }
    </myContext.Provider>

  )
}

export default MyTurkeyMap