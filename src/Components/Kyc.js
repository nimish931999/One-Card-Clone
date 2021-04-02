import React from 'react'
import styled from 'styled-components'
const Kyc = () => {
    return (
        <Container>
            <VideoContainer>
            <video width="500" height="500" autoplay="autoplay" loop muted>
                    <source src="https://getonecard.app/images/feature/kyc.mp4" type="video/mp4" />
            </video>
            </VideoContainer>
            <TextContainer>
                <ImageContainer>
                    <img src="https://getonecard.app/images/feature/kyc_icon.svg" />
                </ImageContainer>
                <InnerTextContainer>
                    <OptionText1>
                    Seamless on-<br></br>boarding
                    </OptionText1>
                    <OptionText2>
                    Get started using a completely digital 
                    on-boarding process, and activate your OneCard in less than 5 minutes. 
                    </OptionText2>
                </InnerTextContainer>
                
            </TextContainer>
        </Container>
    )
}
export default Kyc
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