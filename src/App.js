import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Transcript from "./components/Transcript";
import Contact from "./components/Contact";

function App() {

    return (

        <>
            <ScrollToTop />
            <NavBar />

            <Routes>

                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/transcript" element={<Transcript />} />
                <Route path="/contact" element={<Contact />} />

            </Routes>

        </>

    )

}

export default App;