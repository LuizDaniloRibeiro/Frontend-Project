import React, { useEffect, useState } from 'react';
import { View } from "react-native";

//pesquisar useState e useEffect
const ListarUsuarios = () => {
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

export default ListarUsuarios;