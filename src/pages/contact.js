import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Contact(){

    useEffect(()=>{
        Aos.init({durration: 3000, once:true, mirror:true});
    }, [])

    return(
    <section className="contact" data-aos="fade-up" id="contact">
        <div className="title" >
            <p>Contact</p>
            <hr/>
        </div>
        <p className="contacttext">Are you interested in working together or do you have any questions? Feel free to send me a message and I'll get back to you as soon as I can!</p>
        <a href="mailto:josipbrljevic@gmail.com"><button type="button">Say Hello!</button></a>

    </section>
    )
}