import React from 'react'
import { styled } from 'styled-components'
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../components/Comments";
//import Recommendation from "../components/Recommendation";
import Card  from "../components/Card";

const Container = styled.div`
    display: flex;
    gap: 24px;
`;

const Content = styled.div`
    flex: 5;
    margin-top:40px;
    margin-left:40px;
`;
const VideoWrapper = styled.div`\

`;

const Title = styled.h1`
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Info = styled.span`
    color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
    display: flex;
    gap: 20px;
    color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    `;

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Channel = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ChannelInfo = styled.div`
    display: flex;
    gap: 20px;
`;

const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const ChannelDetail = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
    ont-weight: 500;
`;

const ChannelCounter = styled.span`
    margin-top: 5px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.textSoft};
    font-size: 12px;
`;

const Description = styled.p`
    font-size: 14px;
`;  

const Subscribe = styled.button`
    background-color: #cc1a00;
    font-weight: 500;
    color: white;
    border: none;
    border-radius: 3px;
    height: max-content;
    padding: 10px 20px;
    cursor: pointer;
`;

const VideoFrame = styled.video`
    max-height: 720px;
    width: 100%;
    object-fit: cover;
`;

const Recommendation=styled.div`
flex:2;
`;

const Video = () => {
    return (
        <Container>
            <Content>
            <VideoWrapper>
                <VideoFrame 
                width="100%"
                height="720"
                title="test video"
                frameborder="0"
                allow="accelerometer;autoplay;clipboard-writer;encrypted-media;gyroscope;picture-in-picture"
                allowfullscreen
                src="https://www.youtube.com/watch?v=CCF-xV3RSSs&t=1035s" controls />
            </VideoWrapper>
            <Title>tEST vIDEO</Title>
            <Details>
                <Info>
                test test rest</Info>
                <Buttons>
                <Button>
                    <ThumbUpOutlinedIcon />123
                </Button>
                <Button>
                    <ThumbDownOffAltOutlinedIcon />
                    Dislike
                </Button>
                <Button>
                    <ReplyOutlinedIcon /> Share
                </Button>
                <Button>
                    <AddTaskOutlinedIcon /> Save
                </Button>
                </Buttons>
            </Details>
            <Hr />
            <Channel>
                <ChannelInfo>
                <Image />
                <ChannelDetail>
                    <ChannelName>test</ChannelName>
                    <ChannelCounter>12 subscribers</ChannelCounter>
                    <Description>this is a test video</Description>
                </ChannelDetail>
                </ChannelInfo>
                <Subscribe>Subscribe
                </Subscribe>
            </Channel>
            <Hr />
            <Comments/>
            </Content>
            <Recommendation>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
            </Recommendation>
        </Container>
        );
    };


export default Video