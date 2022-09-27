import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function AboutMe(){

    useEffect(()=>{
        Aos.init({durration: 3000, once:true, mirror:true, offset:450});
    }, [])
    return(
    <section className="aboutme" id="aboutme">
        <div className="title" data-aos="fade-up">
            <p>About me</p>
            <hr/>
        </div>
        <div className="textandimage" data-aos="fade-up">
            <div className="left">
                <p>Hello! My name is Josip and I enjoy developing professional and creative digital solutions.</p>
                <p>With dedication and hard work, I love to immerse myself into creating new projects and solving tricky problems.</p>
                <p>From planning UX/UI, designing mockups, to developing a prototype, I always give it my all to deliver the best possible product.</p>
                <p>Currently, I am working as a <span className="red">Student Frontend Developer</span> at <a href="https://www.uniwise.co.uk/">UNIWise</a>.</p>
            </div>
            <div className="right">
                <img src="/images/aboutme.png" alt="aboutme" className="aboutmeimage" />
                <div className="socialmedia">
                    <a href="https://www.facebook.com/josip.brljevic" target={"_blank"} rel="noreferrer"><img src="/images/facebook.png" alt="facebook" /></a>
                    <a href="https://www.linkedin.com/in/josip-brljevic-45198621b/" target={"_blank"} rel="noreferrer"><img src="/images/linkedin.png" alt="linkedin" /></a>
                    <a href="https://github.com/JosipBr" target={"_blank"} rel="noreferrer"><img src="/images/githubb.png" alt="github" /></a>
                </div>
            </div>
        </div>
    </section>
    )
   
    
}