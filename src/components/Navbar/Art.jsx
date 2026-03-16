import {FEATURE_LIST, GOOD_LIST} from "../../constants/constants.js";
import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export const Art = () => {
    const isMobile = useMediaQuery({maxWidth: 767});

    useGSAP(() => {
        const start = isMobile ? 'top 20%' : 'top top';

        const maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start,
                end: 'bottom center',
                scrub: 1.5,
                pin: true
            }
        })

        maskTimeline.to('.will-fade', {
            opacity: 0, display: 'none', stagger: 0.2, ease: 'power1.inOut',
        }).to('.masked-img', {
            scale: 1.3, maskPosition: 'center', maskSize: '300%', duration: 1, ease: 'power1.inOut',
        }).to('#masked-content', {opacity: 1, duration: 1, ease: 'power1.inOut'});
    })

    return (
        <section id="art">
            <div className="container mx-auto h-full pt-20">
                <h2 className="will-fade">Un Art</h2>

                <div className="content">
                    <ul className="space-y-4 will-fade">
                        {
                            GOOD_LIST.map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <img src="/images/check.png" alt="check"/>
                                    <p>{item}</p>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="cocktail-img">
                        <img src="/images/under-img.jpg" alt="cocktail mask"
                             className='abs-center masked-img size-full object-contain'/>
                    </div>

                    <ul className="space-y-4 will-fade">
                        {
                            FEATURE_LIST.map((feature, index) => (
                                <li key={index} className="flex items-center justify-start gap-2">
                                    <img src="/images/check.png" alt="check"/>
                                    <p className='md:w-fit w-60'>{feature}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="masked-container">
                    <h2 className="will-fade">
                        Une perfection à savourer
                    </h2>
                    <div id="masked-content">
                        <h3>Un savoir-faire, versé avec passion</h3>
                        <p>Plus qu'une boisson, un moment préparé avec attention juste pour vous.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
