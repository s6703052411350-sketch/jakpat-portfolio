import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

export default function Resume() {


    const skills = [
        { icon: "logos:python", name: "Python" },
        { icon: "logos:javascript", name: "JavaScript" },
        { icon: "logos:react", name: "React" },
        { icon: "logos:nodejs-icon", name: "Node.js" },
        { icon: "simple-icons:opencv", name: "OpenCV" },
        { icon: "mdi:brain", name: "Machine Learning" },
        { icon: "mdi:eye-outline", name: "Computer Vision" },
        { icon: "logos:firebase", name: "Firebase" }
    ]


    /* ===== ANIMATION VARIANTS ===== */

    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
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

        <Element name="Resume" id="resume">

            <section
                style={{
                    padding: "80px 0",
                    background: "#000",
                    color: "white",
                    backgroundImage: "radial-gradient(#d4af3715 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            >

                <Container fluid style={{ maxWidth: "1400px" }}>

                    {/* HEADER */}

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >

                        <p style={{
                            letterSpacing: "4px",
                            color: "#777",
                            marginBottom: "15px"
                        }}>
                            CURRICULUM VITAE
                        </p>

                        <h1 style={{
                            fontFamily: "serif",
                            fontSize: "95px",
                            color: "#d4af37",
                            lineHeight: "1.05",
                            marginBottom: "40px",
                            textShadow: "0 0 30px rgba(212,175,55,0.35)"
                        }}>
                            Jakpat <br /> Saartaiam
                        </h1>

                    </motion.div>


                    <Row className="align-items-start">

                        {/* DESCRIPTION */}

                        <Col md={7}>

                            <motion.p
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                style={{
                                    maxWidth: "650px",
                                    lineHeight: "2",
                                    color: "#bbb",
                                    fontSize: "20px"
                                }}
                            >

                                Computer Electronics student at King Mongkut's University of Technology North Bangkok.

                                Focused on Artificial Intelligence, Computer Vision and Web Development.

                                Currently developing a machine learning system capable of detecting people, smoke and fire using camera-based vision models.

                            </motion.p>

                        </Col>


                        {/* CONTACT CARD */}

                        <Col md={5}>

                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                                style={{
                                    background: "rgba(255,255,255,0.03)",
                                    padding: "40px",
                                    borderRadius: "18px",
                                    border: "1px solid rgba(212,175,55,0.35)",
                                    backdropFilter: "blur(10px)",
                                    boxShadow: "0 15px 50px rgba(212,175,55,0.15)"
                                }}
                            >

                                <p>
                                    <Icon icon="mdi:email" color="#d4af37" />  itc1575@gmail.com
                                </p>

                                <p>
                                    <Icon icon="mdi:phone" color="#d4af37" />  093-508-1157
                                </p>

                                <p>
                                    <Icon icon="mdi:map-marker" color="#d4af37" />  Nonthaburi, Thailand
                                </p>

                                <a href="/Resume.pdf" download style={{ textDecoration: "none", display: "block" }}>

                                    <motion.button
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0 8px 30px rgba(212,175,55,0.6)"
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{
                                            width: "100%",
                                            marginTop: "20px",
                                            background: "#d4af37",
                                            border: "none",
                                            color: "#000",
                                            fontWeight: "600",
                                            padding: "16px",
                                            borderRadius: "40px",
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "12px",
                                            fontSize: "16px",
                                            letterSpacing: "1px"
                                        }}
                                    >

                                        <Icon icon="mdi:download" width="22" />
                                        DOWNLOAD RESUME

                                    </motion.button>

                                </a>

                            </motion.div>

                        </Col>

                    </Row>


                    {/* DIVIDER */}

                    <div style={{
                        height: "1px",
                        background: "linear-gradient(90deg,transparent,#d4af37,transparent)",
                        margin: "70px 0"
                    }} />


                    {/* EDUCATION */}

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >

                        <h3 style={{
                            marginBottom: "35px",
                            color: "#d4af37"
                        }}>
                            Education
                        </h3>

                        <div style={{
                            borderLeft: "2px solid #d4af37",
                            paddingLeft: "30px"
                        }}>

                            <div style={{ marginBottom: "40px" }}>

                                <p style={{ color: "#d4af37" }}>2024 - Present</p>

                                <h5>
                                    King Mongkut's University of Technology North Bangkok
                                </h5>

                                <p style={{ color: "#aaa" }}>
                                    Major: Computer Electronics
                                </p>

                            </div>

                            <div style={{ marginBottom: "40px" }}>

                                <p style={{ color: "#d4af37" }}>2020 - 2022</p>

                                <h5>
                                    Lopburi Technical College
                                </h5>

                                <p style={{ color: "#aaa" }}>
                                    Major: Electronics
                                </p>

                            </div>

                        </div>

                    </motion.div>


                    {/* DIVIDER */}

                    <div style={{
                        height: "1px",
                        background: "linear-gradient(90deg,transparent,#d4af37,transparent)",
                        margin: "70px 0"
                    }} />


                    {/* SKILLS */}

                    <h3 style={{
                        marginBottom: "35px",
                        color: "#d4af37"
                    }}>
                        Core Skills
                    </h3>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >

                        <Row>

                            {skills.map((skill, i) => (

                                <Col md={3} key={i} className="mb-3">

                                    <motion.div
                                        variants={fadeUp}
                                        whileHover={{
                                            y: -8,
                                            boxShadow: "0 20px 60px rgba(212,175,55,0.25)"
                                        }}
                                        style={{
                                            background: "#0f0f0f",
                                            padding: "40px",
                                            borderRadius: "18px",
                                            textAlign: "center",
                                            border: "1px solid #222"
                                        }}
                                    >

                                        <Icon icon={skill.icon} width="48" />

                                        <div style={{
                                            marginTop: "15px",
                                            fontSize: "16px"
                                        }}>
                                            {skill.name}
                                        </div>

                                    </motion.div>

                                </Col>

                            ))}

                        </Row>

                    </motion.div>


                    {/* DIVIDER */}

                    <div style={{
                        height: "1px",
                        background: "linear-gradient(90deg,transparent,#d4af37,transparent)",
                        margin: "70px 0"
                    }} />


                    {/* PROJECT */}

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >

                        <h3 style={{
                            marginBottom: "35px",
                            color: "#d4af37"
                        }}>
                            AI Project Highlight
                        </h3>

                        <motion.div
                            whileHover={{
                                scale: 1.01,
                                boxShadow: "0 30px 80px rgba(212,175,55,0.25)"
                            }}
                            style={{
                                background: "#0f0f0f",
                                padding: "60px",
                                borderRadius: "20px",
                                border: "1px solid #222"
                            }}
                        >

                            <h4 style={{
                                color: "#d4af37",
                                marginBottom: "10px"
                            }}>
                                AI Camera Detection System
                            </h4>

                            <p style={{
                                color: "#aaa",
                                fontSize: "17px"
                            }}>
                                Developing a computer vision system capable of detecting people, smoke and fire using deep learning models trained on custom datasets.
                            </p>

                            <div style={{
                                marginTop: "12px",
                                color: "#d4af37",
                                fontSize: "14px"
                            }}>
                                Python • OpenCV • YOLO • Computer Vision
                            </div>

                        </motion.div>

                    </motion.div>


                    {/* CONTACT */}

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        style={{ marginTop: "80px" }}
                    >

                        <h3 style={{
                            color: "#d4af37",
                            marginBottom: "15px"
                        }}>
                            Let's Build AI Together
                        </h3>

                        <p style={{
                            color: "#aaa",
                            maxWidth: "600px"
                        }}>
                            Interested in collaborating on Artificial Intelligence, Computer Vision or Machine Learning projects.
                        </p>

                        <a href="mailto:itc1575@gmail.com">

                            <Link to="/contact">

                                <button
                                    style={{
                                        marginTop: "20px",
                                        padding: "12px 28px",
                                        border: "1px solid #d4af37",
                                        background: "transparent",
                                        color: "#d4af37",
                                        borderRadius: "30px",
                                        cursor: "pointer",
                                        transition: "0.3s"
                                    }}

                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "#d4af37";
                                        e.currentTarget.style.color = "#000";
                                        e.currentTarget.style.transform = "translateY(-2px)";
                                    }}

                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "transparent";
                                        e.currentTarget.style.color = "#d4af37";
                                        e.currentTarget.style.transform = "translateY(0)";
                                    }}
                                >

                                    Contact Me

                                </button>

                            </Link>

                        </a>

                    </motion.div>


                </Container>

            </section>

        </Element>

    )
}