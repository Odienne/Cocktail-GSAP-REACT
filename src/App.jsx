import React from 'react';
import gsap from 'gsap';
import {ScrollTrigger, SplitText} from "gsap/all";
import {Navbar} from "./components/Navbar/Navbar.jsx";
import {Hero} from "./components/Navbar/Hero.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
    return (
        <main>
            <Navbar/>
            <Hero/>

            <div className="h-dvh bg-black"></div>
        </main>
    );
};

export default App;
