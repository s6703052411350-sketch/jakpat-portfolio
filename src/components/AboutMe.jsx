import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import profile from "../images/profile.jpg";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function AboutMe() {

    const skills = [
        { icon: "logos:python", name: "Python" },
        { icon: "logos:react", name: "React" },
        { icon: "logos:nodejs-icon", name: "Node.js" },
        { icon: "logos:docker-icon", name: "Docker" },
        { icon: "simple-icons:opencv", name: "OpenCV" },
        { icon: "mdi:brain", name: "Machine Learning" },
        { icon: "mdi:robot", name: "Deep Learning" },
        { icon: "logos:firebase", name: "Firebase" }
    ]

    const focus = [
        { icon: "mdi:eye", title: "Computer Vision" },
        { icon: "mdi:target", title: "Object Detection" },
        { icon: "mdi:brain", title: "Machine Learning" },
        { icon: "mdi:rocket-launch", title: "AI Applications" }
    ]

    const particlesInit = async (engine) => {
        await loadFull(engine);
    }


    /* ===== ANIMATION VARIANTS ===== */

    const fadeUp = {
        hidden: { opacity: 0, y: 60 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: .7 }
        }
    }

    const stagger = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: .15
            }
        }
    }

    return (

        <section style={{
            background: "#000",
            color: "white",
            padding: "80px 0",
            position: "relative",
            overflow: "hidden"
        }}>

            {/* PARTICLES */}

            <Particles
                init={particlesInit}
                options={{
                    particles: {
                        number: { value: 45 },
                        color: { value: "#d4af37" },
                        links: { enable: true, color: "#d4af37", opacity: 0.2 },
                        move: { enable: true, speed: 0.6 },
                        size: { value: 2 },
                        opacity: { value: 0.5 }
                    }
                }}
                style={{ position: "absolute", top: 0, left: 0 }}
            />

            <Container style={{ position: "relative", zIndex: 2 }}>

                {/* HEADER */}

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    style={{ marginBottom: "50px" }}
                >

                    <p style={{
                        color: "#777",
                        letterSpacing: "8px",
                        fontSize: "24px"
                    }}>
                        ABOUT ME
                    </p>

                    <h1 style={{
                        fontSize: "120px",
                        fontWeight: "1000",
                        color: "#d4af37"
                    }}>
                        WHO I AM
                    </h1>

                </motion.div>

                <Row className="align-items-center">

                    {/* PROFILE */}

                    <Col md={5}>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >

                            <Tilt
                                tiltMaxAngleX={10}
                                tiltMaxAngleY={10}
                                scale={1.05}
                                transitionSpeed={2000}
                                style={{
                                    background: "#0f0f0f",
                                    padding: "25px",
                                    borderRadius: "20px",
                                    border: "1px solid #222",
                                    boxShadow: "0 0 70px rgba(212,175,55,0.2)"
                                }}
                            >

                                <img
                                    src={profile}
                                    alt="profile"
                                    style={{
                                        width: "100%",
                                        borderRadius: "16px"
                                    }}
                                />

                            </Tilt>

                        </motion.div>

                    </Col>

                    {/* INTRO */}

                    <Col md={7} style={{ paddingLeft: "70px" }}>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >

                            <h2 style={{
                                fontSize: "62px",
                                fontWeight: "700",
                                marginBottom: "30px"
                            }}>
                                Jakpat Saartaiam
                            </h2>

                            <p style={{
                                color: "#ccc",
                                lineHeight: "2",
                                fontSize: "22px",
                                maxWidth: "650px"
                            }}>
                                ผมเป็นนักศึกษาสาขา Electronics Computer จาก
                                มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ
                                ที่สนใจด้าน Artificial Intelligence,
                                Computer Vision และ Web Development

                                ปัจจุบันกำลังพัฒนาโปรเจกต์เกี่ยวกับ
                                Machine Learning และ Object Detection
                                ด้วย YOLO และ OpenCV
                            </p>

                        </motion.div>

                    </Col>

                </Row>


                {/* TECH STACK */}

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    style={{ marginTop: "50px" }}
                >

                    <h2 style={{
                        color: "#d4af37",
                        fontWeight: "700",
                        marginBottom: "70px",
                        fontSize: "55px"
                    }}>
                        Technical Mastery
                    </h2>

                    <Row>

                        {skills.map((skill, i) => (

                            <Col md={3} key={i} style={{ marginBottom: "35px" }}>

                                <motion.div variants={fadeUp}>

                                    <Tilt
                                        tiltMaxAngleX={15}
                                        tiltMaxAngleY={15}
                                        scale={1.07}
                                        transitionSpeed={1500}
                                    >

                                        <motion.div
                                            whileHover={{ y: -10 }}
                                            style={{
                                                background: "#0f0f0f",
                                                border: "1px solid #222",
                                                borderRadius: "18px",
                                                padding: "42px",
                                                textAlign: "center",
                                                cursor: "pointer"
                                            }}
                                        >

                                            <Icon icon={skill.icon} width="60" />

                                            <div style={{
                                                marginTop: "18px",
                                                fontSize: "22px"
                                            }}>
                                                {skill.name}
                                            </div>

                                        </motion.div>

                                    </Tilt>

                                </motion.div>

                            </Col>

                        ))}

                    </Row>

                </motion.div>


                {/* CURRENT FOCUS */}

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    style={{ marginTop: "50px" }}
                >

                    <h2 style={{
                        color: "#d4af37",
                        fontWeight: "700",
                        marginBottom: "60px",
                        fontSize: "52px"
                    }}>
                        CURRENT FOCUS
                    </h2>

                    <Row>

                        {focus.map((f, i) => (

                            <Col md={3} key={i}>

                                <motion.div
                                    variants={fadeUp}
                                    whileHover={{ scale: 1.07 }}
                                    style={{
                                        background: "#0f0f0f",
                                        border: "1px solid #222",
                                        borderRadius: "20px",
                                        padding: "35px",
                                        textAlign: "center"
                                    }}
                                >

                                    <Icon icon={f.icon} width="40" color="#d4af37" />

                                    <h4 style={{ marginTop: "15px" }}>
                                        {f.title}
                                    </h4>

                                </motion.div>

                            </Col>

                        ))}

                    </Row>

                </motion.div>

            </Container>

        </section>

    )
}