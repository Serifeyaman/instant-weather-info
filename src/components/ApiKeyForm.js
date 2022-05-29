import React, { useContext } from 'react'
import { Button, Col, Form, Input, InputGroup, InputGroupText, Row } from 'reactstrap'
import { useForm } from 'react-hook-form';
import { apiKey } from 'constants/api';
import "assets/css/formCss.css";
import { Key } from 'react-feather';
import { myContext } from 'utils/context/MyContext';

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const ApiKeyForm = () => {
    const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm();

    const context = useContext(myContext)

    const onSubmit = async (data) => {
        await sessionStorage.setItem("appid", data.appid)
        await sessionStorage.getItem("appid") === apiKey
            ? context.setComponentShow(true)
            :
            MySwal.fire({
                icon: "warning",
                title: "Uyarı!",
                text: "Geçerli bir API Key giriniz!",
                confirmButtonText: "Tamam",
                customClass: {
                    confirmButton: "btn btn-primary ",
                },
                confirmButtonColor: "#22577E",
            })
                .then(function (result) {

                    if (result.value) {
                        reset(
                            { ...getValues(), appid: "" },
                            {
                                errors: true,
                                isSubmitted: true,
                            }
                        );
                    }
                });

    }
    return (
        <Form className='form-css' onSubmit={handleSubmit(onSubmit)}>
            <div className='form-in-div'>
                <Row className='form-row'>
                    <Col xl="11" lg="11" md="9" sm="9" xs="9">
                        <InputGroup >
                            <InputGroupText>
                                <Key size={20} color='gray' />
                            </InputGroupText>
                            <Input
                                placeholder='API KEY GİRİNİZ'
                                type='text'
                                name='appid'
                                id='appid'
                                innerRef={register({ required: true })}
                                invalid={errors.appid && true}
                            />
                        </InputGroup>

                    </Col>
                    <Col xl="1" lg="1" md="3" sm="3" xs="3">
                        <Button type='submit' className='submit-button btn-primary'>
                            Gönder
                        </Button>
                    </Col>
                </Row>

            </div>


        </Form>
    )
}

export default ApiKeyForm