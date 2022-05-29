import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from 'redux/weather/action';
import TurkeyMap from 'turkey-map-react';
import { myContext } from 'utils/context/MyContext';
import WeatherCard from './WeatherCard';

const MyTurkeyMap = () => {

  const dispatch = useDispatch();
  const { cityWeather } = useSelector(state => state.WeatherReducer)

  //weathercard dışına tıklama olayı için
  const [outClicked, setOutClicked] = useState(false)

  const getCityWeather = (plateNumber, cityName) => {
    let myData = {
      cityName: cityName,
      country: "TR",
      appid: sessionStorage.getItem("appid")
    }
    dispatch(getWeather(myData))
  }

  return (
    <>
      <myContext.Provider value={{ setOutClicked: setOutClicked, outClicked: outClicked }}>
        {
          cityWeather?.weather?.length > 0
            ?
            <WeatherCard cityWeather={cityWeather} />
            :
            (cityWeather === undefined && !outClicked) ? (
              <TurkeyMap
                hoverable={true}
                onClick={({ plateNumber, name }) => getCityWeather(plateNumber, name)}
                customStyle={{ idleColor: "whitesmoke", hoverColor: "lightgray" }}
                showTooltip={true}

              />)
              :
              <>
                <TurkeyMap
                  hoverable={true}
                  onClick={({ plateNumber, name }) => getCityWeather(plateNumber, name)}
                  customStyle={{ idleColor: "whitesmoke", hoverColor: "lightgray" }}
                  showTooltip={true}

                />
                <h2>
                  {cityWeather?.name}
                </h2>
                {cityWeather?.weather?.map((item, key) => (
                  <h4 key={key}>
                    {item.main}
                  </h4>
                ))}
              </>

        }
      </myContext.Provider>
    </>

  )
}

export default MyTurkeyMap