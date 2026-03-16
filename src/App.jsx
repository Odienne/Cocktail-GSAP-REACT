import React from 'react';
import gsap from 'gsap';
import {ScrollTrigger, SplitText} from "gsap/all";
import {Navbar} from "./components/Navbar/Navbar.jsx";
import {Hero} from "./components/Navbar/Hero.jsx";
import {Cocktails} from "./components/Navbar/Cocktails.jsx";
import {About} from "./components/Navbar/About.jsx";
import {Art} from "./components/Navbar/Art.jsx";
import {Menu} from "./components/Navbar/Menu.jsx";

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
        </main>
    );
};

export default App;
