import React from "react";
import {useGetContext} from "../Hooks/useGetContext"

const Estudios = () => {

  const {idioma} = useGetContext()

  return (
    <section className="section-Est">
      <h2>{idioma ? "Estudios" : "Studies" }</h2>
      <ul>
        <li>{idioma ? "E.T.I.R. Francisco González Guinán (Educación media)." : "E.T.I.R. Francisco González Guinán (High school)." }</li>
        <li>
        {idioma ? "Empece a estudiar desarrollo web con Platzi. " : "I started studying web development with Platzi. " }
          <a href="https://platzi.com/p/ontiveros/" target="_blank">
            {idioma ? "Mi perfil." : "My profile." }
          </a>
        </li>
        <li>
        {idioma ? "Ahora estudio con toda la información que el internet y comunidades me brinden." 
        : "Now I study with all the information that the internet and communities give me." }
          
        </li>
        <li>{idioma ? "Eterno autodidacta." : "Eternal self-taught." }</li>
      </ul>
    </section>
  );
};

export default Estudios;
