import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";



export default function WakeupMash(){

    useEffect(()=>{
        Aos.init({durration: 3000, once:true, mirror:true});
    }, [])
    return(
        <section className="connectinggrounds" id="connectinggrounds">
            
            <main className="connectinggrounds2">
            <div className="title" >
                <p>Wakeup Mash</p>
                <hr/>
            </div>

            <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} className="mycarousel">
                <div className="slidecontainer">
                    <img src="/images/wumhome.png" alt="1" />
                    <p className="legend">Home page</p>
                </div>
                <div className="slidecontainer">
                    <img src="/images/wumarticles.png" alt="2" />
                    <p className="legend">Articles on the home page</p>
                </div>
                <div className="slidecontainer">
                    <img src="/images/wumguide.png" alt="3" />
                    <p className="legend">Guide page</p>
                </div>
                <div className="slidecontainer">
                    <img src="/images/wummovelist.png" alt="4"/>
                    <p className="legend">Character guide/movelist page</p>
                </div>
            </Carousel>

            <div className="projectoverview">
                <div className="titlesandhr">
                    <p className="titles">Project overview</p>
                </div>
                <p className="projecttext">The goal of this project was to make an <span className="red">online magazine</span> that covers a theme that you like and care about. I am a big fan of <span className="red">fighting games</span>, so I decided to create a website that would teach users everything that they need to know about this fun game genre. </p>
                <p className="projecttext">This might not be the best representation of my current skills since this was made in the early days of my studies. However, I still wanted to showcase some of my older projects that I still feel proud of.</p>
                <div className="titlesandhr">
                    <p className="titles">Main parts of the website</p>
                </div>
                <ul>
                    <li><span className="red">Guides</span> for specific fighting games</li>
                    <li><span className="red">Glossary</span> of key words in the fighting game community</li>
                    <li><span className="red">News</span> in the fighting game community</li>
                    <li>In-depth <span className="red">analysis</span> and <span className="red">move lists</span> of playable characters.</li>
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
                    <a href="https://josipbr.github.io/Wakeup-Mash/index.html" target="_blank" rel="noreferrer"><button type="submit" className="visit">Visit</button></a>
                    <Link to="/#projects"><button type="submit" className="back">Go back</button></Link>
                </div>
            </div>

            </main>
        </section>
    )
}