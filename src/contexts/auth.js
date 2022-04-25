import React, { useEffect, useState } from 'react';
import { View } from 'react-native-web';

//pesquisar useState e useEffect
const GetUsuarios = () => {
    const [usuarios,setUsuarios]=useState([])

    let url = 'http://192.168.1.69:4000/usuarios';


    useEffect(
        ()=>{
            fetch(url, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then((resp)=>resp.json())
                .then((json)=>setUsuarios(json))
                .catch((err)=>(alert('Erro no GET de usuario:  ' + err)))
                
        },[]
    )
    return usuarios

}

export default GetUsuarios




// const AuthConTEXT = createContext();

// const AuthpROVIDER = ({ children }) => {
//     async function login(req){
//         let url = `${api_node}/usuarios/`

//         await fetch(url, {
//             method: 'GET',
//             headers: {
//                 Accept: 'application/json',
//                 'x-acces-token': token,
//                 'Content-Type': 'application/json',
//             },
//         })
//         .then((res) => res.json())
//     }
// }

// export { AuthConTEXT, AuthpROVIDER }