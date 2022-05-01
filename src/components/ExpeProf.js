import React from "react";
import {useGetContext} from "../Hooks/useGetContext"
import errorImg from "../icons/Error404.png";

const ExpeProf = () => {

  const {idioma} = useGetContext()

  return (
    <section className="section">        
      <img src={errorImg} alt="imagen error 404" 
      className="imgExp animate__animated animate__fadeIn" 
      />
      <h4 className="animate__animated animate__backInUp"> {idioma ? 
      "Sin experiencia laboral aun, pero a la espera de una oportunidad." 
      : 
      "No work experience yet, but waiting for an opportunity."}</h4>
    </section>
  );
};

export default ExpeProf;
