import {OPENING_HOURS, SOCIALS} from "../../constants/constants.js";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';
import {SplitText} from 'gsap/all';


export const Contact = () => {

    useGSAP(() => {
        const titleSplit = new SplitText('#contact h2', {type: 'words'});

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: "power1.inOut"
        })

        timeline.from(titleSplit.words, {
            opacity: 0,
            yPercent: 100,
            stagger: 0.02
        })
            .from('#contact h3, #contact p', {
                opacity: 0, yPercent: 100, stagger: 0.02
            })
            .to('#f-right-leaf', {
                x: 50, duration: 1, ease: 'power1.inOut',
            })
            .to('#f-left-leaf', {
                x: -50, duration: 1, ease: 'power1.inOut',
            }, '<')
        ;
    });


    return (
        <footer id="contact">
            <img src="/images/footer-left-leaf.png" alt="leaf-left" id='f-left-leaf'/>
            <img src="/images/footer-right-leaf.png" alt="leaf-right" id='f-right-leaf'/>

            <div className="content">
                <h2>Où nous trouver</h2>

                <div>
                    <h3>Visiter notre bar</h3>
                    <p>7 rue Charles de Gaulle, 66000 Perpignan</p>
                </div>

                <div>
                    <h3>Nous contacter</h3>
                    <p>+33 7 68 15 29 77</p>
                    <p>contact@digitalis-studio.fr</p>
                </div>

                <div>
                    <h3>Horaires</h3>
                    {OPENING_HOURS.map((time) => (
                        <p key={time.day}>{time.day} : {time.time}</p>
                    ))}
                </div>

                <div>
                    <h3>Réseaux</h3>
                    {OPENING_HOURS.map((time) => (
                        <p key={time.day}>{time.day} : {time.time}</p>
                    ))}
                </div>

                <div className="flex-center gap-5">
                    {SOCIALS.map((link => (
                        <a key={link.name} href={link.url} target='_blank' rel='noopener noreferer'
                           aria-label={link.name}>
                            <img src={link.icon} alt={link.name}/>
                        </a>
                    )))}
                </div>
            </div>
        </footer>
    )
}
