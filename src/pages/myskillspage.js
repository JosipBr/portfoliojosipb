import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ProgresBar from "../components/progressbar";
export default function MySkills(){

    useEffect(()=>{
        Aos.init({durration: 3000, once:true, mirror:true, offset:450});
    }, [])
    return(
    <section className="myskills" data-aos="fade-up" id="myskills">
        <div className="title">
            <p>My skills</p>
            <hr/>
        </div>
        
        <div className="softskills">
            <div className="softskillcontainer">
                <img src="/images/creative.png" alt="creative"></img>
                <p className="skilltitle">Creative</p>
                <p className="skilldescription">Able to create unique and dynamic websites.</p>
            </div>
            <div className="softskillcontainer">
                <img src="/images/organized.png" alt="organized"></img>
                <p className="skilltitle">Organized</p>
                <p className="skilldescription">Effectivelly plan and finish my work before the deadline.</p>
            </div>
            <div className="softskillcontainer">
                <img src="/images/teamwork.png" alt="teamwork"></img>
                <p className="skilltitle">Teamwork</p>
                <p className="skilldescription">Experience in working in a team and helping out each other.</p>
            </div>
            <div className="softskillcontainer">
                <img src="/images/adaptable.png" alt="adaptable"></img>
                <p className="skilltitle">Adaptable</p>
                <p className="skilldescription">Ready to learn new skills to improve the quallity of my work.</p>
            </div>
        </div>

        <div className="progresbars">
            <ProgresBar className="progres" />
        </div>

    </section>
    )
}