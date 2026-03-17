import {useGSAP} from "@gsap/react";
import gsap from 'gsap';
import {SplitText} from "gsap/all";


export const About = () => {

    useGSAP(() => {
        //text animations
        const titleSplit = new SplitText('#about h2', {type: 'words'});

        titleSplit.chars.forEach((char) => {
            char.classList.add('text-gradient');
        });


        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top center"
            }
        })

        scrollTimeline.from(
            titleSplit.words,
            {
                opacity: 0,
                yPercent: 100,
                duration: 1,
                ease: 'power1.inOut',
                stagger: 0.02
            })
            .from('.top-grid div, .bottom-grid div', {
                opacity: 0,
                duration: 1,
                ease: 'power1.inOut',
                stagger: 0.04,
            }, '-=0.5')
    });


    return (
        <section id="about">
            <div className="mb-16 md:px-0 px-5">
                <div className="content">
                    <div className="md:col-span-8">
                        <p className="badge">
                            Nos meilleurs cocktails
                        </p>
                        <h2>Chaque détails compte <span className="text-white">-</span> du mélange à la présentation
                        </h2>
                    </div>

                    <div className="sub-content">
                        <p>
                            Chaque cocktail que nous servont reflète notre obsession pour la perfection.
                            C'est ce qui rend cette expérience unique et inoubliable.
                        </p>

                        <div>
                            <p className="md:text-3xl text-xl font-bold">
                                <span>4.5</span>/5
                            </p>
                            <p className="text-sm text-white-100">
                                Plus de 12000 clients
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-grid">
                <div className="md:col-span-3">
                    <div className="noisy"/>
                    <img src="/images/abt1.png" alt="grid-img-1"/>
                </div>

                <div className="md:col-span-6">
                    <div className="noisy"/>
                    <img src="/images/abt2.png" alt="grid-img-2"/>
                </div>

                <div className="md:col-span-3">
                    <div className="noisy"/>
                    <img src="/images/abt5.png" alt="grid-img-5"/>
                </div>
            </div>

            <div className="bottom-grid">
                <div className="md:col-span-8">
                    <div className="noisy"/>
                    <img src="/images/abt3.png" alt="grid-img-3"/>
                </div>

                <div className="md:col-span-4">
                    <div className="noisy"/>
                    <img src="/images/abt4.png" alt="grid-img-4"/>
                </div>
            </div>
        </section>
    )
}
