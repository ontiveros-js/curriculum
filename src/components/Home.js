import React from "react";
import miImg from "../icons/foto.png";
import { useGetContext } from "../Hooks/useGetContext";

const Home = () => {
  const { idioma } = useGetContext();

  return (
    <section className="section">
      <img src={miImg} alt="imagen principal" 
      className="imgHome animate__animated animate__fadeIn" 
      />
      <span className="animate__animated animate__backInUp">
        <hr />
        {idioma ? <h2>Pogramador Frontend</h2> : <h2>Frontend Programmer</h2>}
        {idioma ? (
          <h3>y entusiasta de la programación en general</h3>
        ) : (
          <h3>and general programming enthusiast</h3>
        )}
      </span>
      
    </section>
  );
};

export default Home;
