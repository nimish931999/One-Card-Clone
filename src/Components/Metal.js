import React from 'react'
import styled from 'styled-components'
const Metal = () => {
    return (
    <Container>
        <BannerText>
            <IconContainer>
                <img src="https://getonecard.app/images/feature/metal_icon.svg"/>
            </IconContainer>
            <InnerTextContainer>
                <OptionText1>It's metal</OptionText1>
                <OptionText2>
                    A credit card that is exclusive, and exquisitely crafted with metal,
                     because you deserve only the best. Why settle for plastic cards anymore?
                     </OptionText2>
                <BannerButtonContainer>Play Video</BannerButtonContainer>
            </InnerTextContainer>
        </BannerText>
        <ImageContainer>
            <img src="https://getonecard.app/images/feature/metal.gif" />
        </ImageContainer>
    </Container>
    )
}

export default Metal
const Container = styled.div
`
padding-bottom:50px;
// padding-top:20px;
background-color:#f2f2f2;
display:flex;
// margin-top:30px;
justify-content:space-between;
`
const BannerText = styled.div
`
display:flex;
flex-direction:column;
padding-left:118px;
padding-top:100px;
// margin-top:125px;
// margin-left:40px;
text-align:left;
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
text-align:left;
margin-right:90px;
margin-left:40px;

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
margin-top:30px

`
const ImageContainer = styled.div
`margin-right:130px;
padding-left:50px;
padding-top:50px;`
const IconContainer = styled.div
`
margin-left:50px;

`