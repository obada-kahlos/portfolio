import React from 'react'
import styled from 'styled-components'

const Heading = ({ text }) => {
    return (
        <Container>
            <h1> {text} </h1>
        </Container>
    )
}

export default Heading

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -2;
    h1{
        position: fixed;
        width: 100%;
        height: 100vh;
        color: rgba(255,255,255,0.1);
        font-size: 260px;
        top: 50%;
        left: 50%;
        text-align: center;
        line-height: 100vh;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        transform: translate(-50%, -50%);
        @media(max-width : 768px){
            font-size: 60px;
        }
    }
`