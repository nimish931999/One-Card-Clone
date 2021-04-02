import React from 'react'
import styled from 'styled-components'
const Rewards = () => {
    return (
    <Container>
        <BannerText>
            <IconContainer>
                <img src="https://getonecard.app/images/feature/rewards_icon.svg"/>
            </IconContainer>
            <InnerTextContainer>
                <OptionText1>5X rewards on your top spends</OptionText1>
                <OptionText2>
                5X rewards on Top 2 spend categories. Points are credited instantly and never expire.
                Just swipe right to redeem. No more rounding off, get even fractional points. 
                     </OptionText2>
                
            </InnerTextContainer>
        </BannerText>
        <ImageContainer>
        {/* https://getonecard.app/images/feature/rewards.mp4 */}
        <video width="500" height="500" autoplay="autoplay" loop muted>
                    <source src="https://getonecard.app/images/feature/rewards.mp4" type="video/mp4" />
        </video>
        </ImageContainer>
    </Container>
    )
}

export default Rewards
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
text-align:left;
`
const OptionText1 = styled.div
`
font-size:58px;
font-family:manrope;
font-weight:600;
line-height:1;
text-align:left;

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
margin-right:110px;
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