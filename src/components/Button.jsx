import styled from 'styled-components'

const Button = styled.div`
width:220px;
height: 44px;
background: black;
color: white;
font-size: 16px;
font-weight: 400;
text-align: center;
align-content: center;
border-radius: 5px;
border: 1px solid black;
transition: 0.3s background ease-in;
cursor: pointer;

&:hover{
    transition: 0.3s background ease-in;
    background-color: white;
    color: black;
}
`

export default Button
