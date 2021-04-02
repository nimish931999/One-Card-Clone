import React from 'react'
import styled from 'styled-components'

const Placeholder1 = () => {
    return (
        <Container>
            <PlaceholderBack>
                <PlaceHolderText1>No Hidden Fees Ever.</PlaceHolderText1>
                <ChildText>
                    <PlaceHolderText2>No Joining Fees.</PlaceHolderText2>
                    <PlaceHolderText2>No Annual Fees..</PlaceHolderText2>
                    <PlaceHolderText2>No Rewards Redemption Fees.</PlaceHolderText2>
                </ChildText>
            </PlaceholderBack>
        </Container>

// No Joining Fees.
// No Annual Fees.
// No Rewards Redemption Fees.
    )
}

export default Placeholder1
const Container = styled.div
`
// margin-top:10px;
`
const PlaceholderBack = styled.div
`
background-color:#000000;
// width:100%;
// height:auto;
`
const PlaceHolderText1 = styled.div
`background: -webkit-linear-gradient(45deg, #2982de, #8bb89b);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
padding-top:50px;
padding-bottom:30px;
text-align:center;
font-size:62px;
color: white;
`
const ChildText = styled.div
`
padding-top:10px;
padding-bottom:55px;
`
const PlaceHolderText2 = styled.div
`
text-align:center;
font-size:40px;
color:white;
// line-height:1;
`