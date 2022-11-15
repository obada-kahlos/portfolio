import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const SkillCard = ({ label, percentage }) => {
    const [percent, setPercent] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setPercent(percentage)
        }, 3100)
    }, [percent])
    return (
        <Wrapper percentage={percent} className=''>
            <p className=' z-[100] text-[14px] whitespace-nowrap rotate-[270deg]'> {label} - {percentage} </p>
        </Wrapper>
    )
}

export default SkillCard


const Wrapper = styled.div`
    position: relative;
    width: 60px;
    height: 250px;
    background: transparent;
    border: 2px solid rgba(255,255,255,0.5);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
    &:after{
        position: absolute;
        content: '';
        bottom: 0;
        width: 100%;
        height: ${ (props) => props.percentage ? props.percentage : '0%' };
        background-image: linear-gradient(to left top, #945007, #fe8300);  
        transition: ${ (props) => props.percentage < '30%' ? '2s' : '0.6s' };
    }
`