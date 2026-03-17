import {OPENING_HOURS, SOCIALS, STORE_INFO} from "../../constants/constants.js";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';
import {SplitText} from 'gsap/all';


export const Contact = () => {

    useGSAP(() => {
        const titleSplit = new SplitText('#contact h2', {type: 'words'});

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact', start: 'top top',
            }, ease: "power1.inOut"
        })

        timeline.from(titleSplit.words, {
            opacity: 0, yPercent: 100, stagger: 0.02
        })
            .from('#contact h3, #contact p', {
                opacity: 0, yPercent: 100, stagger: 0.02
            });

        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact', start: 'top top'
            }
        })

        parallaxTimeline.to('#f-right-leaf', {
            x: 50, duration: 1, ease: 'power1.inOut',
        })
            .to('#f-left-leaf', {
                x: -50, duration: 1, ease: 'power1.inOut',
            }, '<')
    });


    return (<footer id="contact">
        <img src="/images/footer-left-leaf.png" alt="leaf-left" id='f-left-leaf'/>
        <img src="/images/footer-right-leaf.png" alt="leaf-right" id='f-right-leaf'/>

        <div className="content">
            <h2>{STORE_INFO.heading}</h2>

            <div>
                <h3>{STORE_INFO.subheading}</h3>
                <p>{STORE_INFO.address}</p>
            </div>

            <div>
                <h3>{STORE_INFO.contactHeading}</h3>
                <p>{STORE_INFO.contact.phone}</p>
                <p>{STORE_INFO.contact.email}</p>
            </div>

            <div>
                <h3>Horaires</h3>
                {OPENING_HOURS.map((time) => (<p key={time.day}>{time.day} : {time.time}</p>))}
            </div>

            <div className="flex-center gap-5">
                {SOCIALS.map((link => (<a key={link.name} href={link.url} target='_blank' rel='noopener noreferer'
                                          aria-label={link.name}>
                    <img src={link.icon} alt={link.name}/>
                </a>)))}
            </div>
        </div>
    </footer>)
}
