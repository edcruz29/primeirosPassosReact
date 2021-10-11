import '../assets/Timer.css'
import React,{useState, useEffect} from 'react';


export default function Timer() {
    const data = new Date()
    const[hora, setHora] = useState(data.getHours());
    const[minuto, setMinuto]= useState(data.getMinutes())
    const[segundo, setSegundo]= useState(data.getSeconds())

    
        useEffect(() => {
            const interval = setInterval(()=>{
                 setSegundo(segundo+1);
                 if(segundo>=59 && minuto<59){
                    setSegundo(0)
                    setMinuto(minuto+1);
                    
                 }else if(hora<23 && minuto>=59 && segundo>=59){
                    setMinuto(0);
                    setSegundo(0)
                    setHora(hora+1) 
                 }else if(hora===23 && minuto>=59 && segundo>=59){
                    setHora(0) 
                    setMinuto(0);
                    setSegundo(0)
                 }
            },1000) 
            return ()=> clearInterval(interval)
         });
   return(
       <div className="Timer">
           <h2>{hora}:{minuto}:{segundo}</h2>
       </div>
   )

}

