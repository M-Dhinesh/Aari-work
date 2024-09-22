import { useEffect } from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import "./styles.css";
export const Images = () => { 
    const {innerHeight} = window;
const getRatio = el =>
innerHeight / (innerHeight + el.offsetHeight);
useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray("section").forEach((s, i) => {
    s.bg = section.querySelector(".bg"); 
    gsap.fromTo(
    s.bg,{
    backgroundPosition: () =>
    i? `50% ${
    -innerHeight * getRatio(s)}px'
    : "50% 0px",
}, {
    backgroundPosition: () =>
    `50% ${
    innerHeight (1 getRatio(s))}px",
    ease: "none", scrollTrigger: {
    trigger: s,
    start: () => (i
    ? "top bottom": "top top"), end: "bottom top",
    scrub: true,
    },
    }
    );
    });
    }, []);
    
    return (
        <div>
        <section>
            <div className="bg" style={{ backgroundImage: 'url($(image1}' }} />
            <h1>Parallax</h1>
        </section>
        <section>
            <div className="bg" style={{ backgroundImage: 'url(${image2},' }} />
            <h1>So smooth</h1>
        </section>
        <section>
            <div className="bg" style={{ backgroundImage: 'url(${image3}' }} />
            <h1>Nice, right?</h1>
        </section>
    </div>
    );
    };

export default Images;