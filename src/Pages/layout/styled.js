import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    width: 80%;
  }
  @media (max-width : 768px){
    width: 80%;
  }
  @media (max-width : 500px){
    width: 95%;
  }
`;
export const ButtonMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 60px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:30%;
  border: 1px solid #fff;
  font-size: 28px;
  color: #fff;
  display: block;
  transition: 0.4s;
  cursor: pointer;
  &:hover{
    background: #3688b1;
  }
  @media (max-width : 500px){
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
