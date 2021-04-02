import React from 'react'
import styled from 'styled-components'
const Footer = () => {
    return (
        <Container>
            <FooterText>This is a cloned website of one card app created using react</FooterText>
            <FooterText>Copyright &#169; reserved by Nimish Kappal</FooterText>
        </Container>
    )
}

export default Footer
const Container = styled.div
`
height:auto;
width:100%;
background-color:#000000;
padding-bottom:30px;`
const FooterText = styled.div
`
color:white;
font-size:20px;
text-align:center;
// padding-bottom:20px;
padding-top:20px;
line-height:1;
`