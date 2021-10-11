import '../assets/ClickMe.css'
import React,{useState, useEffect} from 'react';

export default function ClickMe() {
    const [count, setCount] = useState(0);
    const [nome] = useState("Eduardo");
    function callAlert(){
        alert(document.title = `Olá ${nome}, você clicou ${count} vezes`)
    }
    useEffect(()=>{
        callAlert()
    })
  return (
    <div className="ClickMe">
       <p className= "ClickMe__count">Você clicou {count} vezes</p>
        <button className="ClickMe__button" onClick={() =>setCount(count+1)}>Clique Aqui</button>
    </div>
  );
}

