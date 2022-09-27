import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";



export default function ConnectingGrounds(){

    useEffect(()=>{
        Aos.init({durration: 3000, once:true, mirror:true});
    }, [])
    return(
        <section className="connectinggrounds" id="connectinggrounds">
            
            <main className="connectinggrounds2">
            <div className="title" >
                <p>Connecting Grounds</p>
                <hr/>
            </div>

            <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} className="mycarousel">
                <div className="slidecontainer">
                    <img src="/images/cg2.png" alt="1" />
                    <p className="legend">Home page</p>
                </div>
                <div className="slidecontainer">
                    <img src="/images/shopcg.png" alt="2" />
                    <p className="legend">Shop page</p>
                </div>
                <div className="slidecontainer">
                    <img src="/images/blogcg.png" alt="3" />
                    <p className="legend">Blog page</p>
                </div>
                <div className="slidecontainer">
                    <img src="/images/testimonialscg.png" alt="4"/>
                    <p className="legend">Testimonial page</p>
                </div>
                <div className="slidecontainer">
                    <img src="/images/evetnscg.png" alt="5"/>
                    <p className="legend">Events page</p>
                </div>
                <div className="slidecontainer">
                    <img src="/images/faqcg.png" alt="6"/>
                    <p className="legend">FAQ page</p>
                </div>
            </Carousel>

            <div className="projectoverview">
                <div className="titlesandhr">
                    <p className="titles">Project overview</p>
                </div>
                <p className="projecttext">Connecting Grounds is a startup company that has the vision to reuse<span className="red"> wasted coffee grounds</span>  into something better (food, skincare products, etc.)  Me and my team decided to help them spread their vision with a website. This was our <span className="red">exam project</span> that was worked on for 2 months.</p>
                <p className="projecttext">The website is <span className="red">responsive</span> for mobile devices and it is also <span className="red">dynamic</span> with certain animations, so it doesn't feel like a stale website.</p>
                <div className="titlesandhr">
                    <p className="titles">Main parts of the website</p>
                </div>
                <ul>
                    <li>Get introduced to the idea of reusing coffee grounds </li>
                    <li>Keep up with the upcoming<span className="red"> events</span>  related to the company</li>
                    <li>Visit their<span className="red"> shop</span>  and "buy" a product</li>
                    <li>See <span className="red">testimonials</span> from other users</li>
                    <li>See <span className="red">frequently asked questions</span></li>
                </ul>
                <div className="titlesandhr">
                    <p className="titles">Tools used</p>
                </div>
                <div className="tools">
                    <img src="/images/html-5.png" alt="html" />
                    <img src="/images/css.png" alt="css" />
                    <img src="/images/js.png" alt="js" />
                    <img src="/images/photoshop.png" alt="photoshop" />
                    <img src="/images/adobexd.png" alt="adobexd" />
                </div>
                <div className="endbuttons">
                    <a href="https://josipbr.github.io/New-Connecting-Grounds/" target="_blank" rel="noreferrer"><button type="submit" className="visit">Visit</button></a>
                    <Link to="/#projects"><button type="submit" className="back">Go back</button></Link>
                </div>
            </div>

            </main>
        </section>
    )
}