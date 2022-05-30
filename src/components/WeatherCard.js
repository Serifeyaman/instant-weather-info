import React, { useContext, useEffect } from 'react'
import { Card, CardBody, CardTitle, Col, Row } from 'reactstrap'
import "assets/css/weatherCardCss.css"
import { animations } from 'react-animation'
import { myContext } from 'utils/context/MyContext';
import { useDispatch, useSelector } from 'react-redux';
import { resetWeather } from 'redux/weather/action';
import { ArrowUp, MapPin, Repeat, Sunrise, Sunset, Thermometer, Wind, XCircle } from 'react-feather';
import TempratureCard from './TempratureCard';
import { getHour, tempratureConverter } from 'utils/utilsHelper';

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const WeatherCard = () => {

    const { cityWeather } = useSelector(state => state.WeatherReducer)
    const context = useContext(myContext)
    const dispatch = useDispatch()

    useEffect(() => {
        cityWeather.cod !== 200 &&
            MySwal.fire({
                icon: "error",
                title: "Hata!",
                text: "İşlem sırasında bir hata meydana geldi!",
                confirmButtonText: "Tamam",
                customClass: {
                    confirmButton: "btn btn-primary ",
                },
                confirmButtonColor: "#22577E",
            })
    }, [])

    let myData = [
        {
            id: 1,
            title: "Wind Direction",
            icon: <Wind size={18} color='#fcba03' />,
            value: <span><ArrowUp size={18} style={{ transform: `rotate(${cityWeather?.wind?.deg}deg)` }} /> {cityWeather?.wind?.gust ? `(${cityWeather?.wind?.gust} m/h)` : ""} </span>,
        },
        {
            id: 2,
            title: "Atm. Pressure",
            icon: <Repeat size={18} color='#fcba03' />,
            value: `${cityWeather?.main?.pressure} hPa`,
        },
        {
            id: 3,
            title: "Min Tempreture",
            icon: <Thermometer size={18} color='#fcba03' />,
            value: tempratureConverter(cityWeather?.main?.temp_min),
        },
        {
            id: 4,
            title: "Sunrise",
            icon: <Sunrise size={18} color='#fcba03' />,
            value: `${getHour(cityWeather?.sys?.sunrise)} AM`,
        },
        {
            id: 5,
            title: "Max Tempreture",
            icon: <Thermometer size={18} color='#fcba03' />,
            value: tempratureConverter(cityWeather?.main?.temp_max),
        },
        {
            id: 6,
            title: "Sunset",
            icon: <Sunset size={18} color='#fcba03' />,
            value: `${getHour(cityWeather?.sys?.sunset)} PM`,
        }
    ]

    return (
        <div className='main-div' style={{ animation: animations.bounceIn }}>
            <Card className='weather-card'>
                <span style={{ width: '100%', padding: '2%' }}>
                    <XCircle onClick={() => (context.setOutClicked(true), dispatch(resetWeather()))} size={30} color='White' style={{ float: 'right' }} />
                </span>
                <CardTitle>
                    <Row style={{ width: '100%', padding: '3%' }}>
                        <Col lg="12" md="12" sm="12">
                            <h2 style={{ color: 'whitesmoke', alignItems: 'center', display: 'flex' }}>
                                <MapPin size={25} /> <span style={{ marginLeft: '1%', textTransform: 'capitalize' }}>{cityWeather?.name}</span>
                            </h2>
                        </Col>
                        <Col lg="12" md="12" sm="12">
                            {
                                cityWeather?.weather?.map((item, key) => (
                                    <TempratureCard key={key} item={item} main={cityWeather?.main} cityWeather={cityWeather} />
                                ))
                            }
                        </Col>
                    </Row>
                </CardTitle>
                <CardBody>
                    <Row>
                        {myData?.map((item, key) => (
                            <Col xl="6" lg="6" md="6" sm="6" key={key}>
                                <Card className='weatherDetail' style={{ animation: animations.slideIn }}>
                                    <CardBody>
                                        <Row >
                                            <Col xl="3" lg="3" md="12" sm="12" xs="12" >
                                                <h6>{item?.icon}<span style={{ marginLeft: '3%' }}>{item?.title}</span></h6>
                                            </Col>
                                            <Col xl="9" lg="9" md="12" sm="12" xs="12">
                                                {item?.value}
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </CardBody>

            </Card>
        </div>


    )
}

export default WeatherCard