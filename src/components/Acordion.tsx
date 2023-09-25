import React from 'react';

function Acordion (props:any){
    return (
        <>
            <TitleAc titleac={props.titleac}/>
            <Body/>
        </>
    )
}
function TitleAc (props:any) {
    return <>
        <h1>{props.titleac}</h1>
    </>
}
function Body (){
    return (
        <>
            <p>I like it</p>
        </>
    )
}

export default Acordion;
