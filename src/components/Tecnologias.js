import React from "react";
import {useGetContext} from "../Hooks/useGetContext"
import mongo from "../icons/mongodb.png";
import js from "../icons/javascript.png";
import html from "../icons/html.png";
import git from "../icons/git.png";
import react from "../icons/react.png";
import node from "../icons/nodejs.png";
import css from "../icons/css.png";

const Tecnologias = () => {

  const {idioma} = useGetContext()

  return (
    <section className="section animate__animated animate__backInRight">
      <h2>{idioma ? "Tecnologías" : "Technologies"}</h2>
      <hr />
      <ul className="tecno-ul">
        <li className="tecno-li">
          <abbr title="MongoDB">
            <img src={mongo} alt="mongodb imagen" />
          </abbr>
        </li>
        <li className="tecno-li">
          <abbr title="Git">
            <img src={git} alt="git imagen" />
          </abbr>
        </li>
        <li className="tecno-li">
          <abbr title="Html">
            <img src={html} alt="html imagen" />
          </abbr>
        </li>
        <li className="tecno-li">
          <abbr title="Node.js">
            <img src={node} alt="node imagen" />
          </abbr>
        </li>
        <li className="tecno-li">
          <abbr title="React.js">
            <img src={react} alt="react imagen" />
          </abbr>
        </li>
        <li className="tecno-li">
          <abbr title="JavaScript">
            <img src={js} alt="javascript imagen" />
          </abbr>
        </li>
        <li className="tecno-li">
          <abbr title="CSS">
            <img src={css} alt="css imagen" />
          </abbr>
        </li>
      </ul>
    </section>
  );
};

export default Tecnologias;
