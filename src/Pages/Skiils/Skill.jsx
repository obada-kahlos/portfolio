import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../../assets/intro-bg.jpg'
import Heading from '../../components/shared/heading/heading'
import Layout from '../../components/shared/layout/layout'
import SkillCard from '../../components/skill-card/skill-card'
import { Container } from '../layout/styled'
import './css.css'
const skillData = [
  {
    label: 'HTML',
    percentage: '80%'
  },
  {
    label: 'CSS',
    percentage: '80%'
  },
  {
    label: 'TailwindCSS',
    percentage: '70%'
  },
  {
    label: 'Bootstrap',
    percentage: '70%'
  },
  {
    label: 'JavaScript',
    percentage: '50%'
  },
  {
    label: 'TypeScript',
    percentage: '40%'
  },
  {
    label: 'Git/GitHub',
    percentage: '30%'
  },
  {
    label: 'ReactJS',
    percentage: '65%'
  },
  {
    label: 'Redux Toolkit',
    percentage: '65%'
  },
  {
    label: 'Styled-component',
    percentage: '65%'
  },
]


const Skills = () => {
  return (
    <>
      <section className="section">
        <div className="wall">
          <div className="v-boxes">
            <div className="box">
              <span className="tooltip">CSS</span>
              <div className="box-face">
                <div className="box-text"><i className="fab fa-css3-alt"></i></div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">JavaScript</span>
              <div className="box-face">
                <div className="box-text"><i className="fab fa-js-square"></i></div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">Bulma</span>
              <div className="box-face">
                <div className="box-text">
                  <img src="https://bulma.io/favicons/favicon-32x32.png?v=201701041855" alt="" />
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">Vue</span>
              <div className="box-face">
                <div className="box-text"><i className="fab fa-vuejs"></i></div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="v-boxes second">
            <div className="box">
              <span className="tooltip">PHP</span>
              <div className="box-face">
                <div className="box-text"><i className="fab fa-php"></i></div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">Laravel</span>
              <div className="box-face">
                <div className="box-text"><i className="fab fa-laravel"></i></div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">NodeJs</span>
              <div className="box-face">
                <div className="box-text"><i className="fab fa-node-js"></i></div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="v-boxes third">
            <div className="box">
              <span className="tooltip">Electron</span>
              <div className="box-face">
                <div className="box-text">
                  <img src="https://electronjs.org/images/favicon.ico" alt="" />
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">VueNative</span>
              <div className="box-face">
                <div className="box-text"><img src="https://vue-native.io/images/logo.png" alt="" /></div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="v-boxes forth">
            <div className="box link">
              <div className="box-face">
                <div className="box-text"><i className="fab fa-github-alt"></i></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Container classNameName=''>
        <h1 classNameName='text-white md:text-[36px] text-[18px]'> My Skills. </h1>
        <div classNameName='grid grid-cols-12 gap-8 mt-[30px]'>
          {
            skillData.map((item, key) => (
              <div classNameName='md:col-span-6 col-span-12'>
                <SkillCard label={item.label} percentage={item.percentage} key={key} />
              </div>
            ))
          }
        </div>
      </Container> */}
      <Heading text={'Skills'} />
    </>
  )
}

export default Skills

