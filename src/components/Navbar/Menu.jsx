'use client';

import {useGSAP} from "@gsap/react";
import gsap from 'gsap';
import {COCKTAILS_SLIDER_LIST} from "../../constants/constants.js";
import {useRef, useState} from "react";


export const Menu = () => {
    const contentRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0)
    const totalNbCocktails = COCKTAILS_SLIDER_LIST.length;

    useGSAP(() => {
        gsap.fromTo("#title", {
            opacity: 0
        }, {
            opacity: 1, duration: 1
        });

        gsap.fromTo(".cocktail img", {
            opacity: 0, xPercent: -100
        }, {
            opacity: 1, duration: 1, xPercent: 0, ease: 'power1.inOut',
        });

        gsap.fromTo(".details h2, .details p", {
            opacity: 0, yPercent: 100
        }, {
            opacity: 1, duration: 1, yPercent: 0, ease: 'power1.inOut',
        });
    }, [currentIndex]);

    const goToSlide = (index) => {
        const newIndex = (index + totalNbCocktails) % totalNbCocktails;

        setCurrentIndex(newIndex);
    }

    const getCocktailAt = (indexOffset) => {
        return COCKTAILS_SLIDER_LIST[(currentIndex + indexOffset + totalNbCocktails) % totalNbCocktails];
    }

    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(4);
    const nextCocktail = getCocktailAt(1);

    return (
        <section id="menu" aria-labelledby="menu-heading">
            <img src="/images/slider-left-leaf.png" alt="left leaf" id="m-left-leaf"/>
            <img src="/images/slider-right-leaf.png" alt="right leaf" id="m-right-leaf"/>

            <h2 id='menu-heading' className="sr-only">
                Menu
            </h2>

            <nav className="cocktail-tabs" aria-label="Cocktail navigation">
                {COCKTAILS_SLIDER_LIST.map((cocktail, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <button key={cocktail.id}
                                className={isActive ? "text-white border-white" : "text-white/50 border-white/50"}
                                onClick={() => goToSlide(index)}>
                            {cocktail.name}
                        </button>
                    )
                })}
            </nav>

            <div className="content">
                <div className="arrows">
                    <button className='text-left' onClick={() => goToSlide(currentIndex - 1)}>
                        <span>{prevCocktail.name}</span>
                        <img src="/images/left-arrow.png" alt="left arrow" aria-hidden='true'/>
                    </button>
                    <button className='text-left' onClick={() => goToSlide(currentIndex + 1)}>
                        <span>{nextCocktail.name}</span>
                        <img src="/images/right-arrow.png" alt="right arrow" aria-hidden='true'/>
                    </button>
                </div>

                <div className="cocktail">
                    <img src={currentCocktail.image} className="object-contain" alt="current cocktail"/>
                </div>

                <div className="recipe">
                    <div ref={contentRef} className='info'>
                        <p>Recette pour :</p>
                        <p id="title">
                            {currentCocktail.name}
                        </p>
                    </div>

                    <div className="details">
                        <h2>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
