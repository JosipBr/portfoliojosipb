import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ProgresBar from "../components/progressbar";
import PostItem from "../components/postitem";
export default function MyProjects(){

    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        async function getData() {
            const response = await fetch("https://wordpress.josipbportfolio.josipbrljevic.dk/wp-json/wp/v2/posts?_embed");
            const data = await response.json();
            console.log(data);
            setPosts(data);
        }
        getData();
    },[]);

    useEffect(()=>{
        Aos.init({durration: 3000, once:true, mirror:true, offset:450});
    }, [])

    return(
        <section className="myprojects" data-aos="fade-up">
            <div className="title" id="projects">
                <p>Projects</p>
                <hr/>
            </div>
        {posts.map(post => (
            <PostItem key={post.id} post={post}/>
        ))}
        </section>
    )
}