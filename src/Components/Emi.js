import React from 'react'
import styled from 'styled-components'
const Emi = () => {
    return (
        <Container>
            <VideoContainer>
            <video width="500" height="500" autoplay="autoplay" loop muted>
                    <source src="https://getonecard.app/images/feature/emi.mp4" type="video/mp4" />
            </video>
            </VideoContainer>
            <TextContainer>
                <ImageContainer>
                    <img src="https://getonecard.app/images/feature/emi.svg" />
                </ImageContainer>
                <InnerTextContainer>
                    <OptionText1>
                    OneCard EMI
                    </OptionText1>
                    <OptionText2>
                    Shop in full, pay in parts. No calls, no emails, no documentation. Get points on EMI transactions,
                     repay EMIs with reward points. Manage EMIs from the EMI Dashboard. 
                    </OptionText2>
                </InnerTextContainer>
                
            </TextContainer>
        </Container>
    )
}
export default Emi
const Container = styled.div
`
display:flex;
justify-content:space-between;
background-color:white;
`
const VideoContainer = styled.div
`
padding-left:118px;
padding-top:12px;

`
const TextContainer = styled.div
`
padding-top:90px;
display:flex;
flex-direction:column;
align-items:right;
`
const ImageContainer = styled.div
`
margin-left:auto;
margin-right:110px;

`
const OptionText1 = styled.div
`
font-size:72px;
font-family:manrope;
font-weight:600;
line-height:1;
`
const OptionText2 = styled.div
`
font-size:22px;
font-family:manrope;
line-height:1;
color: #939393;
line-height:1.3;
padding-top:10px;

`
const InnerTextContainer = styled.div
`
text-align:right;
margin-right:110px;
margin-left:100px;
`