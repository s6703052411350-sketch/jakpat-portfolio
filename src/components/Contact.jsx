import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const StyledSection = styled.section`
min-height:100vh;
background:#000;
color:white;
padding:80px 0;
position:relative;
overflow:hidden;

&:before{
content:"";
position:absolute;
width:500px;
height:500px;
background:radial-gradient(circle,#d4af3725,transparent);
top:30%;
right:10%;
filter:blur(120px);
z-index:0;
}
`;

const BigTitle = styled.div`
max-width:520px;

h1{
font-size:clamp(48px,6vw,72px);
font-weight:800;
line-height:1.1;
}

.gradient{
background:linear-gradient(90deg,#d4af37,#e6c15a);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}

p{
margin-top:24px;
font-size:16px;
opacity:0.7;
}
`;

const SocialList = styled.div`margin-top:40px;
display:flex;
flex-direction:column;
gap:16px;`;

const SocialItem = styled.a`
display:flex;
align-items:center;
gap:12px;
text-decoration:none;
color:white;
font-weight:500;
transition:0.25s;

&:hover{
color:#d4af37;
transform:translateX(8px);
}
`;

const ContactInfo = styled.div`margin-top:35px;
display:flex;
flex-direction:column;
gap:12px;`;

const InfoRow = styled.div`display:flex;
align-items:center;
gap:10px;
opacity:0.9;`;

const Divider = styled.div`margin-top:35px;
width:80%;
height:1px;
background:#222;`;

const FormCard = styled.div`
transform:translateX(90px);
background:#0f0f0f;
border-radius:20px;
padding:40px;
border:1px solid #222;
box-shadow:0 20px 50px rgba(0,0,0,0.6);
transition:0.3s;
position:relative;
z-index:1;

&:hover{
border:1px solid #d4af37;
box-shadow:0 20px 60px rgba(212,175,55,0.25);
}

.form-control{
background:#0f0f0f;
border:1px solid #333;
color:white;
}

.form-control:focus{
border-color:#d4af37;
box-shadow:0 0 0 0.2rem rgba(212,175,55,0.25);
background:#0f0f0f;
color:white;
}
`;

const SendButton = styled(Button)`
background:#d4af37;
border:none;
padding:12px 35px;
font-weight:600;
border-radius:8px;
color:#000;
box-shadow:0 10px 25px rgba(212,175,55,0.35);
transition:0.25s;

&:hover{
transform:translateY(-2px);
background:#fff;
color:#000;
box-shadow:0 15px 30px rgba(212,175,55,0.45);
}
`;

const SuccessMessage = styled.div`margin-top:20px;
text-align:center;
color:#d4af37;
font-weight:600;`;

export default function Contact() {

    const form = useRef();
    const [sent, setSent] = useState(false);

    /* animation */

    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: .7 } }
    }

    const fadeRight = {
        hidden: { opacity: 0, x: 80 },
        show: { opacity: 1, x: 0, transition: { duration: .7 } }
    }

    const stagger = {
        hidden: {},
        show: { transition: { staggerChildren: .15 } }
    }

    /* FAKE SEND */

    const sendEmail = (e) => {
        e.preventDefault();

        setSent(true);

        setTimeout(() => {
            setSent(false);
        }, 4000);

        e.target.reset();
    };

    return (

        <StyledSection>

            <Container>

                <Row className="align-items-center">

                    {/* LEFT */}

                    <Col md={5}>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}

                        >

                            <BigTitle>

                                <h1>
                                    Let's Connect
                                    <br />
                                    <span className="gradient">and Collaborate.</span>
                                </h1>

                                <p>
                                    Feel free to reach out if you have an idea or project in mind.
                                </p>

                            </BigTitle>

                        </motion.div>

                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}

                        >

                            <SocialList>

                                <motion.div variants={fadeUp}> <SocialItem href="https://www.facebook.com/share/185GMUvfWr/?mibextid=wwXIfr" target="_blank"> <Icon icon="mdi:facebook" width="22" /> Facebook </SocialItem>
                                </motion.div>

                                <motion.div variants={fadeUp}> <SocialItem href="https://www.instagram.com/jj_save_?igsh=OWp3YnAxM3lzMjc%3D&utm_source=qr" target="_blank"> <Icon icon="mdi:instagram" width="22" /> Instagram </SocialItem>
                                </motion.div>

                                <motion.div variants={fadeUp}> <SocialItem href="https://line.me/ti/p/0GS0uLo8nT" target="_blank"> <Icon icon="mdi:chat" width="22" /> Line </SocialItem>
                                </motion.div>

                            </SocialList>

                        </motion.div>

                        <Divider />

                        <ContactInfo>

                            <InfoRow>
                                <Icon icon="mdi:phone" width="20" /> 093-508-1157
                            </InfoRow>

                            <InfoRow>
                                <Icon icon="mdi:map-marker" width="20" /> Nonthaburi, Thailand
                            </InfoRow>

                        </ContactInfo>

                    </Col>

                    {/* FORM */}

                    <Col md={7}>

                        <motion.div
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}

                        >

                            <FormCard>

                                <h4 style={{ marginBottom: "30px" }}>
                                    SEND MESSAGE
                                </h4>

                                <Form ref={form} onSubmit={sendEmail}>

                                    <Row>

                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" placeholder="Your name" required />
                                            </Form.Group>
                                        </Col>

                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder="email@example.com" required />
                                            </Form.Group>
                                        </Col>

                                    </Row>

                                    <Form.Group className="mb-4">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={4} placeholder="Tell me about your project..." required />
                                    </Form.Group>

                                    <div style={{ display: "flex", justifyContent: "center" }}>

                                        <SendButton type="submit">
                                            <Icon icon="mdi:send" style={{ marginRight: "8px" }} />
                                            SEND MESSAGE
                                        </SendButton>

                                    </div>

                                    {sent && (<SuccessMessage>
                                        ✅ Message sent successfully! </SuccessMessage>
                                    )}

                                </Form>

                            </FormCard>

                        </motion.div>

                    </Col>

                </Row>

            </Container>

        </StyledSection>

    )
}
