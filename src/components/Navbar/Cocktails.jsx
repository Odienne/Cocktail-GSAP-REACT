import {COCKTAILS_LIST, MOCKTAILS_LIST} from "../../constants/constants.js";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';


export const Cocktails = () => {

    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails', start: 'top 30%', end: 'bottom 80%', scrub: true
            }
        })

        parallaxTimeline.from('#c-left-leaf', {
            x: -100, y: 100
        }).from("#c-right-leaf", {x: 100, y: 100})
    });

    return (<section id="cocktails" className="noisy">
            <img id='c-left-leaf' src="/images/cocktail-left-leaf.png" alt="left leaf"/>
            <img id='c-right-leaf' src="/images/cocktail-right-leaf.png" alt="right leaf"/>

            <div className="list">
                <div className="popular">
                    <h2>Cocktails populaires</h2>

                    <ul>
                        {COCKTAILS_LIST.map((drink) => (<li key={drink.name}>
                                <div className="md:me-28">
                                    <h3>{drink.name}</h3>
                                    <p>{drink.country} | {drink.detail}</p>
                                </div>
                                <span>- {drink.price}</span>
                            </li>))}
                    </ul>
                </div>

                <div className="loved">
                    <h2>Cocktails sans alcool populaires</h2>

                    <ul>
                        {MOCKTAILS_LIST.map((drink) => (<li key={drink.name}>
                                <div className="md:me-28">
                                    <h3>{drink.name}</h3>
                                    <p>{drink.country} | {drink.detail}</p>
                                </div>
                                <span>- {drink.price}</span>
                            </li>))}
                    </ul>
                </div>
            </div>
        </section>)
}
