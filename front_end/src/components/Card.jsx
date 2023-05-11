import React from 'react'
import { styled } from 'styled-components'
import { Link } from "react-router-dom";

const Container=styled.div`
width:360px;
cursor:pointer;
margin-bottom:45px;
`;
const Image=styled.img`
width:100%;
height:200px;
background-color:#999;
`;
const Details=styled.div`
display:flex;
margin-top:16px;
gap:12;
`;
const ChannelImage=styled.div`
width:36px;
height:36px;
border-radius:50%;
background-color:#999;
`;
const Text=styled.div`

`;
const Title=styled.h1`
font-size:16px;
font-weight:500;
color:${({theme})=>theme.text};
`;
const ChannelName=styled.h2`
font-size:14px; 
color:${({theme})=>theme.textsoft};
margin:10px 0px;
`;
const Info=styled.div`
font-size:14px;
color:${({theme})=>theme.textsoft}; 
`;
const Card = () => {
    return (
        <Link to="/video/test" style={{textDecoration:"none"}}>
        <Container>
            <Image />
            <Details>
                <ChannelImage />
                <Text>
                    <Title>Test Video</Title>
                    <ChannelName>Test Channel</ChannelName> 
                    <Info>Test info</Info>
                </Text>
            </Details>
        </Container>
        </Link>
    )
}

export default Card