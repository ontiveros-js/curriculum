import React from "react";
import {useGetContext} from "../Hooks/useGetContext"
import errorImg from "../icons/Error404.jpg";

const ExpeProf = () => {

  const {idioma} = useGetContext()

  return (
    <section className="section-Exp">        
      <img src={errorImg} alt="imagen error 404" className="imgExp" />
      <h4>{idioma ? 
      "Sin experiencia laboral aun, pero a la espera de una oportunidad." 
      : 
      "No work experience yet, but waiting for an opportunity."}</h4>
    </section>
  );
};

export default ExpeProf;
