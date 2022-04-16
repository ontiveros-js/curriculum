import React, {createContext, useState, useContext} from "react"

export const Contexto = createContext()


let idiomaLocalS = localStorage.getItem("idioma")
let esEspañol

if(!idiomaLocalS){
    localStorage.setItem("idioma", JSON.stringify(true))
    esEspañol= true

}else{
    esEspañol = JSON.parse(idiomaLocalS)
}



const Context = ({children}) => {

    const [idioma, setIdioma] = useState(esEspañol)


    return <Contexto.Provider value={{idioma, setIdioma}}>{children}</Contexto.Provider>
}

export default Context