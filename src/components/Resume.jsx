import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

export default function Resume() {

const skills = [
{ icon:"logos:python", name:"Python"},
{ icon:"logos:javascript", name:"JavaScript"},
{ icon:"logos:react", name:"React"},
{ icon:"logos:nodejs-icon", name:"Node.js"},
{ icon:"simple-icons:opencv", name:"OpenCV"},
{ icon:"mdi:brain", name:"Machine Learning"},
{ icon:"mdi:eye-outline", name:"Computer Vision"},
{ icon:"logos:firebase", name:"Firebase"}
]


const fadeUp={
hidden:{opacity:0,y:40},
show:{
opacity:1,
y:0,
transition:{duration:.7}
}
}

const stagger={
hidden:{},
show:{transition:{staggerChildren:.12}}
}

return(

<Element name="Resume" id="resume">

<section
style={{
padding:"50px 0",
background:"#000",
color:"#fff",
backgroundImage:"radial-gradient(#d4af3715 1px, transparent 1px)",
backgroundSize:"40px 40px"
}}
>

<Container fluid style={{maxWidth:"1350px"}}>


{/* HERO */}

<Row style={{alignItems:"flex-start"}}>

<Col md={7}>

<motion.div
variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{once:true}}
>

<p
style={{
letterSpacing:"4px",
color:"#777",
marginBottom:"12px"
}}
>
CURRICULUM VITAE
</p>

<h1
style={{
fontFamily:"serif",
fontSize:"95px",
color:"#d4af37",
lineHeight:"1.05",
marginBottom:"40px",
textShadow:"0 0 30px rgba(212,175,55,0.35)"
}}
>
Jakpat <br/> Saartaiam
</h1>

<p
style={{
maxWidth:"600px",
lineHeight:"1.9",
color:"#bbb",
fontSize:"18px"
}}
>

Computer Electronics student at King Mongkut's University of Technology North Bangkok.

Focused on Artificial Intelligence, Computer Vision and Web Development.

Currently developing a machine learning system capable of detecting people, smoke and fire using camera-based vision models.

</p>

</motion.div>

</Col>


{/* CONTACT CARD */}

<Col md={5}>

<motion.div
variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{once:true}}
whileHover={{scale:1.02}}
style={{

marginTop:"-10px",

background:"rgba(255,255,255,0.03)",
padding:"40px",
borderRadius:"18px",
border:"1px solid rgba(212,175,55,0.35)",
backdropFilter:"blur(12px)",
boxShadow:"0 15px 50px rgba(212,175,55,0.15)"

}}
>

<p style={{marginBottom:"14px"}}>
<Icon icon="mdi:email" color="#d4af37" width="20"/>
<span style={{marginLeft:"10px"}}>
itc1575@gmail.com
</span>
</p>

<p style={{marginBottom:"14px"}}>
<Icon icon="mdi:phone" color="#d4af37" width="20"/>
<span style={{marginLeft:"10px"}}>
093-508-1157
</span>
</p>

<p style={{marginBottom:"20px"}}>
<Icon icon="mdi:map-marker" color="#d4af37" width="20"/>
<span style={{marginLeft:"10px"}}>
Nonthaburi, Thailand
</span>
</p>

<a
href="/Resume.pdf"
download
style={{textDecoration:"none",display:"block"}}
>

<motion.button
whileHover={{
scale:1.05,
boxShadow:"0 10px 40px rgba(212,175,55,0.6)"
}}
whileTap={{scale:0.95}}
style={{
width:"100%",
background:"#d4af37",
border:"none",
color:"#000",
fontWeight:"600",
padding:"16px",
borderRadius:"40px",
cursor:"pointer",
display:"flex",
alignItems:"center",
justifyContent:"center",
gap:"12px",
fontSize:"16px",
letterSpacing:"1px"
}}
>

<Icon icon="mdi:download" width="22"/>
DOWNLOAD RESUME

</motion.button>

</a>

</motion.div>

</Col>

</Row>


{/* DIVIDER */}

<div
style={{
height:"1px",
background:"linear-gradient(90deg,transparent,#d4af37,transparent)",
margin:"80px 0"
}}
/>


{/* EDUCATION */}

<motion.div
variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{once:true}}
>

<h3 style={{marginBottom:"40px",color:"#d4af37"}}>
Education
</h3>

<div
style={{
borderLeft:"2px solid #d4af37",
paddingLeft:"30px"
}}
>

<div style={{marginBottom:"40px"}}>

<p style={{color:"#d4af37"}}>2024 - Present</p>

<h5>
King Mongkut's University of Technology North Bangkok
</h5>

<p style={{color:"#aaa"}}>
Major: Computer Electronics
</p>

</div>

<div>

<p style={{color:"#d4af37"}}>2020 - 2022</p>

<h5>
Lopburi Technical College
</h5>

<p style={{color:"#aaa"}}>
Major: Electronics
</p>

</div>

</div>

</motion.div>


{/* DIVIDER */}

<div
style={{
height:"1px",
background:"linear-gradient(90deg,transparent,#d4af37,transparent)",
margin:"80px 0"
}}
/>


{/* SKILLS */}

<h3 style={{marginBottom:"40px",color:"#d4af37"}}>
Core Skills
</h3>

<motion.div
variants={stagger}
initial="hidden"
whileInView="show"
viewport={{once:true}}
>

<Row>

{skills.map((skill,i)=>(

<Col md={3} key={i} className="mb-4">

<motion.div
variants={fadeUp}
whileHover={{
y:-8,
boxShadow:"0 20px 60px rgba(212,175,55,0.25)"
}}
style={{
background:"#0f0f0f",
padding:"40px",
borderRadius:"18px",
textAlign:"center",
border:"1px solid #222"
}}
>

<Icon icon={skill.icon} width="48"/>

<div style={{marginTop:"14px"}}>
{skill.name}
</div>

</motion.div>

</Col>

))}

</Row>

</motion.div>


{/* DIVIDER */}

<div
style={{
height:"1px",
background:"linear-gradient(90deg,transparent,#d4af37,transparent)",
margin:"80px 0"
}}
/>


{/* PROJECT */}

<motion.div
variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{once:true}}
>

<h3 style={{marginBottom:"35px",color:"#d4af37"}}>
AI Project Highlight
</h3>

<motion.div
whileHover={{
scale:1.01,
boxShadow:"0 30px 80px rgba(212,175,55,0.25)"
}}
style={{
background:"#0f0f0f",
padding:"60px",
borderRadius:"20px",
border:"1px solid #222"
}}
>

<h4 style={{color:"#d4af37",marginBottom:"10px"}}>
AI Camera Detection System
</h4>

<p style={{color:"#aaa",fontSize:"17px"}}>

Developing a computer vision system capable of detecting people, smoke and fire using deep learning models trained on custom datasets.

</p>

<div
style={{
marginTop:"12px",
color:"#d4af37",
fontSize:"14px"
}}
>
Python • OpenCV • YOLO • Computer Vision
</div>

</motion.div>

</motion.div>


{/* CONTACT */}

<motion.div
variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{once:true}}
style={{marginTop:"90px"}}
>

<h3 style={{color:"#d4af37",marginBottom:"15px"}}>
Let's Build AI Together
</h3>

<p style={{color:"#aaa",maxWidth:"600px"}}>
Interested in collaborating on Artificial Intelligence,
Computer Vision or Machine Learning projects.
</p>

<Link to="/contact">

<motion.button
whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
style={{
marginTop:"22px",
padding:"12px 28px",
border:"1px solid #d4af37",
background:"transparent",
color:"#d4af37",
borderRadius:"30px",
cursor:"pointer"
}}
>

Contact Me

</motion.button>

</Link>

</motion.div>


</Container>

</section>

</Element>

)

}