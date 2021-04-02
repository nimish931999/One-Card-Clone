import React from 'react'
import styled from'styled-components'
// import '../App.css'
const NavBar = () => {
    return (
        <div>
            <Container>
                <HeaderIconContainer>
                    <img src="https://getonecard.app/images/logo_black.svg" />
                </HeaderIconContainer>
                <HeaderContent>
                    <Items>Home</Items>
                    <Items>About Us</Items>
                    <Items>Career</Items>
                    <Items>Blog</Items>
                    <Items>FAQ</Items>
                    <Items>Contact Us</Items>
                
                </HeaderContent>
            </Container>
        </div>
    )
}

export default NavBar
const Container = styled.div
`

// margin:63px 22px 10px 18px;
display:flex;
justify-content:space-between;
`
const HeaderIconContainer = styled.div
`
padding-left:118px;
padding-top:12px;
img{
    width:80px;
    height:40px;
}
`
const HeaderContent = styled.div
`
margin-right:100px;
display:flex;
margin-top:15px;
`
const Items = styled.div
`
padding-right:35px;
padding-top:15px
font-size: 0.900rem;
letter-spacing:.75px;
font-weight:600;
font-family:manrope;
// justify-content:space-between;
`