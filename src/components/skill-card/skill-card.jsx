import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const SkillCard = ({ label, percentage }) => {
    const [percent, setPercent] = useState(0)
    useEffect(() => {
        setPercent(percentage)
    }, [percent])
    return (
        <div>
            <div className='flex justify-between items-center mb-[5px]'>
                <p className='text-[#fff]'> {label} </p>
                <p className='text-[#fff]'> {percentage} </p>
            </div>
            <Wrapper percentage={percent} className=''>
            </Wrapper>
        </div>
    )
}

export default SkillCard


const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 20px;
    background: transparent;
    border: 1px solid rgba(255,255,255,0.5);
    border-radius: 3px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
    overflow: hidden;
    &:after{
        position: absolute;
        content: '';
        left: 0;
        bottom: 0;
        height: 100%;
        width: ${ (props) => props.percentage ? props.percentage : '0%' };
        background-image: linear-gradient(to left top, #e4a765, #fe8300);  
        transition: ${ (props) => props.percentage < '30%' ? '2s' : '0.6s' };
    }
`