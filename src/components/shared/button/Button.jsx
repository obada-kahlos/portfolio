import React from 'react'
import styled from 'styled-components'

const Button = ({ children, uppercase, color, width, fontSize, margin, padding, type }) => {
  return (
    <CustomButton
      color={color}
      width={width}
      fontSize={fontSize}
      uppercase={uppercase}
      padding={padding}
      margin={margin}
      type={type}
    >
      {children}
    </CustomButton>
  )
}

export default Button

const CustomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap : 2;
  border : 2px solid rgba(255,255,255,0.4);
  border-radius: 4px;
  transition: 0.3s;
  width : ${ (props) => props.width ? props.width : 'fit-content' };
  width : ${ (props) => props.width ? props.width : 'fit-content' };
  padding : ${ (props) => props.padding ? props.padding : '5px 15px' };
  margin : ${ (props) => props.margin ? props.margin : '0px' };
  font-size: ${ (props) => props.fontSize ? props.fontSize : '16px' };
  text-transform: ${ (props) => props.uppercase ? props.uppercase : 'lowercase' };
  color : #fff;
  &:hover{
    border : 2px solid #ff8400;
    color : ${ (props) => props.color ? props.color : '#fff' };
  }
  @media(max-width : 768px){
    font-size: 14px;
  }
`