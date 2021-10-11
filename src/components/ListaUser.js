import axios from 'axios';
import React,{useState, useEffect} from 'react';


export default function ListaUser() {
    const [nomes, setNomes] = useState([]);

   /* async function request() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        const {data} = await response;
    }*/

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
            console.log(res.data)
            setNomes(res.data)
        })
        //request();
    },[]);
   return(
       <table className="ListaUser" border="1" cellSpacing="10" >
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            </thead>
           {
               nomes.map(function(data){
                   return(
                    <tbody>
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.username}</td>
                                <td>{data.email}</td>
                            </tr>
                     </tbody>  
                   )
               })
           }
       </table>
   )

}

