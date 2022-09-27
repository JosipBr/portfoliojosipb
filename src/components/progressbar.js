import Skillbar from 'react-skillbars';


const skills = [
    {
        type: "HTML",
        level: 90,
        color: {bar: "#8f312b", title: {text: "#fff", background: "#bd4038"}}
    },
    {
        type: "CSS",
        level: 90,
        color: {bar: "#8f312b", title: {text: "#fff", background: "#bd4038"}}
    },
    {
        type: "Javascript",
        level: 70,
        color: {bar: "#8f312b", title: {text: "#fff", background: "#bd4038"}}
    },
    {
        type: "React",
        level: 60,
        color: {bar: "#8f312b", title: {text: "#fff", background: "#bd4038"}}
    },
    {
        type: "Typescript",
        level: 60,
        color: {bar: "#8f312b", title: {text: "#fff", background: "#bd4038"}}
    },
    {
        type: "Photoshop",
        level: 80,
        color: {bar: "#8f312b", title: {text: "#fff", background: "#bd4038"}}
    },
    {
        type: "Adobe xD",
        level: 80,
        color: {bar: "#8f312b", title: {text: "#fff", background: "#bd4038"}}
    },
];

export default function ProgresBar(){
    return(
        <Skillbar skills={skills} height={30} animationDelay={1} animationDuration={2000}/>
    )
}