import React from 'react';
import './App.css';
import Acordion from "./components/Acordion";
import Rating from "./components/rating/Rating";



function App() {
    return (
        <div>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>
            <Acordion titleac={"This is ac title1"}/>
            <Acordion titleac={"This is ac title2"}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

        </div>
    );
}

function PageTitle(props:any){
    return (
        <h1>{props.title}</h1>
    )
}
export default App;
