import React from "react";
import {useGetContext} from "../Hooks/useGetContext"

const Habilidades = () => {

  const {idioma} = useGetContext()

  return (
    <section className="section-Hab">
      <>
        <h2>{idioma ? "Habilidades" : "Skills"}</h2>
        <hr />
        <p>
          <b>JavaScript:</b> 
          {idioma 
        ? ` Manejo de la API del DOM, conocimiento de
        ECMAScript 6 en adelante, conocimiento en closures, comportamiento de `
        : ` Handling of the DOM API, knowledge of
        ECMAScript 6 onwards, knowledge of closures, behavior of `}
          <i>this</i>,{idioma 
          ? ` Callback, Promesas , async y await y más.`
          : ` Callback, Promises, async and await and more.`} 
        </p>
        <p>
          <b>CSS:</b>{idioma 
          ? ` Selectores, especificidad , pseudo-clases,
          pseudo-elementos, media queries y más.`
          : ` Selectors, specificity, pseudo-classes,
          pseudo-elements, media queries and more.`}
        </p>

        <p>
          <b>HTML:</b>{idioma 
          ? ` Conocimientos de las etiquetas semánticas de este
          lenguaje de marcado de hipertexto que es tan importante.`
          : ` Knowledge of the semantic labels of this
          hypertext markup language that is so important.`} 
        </p>
        <p>
          <b>React.js:</b>{idioma 
          ? ` Conocimiento en la librería más usada en el Frontend,
          manejo de Hooks (useState, useEfecct, useContext, useReducer,
          useMemo, entre otros), Class component, componentes funcionales,
          formularios controlados y más.`
          : ` Knowledge in the most used library in the Frontend,
          Hook handling (useState, useEfect, useContext, useReducer,
          useMemo, and so on), Class component, functional components,
          controlled forms and more.`} 
        </p>

        <p>
          <b>Node.js - Express:</b>{idioma 
          ? `Node es el entorno para ejecutar
          JavaScript del lado del servidor y junto con Express se pueden definir
          rutas de una manera sencilla con peticiones GET, POST, PUT, DELETE,
          por nombrar las más importantes.`
          : `
          Node is the environment to run
                    Server-side JavaScript and along with Express can be defined
                    routes in a simple way with GET, POST, PUT, DELETE requests,
                    to name the most important.`}
        </p>

        <p>
          <b>MongoDB:</b>{idioma 
          ? ` Usando Mongoose como ODM puedo esquematizar los datos
          y consultarlos de manera fácil y organizada.`
          : `
           Using Mongoose as ODM I can schematize the data
                    and consult them in an easy and organized way.`}
        </p>

        <p>
          <b>Git:</b>{idioma 
          ? ` El sistema de control de versiones más usado. Git add, git
          push, branch, pull, commit, entre otros comandos nos sirven para
          llevar un control en el versionado del código.`
          : ` The most used version control system. Git add, git
          push, branch, pull, commit, among other commands, are used to
          control the versioning of the code.`}
        </p>
      </>
    </section>
  );
};

export default Habilidades;
