import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";



export default function TwisterHasbro(){

    useEffect(()=>{
        Aos.init({durration: 3000, once:true, mirror:true});
    }, [])
    return(
        <section className="connectinggrounds" id="connectinggrounds">
            
            <main className="connectinggrounds2">
            <div className="title" >
                <p>Twister Hasbro</p>
                <hr/>
            </div>

            <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} className="mycarousel">
                <div className="slidecontainer">
                    <img src="/images/twisterhome.png" alt="1" />
                    <p className="legend">Home page</p>
                </div>
                <div className="slidecontainer">
                    <img src="/images/twisternews.png" alt="2" />
                    <p className="legend">News part</p>
                </div>
                <div className="slidecontainer">
                    <img src="/images/twisterproduct.png" alt="3" />
                    <p className="legend">Product page</p>
                </div>
                <div className="slidecontainer">
                    <img src="/images/twisterwheel.png" alt="4"/>
                    <p className="legend">Wheel page</p>
                </div>
            </Carousel>

            <div className="projectoverview">
                <div className="titlesandhr">
                    <p className="titles">Project overview</p>
                </div>
                <p className="projecttext">This was an <span className="red">exam</span> project for my first semester. We had to rebrand a selected product so that it targets new audience. I chose a classic game of <span className="red">Twister</span>. The focus was to make it more appealing for teenagers and young people. </p>
                <p className="projecttext">This was my first attempt of creating a <span className="red">responsive website</span>.</p>
                <div className="titlesandhr">
                    <p className="titles">Main parts of the website</p>
                </div>
                <ul>
                    <li>Explore different versions of the game  </li>
                    <li>Keep up with the upcoming<span className="red"> events</span>  related to the company</li>
                    <li>Follow <span className="red">news</span> that relate to the "Twister community"</li>
                    <li><span className="red">Customize</span> their own playing mat and spinning wheel</li>
                </ul>
                <div className="titlesandhr">
                    <p className="titles">Tools used</p>
                </div>
                <div className="tools">
                    <img src="/images/html-5.png" alt="html" />
                    <img src="/images/css.png" alt="css" />
                    <img src="/images/photoshop.png" alt="photoshop" />
                    <img src="/images/adobexd.png" alt="adobexd" />
                </div>
                <div className="endbuttons">
                    <a href="https://josipbr.github.io/TwisterHasbro/index.html" target="_blank" rel="noreferrer"><button type="submit" className="visit">Visit</button></a>
                    <Link to="/#projects"><button type="submit" className="back">Go back</button></Link>
                </div>
            </div>

            </main>
        </section>
    )
}