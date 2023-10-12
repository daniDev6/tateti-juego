
import { useEffect, useState } from 'react';
export function MouseMove(){
    const [enabled,setEnabled]=useState(true);
    const [position,setPosition]=useState({
        x:0,
        y:0
    })
    
    useEffect(()=>{
        const seguir=(event)=>{
            const {clientX,clientY}=event
            setPosition({x:clientX,y:clientY})
        }
        if(enabled){
            window.addEventListener('mousemove',seguir)
        }
        
    },[enabled])
    return (
        <>
        <div style={{
            border:'1px solid black',
            width:'50px',
            height:'50px',
            top:'-25px',
            left:'-25px',
            position:'absolute',
            backgroundColor:'gray',
            opacity:0.8,
            borderRadius:'50%',
            zIndex:1000,
            pointerEvents:'none',
            transform:`translate(${position.x}px,${position.y}px)`
        }}>

        </div>
        
        </>
    )
}