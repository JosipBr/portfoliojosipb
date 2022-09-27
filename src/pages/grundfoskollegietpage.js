import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";



export default function GrundfosKollegiet(){

    useEffect(()=>{
        Aos.init({durration: 3000, once:true, mirror:true});
    }, [])
    return(
        <section className="connectinggrounds" id="connectinggrounds">
            
            <main className="connectinggrounds2">
            <div className="title" >
                <p>Grundfos Kollegiet</p>
                <hr/>
            </div>

            <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} className="mycarousel">
                <div className="slidecontainer">
                    <img src="/images/gkhome.png" alt="1" />
                    <p className="legend">Home page</p>
                </div>
                <div className="slidecontainer">
                    <img src="/images/gkevents.png" alt="2" />
                    <p className="legend">Events page</p>
                </div>
                <div className="slidecontainer">
                    <img src="/images/gkcreateevent.png" alt="3" />
                    <p className="legend">Create your own event</p>
                </div>
                <div className="slidecontainer">
                    <img src="/images/gkmap.png" alt="4"/>
                    <p className="legend">Map page</p>
                </div>
                <div className="slidecontainer">
                    <img src="/images/gkring.png" alt="5"/>
                    <p className="legend">Ring your buddy page</p>
                </div>
                <div className="slidecontainer">
                    <img src="/images/gkfaq.png" alt="6"/>
                    <p className="legend">FAQ page</p>
                </div>
                <div>
                    <img src="/images/gkprofile.png" alt="7"/>
                    <p className="legend">Profile page</p>
                </div>
            </Carousel>

            <div className="projectoverview">
                <div className="titlesandhr">
                    <p className="titles">Project overview</p>
                </div>
                <p className="projecttext">This project is all about the <span className="red">user experience</span>. We were tasked to do a prototype of an app that would help out residents of the Grundfos Kollegiet. We didn't code this website since we had to mainly focus on the design.  Even though I didn't have to code this solution, I still managed to showcase my skills when planning and designing modernistic UX/UI.</p>
                <div className="titlesandhr">
                    <p className="titles">Main parts of the website</p>
                </div>
                <ul>
                    <li>Joining and organizing <span className="red">events</span></li>
                    <li>Viewing the building on two different <span className="red">maps</span></li>
                    <li><span className="red">"Call your buddy"</span> system</li>
                    <li>Viewing <span className="red">FAQs</span></li>
                    <li>Editing your <span className="red">profile</span></li>
                </ul>
                <div className="titlesandhr">
                    <p className="titles">Tools used</p>
                </div>
                <div className="tools">
                    <img src="/images/photoshop.png" alt="photoshop" />
                    <img src="/images/adobexd.png" alt="adobexd" />
                </div>
                <div className="endbuttons">
                    <Link to="/#projects"><button type="submit" className="back">Go back</button></Link>
                </div>
            </div>

            </main>
        </section>
    )
}