import parse from "html-react-parser";
import { Link } from "react-router-dom";

export default function PostItem({post}){
    return(
        <section className="projectpost">
            <div className="imageleft">
                <img src={post.acf.projectimage.url} alt="guzica" />
            </div>
            <div className="textright">
                <p className="projecttitle">{parse(post.acf.title)}</p>
                <p className="projectdescription">{parse(post.acf.projectdescription)}</p>
                <div className="buttonandlink" >
                    <Link to={parse(post.acf.subpagelink)} className="readbutton"><button type="submit" className="readmore">Read more</button></Link>
                    <a href={parse(post.acf.projectlink)} id={parse(post.acf.projectimage.title)} target="_blank" rel="noreferrer"><img src={post.acf.linkicon.url} alt="linkicon"/></a>
                </div>
            </div>
        </section>
    )
}