import {useGSAP} from "@gsap/react";
import gsap from 'gsap';
import {SplitText} from 'gsap/all';
import {useRef} from "react";
import {useMediaQuery} from "react-responsive";


export const Hero = () => {
    const videoRef = useRef();
    const isMobile = useMediaQuery({maxWidth: 767});

    useGSAP(() => {
        //text animations
        const heroSplit = new SplitText('.title', {type: 'chars, words'});
        const paragraphSplit = new SplitText('.subtitle', {type: 'lines'});

        heroSplit.chars.forEach((char) => {
            char.classList.add('text-gradient');
        });

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.6,
            ease: 'expo.out',
            stagger: 0.06
        });

        gsap.from(paragraphSplit.lines, {
            yPercent: 100,
            opacity: 0,
            duration: 1.6,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1
        });


        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        })
            .to('.right-leaf', {y: 200}, 0)
            .to('.left-leaf', {y: -200}, 0);

        //video animation

        const startValue = isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom top';

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "video",
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
            },
        });

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration,
            });
        };
    });


    return (
        <>
            <section id="hero" className="noisy">
                <h1 className="title">MOJITO</h1>
                <img src="/images/hero-left-leaf.png"
                     alt="left leaf"
                     className="left-leaf"/>

                <img src="/images/hero-right-leaf.png"
                     alt="right leaf"
                     className="right-leaf"/>

                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Frais. Pétillant. Intemporel.</p>
                            <p className="subtitle">
                                L'esprit estival
                            </p>
                        </div>

                        <div className="view-cocktails">
                            <p className="subtitle">
                                Chaque cocktail au menu est un subtil mélange d'ingrédients premiums, de savoir-faire et
                                de
                                recette intemporelles.
                            </p>
                            <a href="#cocktails">
                                Voir les cocktails
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="video absolute inset-0">
                <video ref={videoRef} src="/videos/bg-video.mp4" muted playsInline preload="auto"/>
            </div>
        </>
    )
}
