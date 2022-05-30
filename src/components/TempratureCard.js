import React from 'react'
import { Col, Row } from 'reactstrap'
import { getTodayDate, tempratureConverter } from 'utils/utilsHelper'

const TempratureCard = ({ item, main, cityWeather }) => {

    return (
        <>
            <Row>
                <Col xl="2" lg="2" md="2" sm="2" xs="12" style={{ alignItems: 'center', display: 'flex' }}>
                    <span>
                        <img alt='image' src={`http://openweathermap.org/img/wn/${item?.icon}.png`} width={120} height={120} style={{ float: 'left' }} />
                    </span>
                </Col>
                <Col xl="2" lg="2" md="2" sm="2" xs="12" style={{ alignItems: 'center', justifyContent: 'left', display: 'flex' }}>
                    <span>
                        <h1 style={{ color: 'whitesmoke' }}>{tempratureConverter(main?.temp)}</h1>
                        <p style={{ color: 'whitesmoke' }}>Feels {tempratureConverter(main?.feels_like)}</p>
                    </span>

                </Col>
                <Col xl="8" lg="8" md="8" sm="8" xs="12" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <span style={{ textAlign: 'end' }}>
                        <h2 style={{ color: 'whitesmoke', textTransform: 'capitalize' }}>
                            {item?.main} | <span style={{ fontSize: 15, alignSelf: 'center' }}>{item?.description}</span>
                        </h2>
                        <h5 style={{ color: 'whitesmoke'}}>{getTodayDate()}</h5>
                        <h6 style={{ color: 'whitesmoke' }}>Humidity: {main?.humidity} %</h6>
                        <h6 style={{ color: 'whitesmoke' }}>Wind Speed: {cityWeather?.wind?.speed} m/h</h6>
                    </span>

                </Col>

            </Row>
        </>

    )
}

export default TempratureCard