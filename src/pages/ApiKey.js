import ApiKeyForm from 'components/ApiKeyForm'
import WeatherMap from 'components/WeatherMap'
import { apiKey } from 'constants/api'
import React, { useEffect, useState } from 'react'
import { AnimateOnChange, animations } from 'react-animation'
import { myContext } from 'utils/context/MyContext'
import "assets/css/cloudAnimate.css"

const ApiKey = () => {
    const [componentShow, setComponentShow] = useState(false)

    useEffect(() => {
        sessionStorage.getItem("appid") === apiKey ? setComponentShow(true) : setComponentShow(false)
    }, [componentShow])

    return (
        <myContext.Provider value={{ setComponentShow: setComponentShow }}>

            {
                (componentShow || sessionStorage.getItem("appid") === apiKey)
                    ?
                    <div className='map-main-div' style={{ animation: animations.bounceIn }}>
                        <WeatherMap />
                    </div>
                    :
                    <div className='main-div animate-area' >
                        <AnimateOnChange
                            durationOut={500}
                            animationIn="fadeInUp"
                            animationOut="bounceOut"
                            className='form-css'
                        >
                            <ApiKeyForm />
                        </AnimateOnChange>
                    </div>

            }
        </myContext.Provider>

    )
}

export default ApiKey