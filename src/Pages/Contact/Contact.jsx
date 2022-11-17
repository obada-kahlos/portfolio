import React, { useEffect, useState } from 'react'
import Input from '../../components/shared/input/Input'
import Button from '../../components/shared/button/Button'
import { Formik, Form, ErrorMessage, useField } from 'formik'
import { InputForm } from './model.js'

import TelegramIcon from '@mui/icons-material/Telegram';
import styled from 'styled-components'
import Container from '../../components/shared/Containers/Containers'


import emailjs from '@emailjs/browser';
import * as yup from 'yup'
import Swal from 'sweetalert2';

import 'react-toastify/dist/ReactToastify.css';
import contactImage from '../../assets/contact.svg'
import LazyLoad from 'react-lazyload'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const schema = yup.object().shape({
    name: yup.string().required("name is required"),
    email: yup.string().email().required("email is required"),
    message: yup.string().required('message is required')
  });

  const initialValues = {
    name: '',
    email: '',
    message: '',
  }
  const [status, setStatus] = useState(null)
  const handleSendEmail = (e) => {
    emailjs.send('service_3cp3xmu', 'template_okwbtzk', e, '1VXwoicodZDNi66Cr'
    ).then(res => {
      setStatus(res.status)
    }).catch(() => {
      toast.error('Something went wrong!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    })
  }

  useEffect(() => {
    if (status === 200) {
      toast.success('Thanks I will reply soon', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setStatus(null)
    }
  }, [status])

  return (
    <>
      <Container className='xl:w-[80%] md:w-[100%] mx-auto relative my-[40px]'>

        <div className='mb-[30px]'>
          <p className='text-slate-200 sm:text-[24px] text-[20px] md:text-center text-left uppercase tracking-[1.5px]'> Get in Touch<span className='text-main-color'>!</span> </p>
          <h1 className='mb-0 md:text-center text-main-color text-left sm:text-[36px] text-[24px] font-bold uppercase tracking-[1.5px]'> Contact Me<span className='text-[#fff]'>.</span></h1>
        </div>
        <div className='grid grid-cols-12 gap-4 justify-center items-center'>
          <div className='md:col-span-6 col-span-12'>
            <div className=''>
              <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values, { resetForm }) => {
                  handleSendEmail(values)
                  resetForm()
                }}
              >
                <Form>
                  <div className=''>
                    {
                      InputForm.map((item, key) => (
                        <div className='my-[20px]' key={key}>
                          <div className='w-full relative'>
                            <Input
                              as={item.as}
                              id={item.id}
                              name={item.name}
                              type={item?.type}
                              placeholder={item.placeholder}
                              cols={item.cols}
                              rows={item.rows}
                              autocomplete={item.autocomplete}
                              className={item.class}
                            />
                            <span className={item.iconStyle}> {item.icon} </span>
                          </div>
                          <ErrorMessage
                            name={item.name}
                            render={(msg) => <p className="error">{msg}</p>}
                          />
                        </div>
                      ))
                    }
                  </div>
                  <Button type={'submit'} color='text-[#fff]'> Send Message <span className='send'> <TelegramIcon /> </span> </Button>
                </Form>
              </Formik>
            </div>

          </div>
          <div className='md:col-span-6 col-span-12 md:mt-[0px] mt-[30px]'>
            <LazyLoad>
              <img src={contactImage} alt="" width='100%' />
            </LazyLoad>
          </div>
        </div>
      </Container>
      <ToastContainer />
    </>
  )
}

export default Contact

const Box = styled.div`
      position : relative;
      overflow: hidden;
      transition: 0.8s;
      &:hover{
        transform: translateY(-4px);
      }
    &:after{
        position : absolute;
        content: "";
        bottom: 0;
        left : 0;
        width : 0%;
        height : 0%;
        background : rgba(255,255,255,0.1);
        opacity: 0.4;
        transition : 0.5s ease;
    }
    &:hover&:after{
        width : 100%;
        height: 100%;
    }
    &:before{
        position : absolute;
        content: "";
        top: 0;
        right: 0;
        width : 0%;
        height : 0%;
        background : rgba(255,255,255,0.1);
        opacity: 0.4;
        transition : 0.5s ease;
    }
    &:hover&:before{
        width : 100%;
        height: 100%;
    }
`