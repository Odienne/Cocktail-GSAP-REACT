import React from 'react';
import gsap from 'gsap';
import {ScrollTrigger, SplitText} from "gsap/all";
import {Navbar} from "./components/Navbar/Navbar.jsx";
import {Hero} from "./components/Hero/Hero.jsx";
import {Cocktails} from "./components/Cocktails/Cocktails.jsx";
import {About} from "./components/About/About.jsx";
import {Art} from "./components/Art/Art.jsx";
import {Menu} from "./components/Menu/Menu.jsx";
import {Contact} from "./components/Contact/Contact.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
    return (
        <main>
            <Navbar/>
            <Hero/>
            <Cocktails/>
            <About/>
            <Art/>
            <Menu/>
            <Contact/>
        </main>
    );
};

export default App;
