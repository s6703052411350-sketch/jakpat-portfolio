import styled, { keyframes } from "styled-components";
import profile from "../images/profile.jpg";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

/* ===== ANIMATION ===== */

const fadeUp = keyframes`
from{
opacity:0;
transform:translateY(40px);
}
to{
opacity:1;
transform:translateY(0);
}
`;


/* ===== HERO SECTION ===== */

const HeroSection = styled.section`
height:100vh;
width:100%;
background:#000;
display:flex;
align-items:center;
position:relative;
overflow:hidden;
`;

const Content = styled.div`
position:relative;
z-index:2;
padding-left:8vw;
max-width:600px;
`;


/* ===== ANIMATION WRAPPERS ===== */

const Reveal1 = styled.div`
opacity:0;
animation:${fadeUp} .8s ease forwards;
animation-delay:.2s;
`;

const Reveal2 = styled.div`
opacity:0;
animation:${fadeUp} .8s ease forwards;
animation-delay:.5s;
`;

const Reveal3 = styled.div`
opacity:0;
animation:${fadeUp} .8s ease forwards;
animation-delay:.8s;
`;

const Reveal4 = styled.div`
opacity:0;
animation:${fadeUp} .8s ease forwards;
animation-delay:1.1s;
`;

const Reveal5 = styled.div`
opacity:0;
animation:${fadeUp} .8s ease forwards;
animation-delay:1.4s;
`;


/* ===== TEXT ===== */

const Line = styled.div`
color:#d4af37;
display:block;
width:fit-content;
transition:transform .35s ease, text-shadow .35s ease;

&:hover{
transform:translateX(20px);
text-shadow:0 10px 25px rgba(212,175,55,0.4);
}
`;

const SmallTitle = styled.div`
display:flex;
align-items:center;
gap:18px;
color:#d4af37;
font-size:22px;
margin-bottom:30px;
line-height:1;
cursor:default;

&:hover{
transform:translateX(18px);
text-shadow:0 10px 25px rgba(212,175,55,0.4);
}
`;

const Name = styled.div`
color:#d4af37;
font-size:110px;
font-family:serif;
line-height:1.05;
margin-bottom:30px;

@media (max-width:900px){
font-size:80px;
}
`;

const Description = styled.div`
color:#d4af37;
font-size:20px;
line-height:1.7;
max-width:420px;
margin-bottom:50px;

&:hover{
transform:translateX(20px);
text-shadow:0 10px 25px rgba(212,175,55,0.4);
}
`;


/* ===== BUTTON ===== */

const ButtonGroup = styled.div`
display:flex;
gap:30px;
`;

const ButtonLink = styled(Link)`
padding:14px 40px;
border:2px solid #d4af37;
background:transparent;
color:#d4af37;
border-radius:30px;
font-size:18px;
cursor:pointer;
transition:all .3s ease;
display:inline-flex;
align-items:center;
justify-content:center;
text-decoration:none;

&:hover{
background:#d4af37;
color:#000;
transform:translateY(-3px);
box-shadow:0 10px 30px rgba(212,175,55,0.35);
}

&:active{
transform:translateY(1px);
box-shadow:0 5px 15px rgba(212,175,55,0.3);
}
`;


/* ===== IMAGE ===== */

const ImageWrapper = styled.div`
position:absolute;
right:0;
top:0;
height:100%;
z-index:1;
`;

const ProfileImg = styled.img`
height:100%;
width:auto;
object-fit:cover;
`;

const Fade = styled.div`
position:absolute;
left:-300px;
top:0;
width:500px;
height:100%;
background:linear-gradient(
to right,
black 0%,
rgba(0,0,0,0.9) 40%,
rgba(0,0,0,0.6) 70%,
rgba(0,0,0,0) 100%
);
`;


/* ===== COMPONENT ===== */

export default function Hero() {

    return (

        <HeroSection>

            <Content>

                <Reveal1>
                    <SmallTitle>
                        <Icon icon="mdi:robot" width="40" />
                        AI / Computer Vision Developer
                    </SmallTitle>
                </Reveal1>


                <Name>

                    <Reveal2>
                        <Line>Hi! I'm</Line>
                    </Reveal2>

                    <Reveal3>
                        <Line>Jakpat</Line>
                    </Reveal3>

                    <Reveal4>
                        <Line>Saartaiam</Line>
                    </Reveal4>

                </Name>


                <Reveal4>
                    <Description>
                        Passionate about building AI systems,
                        Computer Vision applications,
                        and intelligent web solutions.
                    </Description>
                </Reveal4>


                <Reveal5>
                    <ButtonGroup>

                        <ButtonLink to="/resume">
                            Resume
                        </ButtonLink>

                        <ButtonLink to="/contact">
                            Contact
                        </ButtonLink>

                    </ButtonGroup>
                </Reveal5>

            </Content>


            <ImageWrapper>

                <ProfileImg src={profile} />
                <Fade />

            </ImageWrapper>

        </HeroSection>

    )
}