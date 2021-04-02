import React from 'react'
import styled from 'styled-components'
const Blog = () => {
    return (
        <Container>
            <BlogText>
                <TextOne>From Our <span style={{color:"#1893F7"}}>Blog</span></TextOne>
            </BlogText>
            <PostContainer>
                <Posts>
                    <PostImageContainer>
                        <img style={{maxWidth:"100%",height:"auto"}} src="https://getonecard.app/images/blog/blog_onecard_sweet_fest.png" />
                    </PostImageContainer>
                    <PostText></PostText>
                    <PostDesc></PostDesc>
                </Posts>
                <Posts>
                    <PostImageContainer>
                        <img style={{maxWidth:"100%",height:"auto"}} src="https://getonecard.app/images/blog/blog_introducing_onecard_emi.png" />
                    </PostImageContainer>
                    <PostText></PostText>
                    <PostDesc></PostDesc>
                </Posts>
                <Posts>
                    <PostImageContainer>
                        <img style={{maxWidth:"100%",height:"auto"}} src="https://getonecard.app/images/blog/blog_making_onecard_repayment.jpg" />
                    </PostImageContainer>
                    <PostText></PostText>
                    <PostDesc></PostDesc>
                </Posts>
            </PostContainer>
        </Container>
    )
}

export default Blog
const Container = styled.div
`
background-color:#f2f2f2;
padding-bottom:50px;
// padding-top:20px;
// display:flex;
// margin-top:30px;
// justify-content:space-between;`

const TextTwo = styled.div
`
font-size:3.6rem;
font-family:manrope;
color:#1893F7;
font-weight:700;
line-height: 1.3;
`
const TextOne = styled.div
`
font-size:3.6rem;
font-family:manrope;
color:#000000;
font-weight:700;
line-height: 1.3;
`
const BlogText = styled.div
`text-align:center;
padding-top:60px;`

const PostContainer = styled.div
`
// margin-left:110px;
display:flex;
justify-content:center;
padding-top:30px;
`
const PostText = styled.div
``
const PostDesc = styled.div
``
const PostImageContainer = styled.div
`
justify-content:space-between;
img{
    max-width: 100%;
    height: auto;
}
`
const Posts = styled.div
`
padding:10px;
`