// import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import 'typeface-manrope' 
import '../App.css'
const Banner = () => {
    return (
        <Container>
            {/* <Text> */}
            <BannerText>
                <TextOne>Say Hi to </TextOne>
                <TextTwo>OneCard</TextTwo>
                <TextThree>#TeamMetal</TextThree>
                <Desc>India's best metal credit card. Built with full-stack tech. Backed by the principles of simplicity, transparency, and giving back control to the user.</Desc>
                <BannerButtonContainer>
                    Get OneCard
                </BannerButtonContainer> 
            </BannerText>
            {/* </Text> */}
            <BannerVideo>
                <video width="600" height="600" autoplay="autoplay" loop muted>
                    <source src="https://getonecard.app/images/OneCardApp.mp4" type="video/mp4" />
                </video>
            </BannerVideo>
          
        </Container>
    )
}

export default Banner
const Container = styled.div
`

display:flex;
margin-top:60px;
`
// const Text = styled.div
// `
// margin-top:125px;
// margin-left:40px;
// `
const BannerText = styled.div
`
padding-left:118px;
padding-top:12px;
margin-top:125px;
// margin-left:40px;
text-align:left;
`
const TextOne = styled.div
`
font-size:3.6rem;
font-weight:600;
font-family:manrope;
line-height: 1.3;
`
const TextTwo = styled.div
`
font-size:3.6rem;
font-family:manrope;
color:#1893F7;
font-weight:700;
line-height: 1.3;
`
const TextThree = styled.div
`
font-family:manrope;
font-size:2.3rem;
font-weight:500;
line-height: 1.3;

`
const Desc = styled.div
`
font-family: Manrope;
font-size: 1.1rem;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: 1.5;
letter-spacing: normal;
text-align: left;
color: #939393;
`
const BannerVideo = styled.div
`
margin-top:-40px;
margin-right:110px;
padding-right:20px;

`
const BannerButtonContainer = styled.div
`
background-color:#1893F7;
color:white;
font-family:manrope;
padding: 7px 5px;
border-radius: 40px;
width: 8.954rem;
height: 1.688rem;
font-weight: 800;
font-size:1rem;
text-align:center;
margin-top:20px
`
const Btn = styled.div
`

`
