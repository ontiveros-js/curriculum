import React from "react";
import { useGetContext } from "../Hooks/useGetContext";

const Contacto = () => {
  const { idioma } = useGetContext();

  return (
    <section className="section animate__animated animate__fadeInLeft">
      <h2>{idioma ? "Contacto:" : "Contact:"}</h2>
      <div>
        <ul>
          <li>Douglas Alberto Ontiveros Lara.</li>
          <li>{idioma ? "Venezolano." : "Venezuelan."}</li>
          <li>
            {idioma
              ? "Vivo en Santiago de Chile."
              : "I live in Santiago de Chile."}
          </li>
          <li>
            <a href="mailto:douglasontiveros@gmail.com?subject=Acabo de ver tu CV"
              target="_blank" rel="noreferrer"
            >
              douglasontiveros@gmail.com
            </a>
          </li>
          <li>
            <a href="https://wa.me/56933358494" target="_blank" rel="noreferrer">
              +569 33358494
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contacto;
