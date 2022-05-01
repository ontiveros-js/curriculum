import React from "react";
import { useGetContext } from "../Hooks/useGetContext";

const ProyPers = () => {
  const { idioma } = useGetContext();

  return (
    <section className="section  animate__animated animate__fadeInLeft">
      <h2>{idioma ? "Proyectos personales:" : "Personal projects:"}</h2>
      
      <hr />
      <div>
        <div>
          <h3>CRUD MERN stack</h3>
          <p>
            {idioma
              ? `CRUD MERN es una app para notas de tareas a realizar. 
              Su frontend está hecho enteramente en React.js y Bootstrap,
               mientras que el backend está hecho con Node.js-Express y base 
               de datos en MongoDB Atlas.`
              : `
              CRUD MERN is an app for notes of tasks to be done. 
              Its frontend is made entirely in React.js and Bootstrap, 
              while the backend is made with Node.js-Express and MongoDB Atlas database.`}
          </p>
          <div className="div-link">
            <div>
              <h4>{idioma ? "Link del proyecto" : "Project link"}</h4>
              <a
                href="https://ontiveros-js.github.io/crud-mern-ontiveros/"
                target="_blank"
                rel="noreferrer"
              >
                CRUD MERN stack app
              </a>
            </div>
            <div>
              <h4>{idioma ? "Link del repositorio" : "Repository link"}</h4>
              <a
                href="https://github.com/ontiveros-js/crud-mern-ontiveros/tree/master"
                target="_blank"
                rel="noreferrer"
              >
                CRUD MERN stack repo Frontend
              </a>
            </div>
            <div>
              <h4>{idioma ? "Link del repositorio" : "Repository link"}</h4>
              <a
                href="https://github.com/ontiveros-js/crud-mern-ontiveros-backend"
                target="_blank"
                rel="noreferrer"
              >
                CRUD MERN stack repo Backend
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div>
        <div>
          <h3>BioSong</h3>
          <p>
            {idioma
              ? `BioSon es una app para buscar la biografía del cantante que desees,
      además de poder buscar la letra de tu canción favorita. Está
      construida enteramente en React.js y CSS consultando dos APIs
      públicas para obtener los datos.`
              : `BioSon is an app to search for the biography of the singer you want,
       In addition to being able to search for the lyrics of your favorite song. Is
       built entirely on React.js and CSS by querying two APIs
       public to get the data.`}
          </p>
          <div className="div-link">
            <div>
              <h4>{idioma ? "Link del proyecto" : "Project link"}</h4>
              <a
                href="https://ontiveros-js.github.io/BioSong/"
                target="_blank"
                rel="noreferrer"
              >
                BioSon app
              </a>
            </div>
            <div>
              <h4>{idioma ? "Link del repositorio" : "Repository link"}</h4>
              <a
                href="https://github.com/ontiveros-js/BioSong/tree/master"
                target="_blank"
                rel="noreferrer"
              >
                BioSong repo
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div>
        <div>
          <h3>E-commerce</h3>
          <p>
            {idioma
              ? `E-commerce es la típica app de comercio electrónico para facilitar
      las ventas de artículos en internet. Construida con React.js, React
      Router para las rutas y CSS.`
              : `E-commerce is the typical electronic commerce app to facilitate
       sales of items on the internet. Built with React.js, React
       Router for routes and CSS.`}
          </p>
          <div className="div-link">
            <div>
              <h4>{idioma ? "Link del proyecto" : "Project link"}</h4>
              <a
                href=" https://app-tienda-virtual.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                E-commerce app
              </a>
            </div>
            <div>
              <h4>{idioma ? "Link del repositorio" : "Repository link"}</h4>
              <a
                href="https://github.com/ontiveros-js/tienda-virtual/tree/master"
                target="_blank"
                rel="noreferrer"
              >
                E-commerce repo
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div>
        <div>
          <h3>Browser-chatting</h3>
          <p>
            {idioma
              ? `Browser-chatting es una app para chatear en tiempo real entre navegadores de un mismo dispositivo o entre diferentes dispositivos.
              Esta construida con javascript vainilla, node.js con express, mongoDB Atlas en la base de datos y socket io para la conexión en tiempo real. `
              : `Browser-chatting is an app to chat in real time between browsers on the same device or between different devices.
              It is built with vanilla javascript, node.js with express, mongoDB Atlas in the database and socket io for real time connection.`}
          </p>
          <div className="div-link">
            <div>
              <h4>{idioma ? "Link del proyecto" : "Project link"}</h4>
              <a
                href="https://browser-chatting.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Browser-chatting app
              </a>
            </div>
            <div>
              <h4>{idioma ? "Link del repositorio" : "Repository link"}</h4>
              <a
                href="https://github.com/ontiveros-js/browser-chatting.git"
                target="_blank"
                rel="noreferrer"
              >
                Browser-chatting repo
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div>
        <div>
          <h3>List maker</h3>
          <p>
            {idioma
              ? `List maker es una app para llevar un control de tus tareas
      cotidianas, crear, marcar, buscar y eliminar tareas de manera fácil.
      Echa en React.js, CSS y usando el localStorage para la persistencia
      de datos.`
              : `
       List maker is an app to keep track of your tasks
                   easily create, mark, search and delete tasks.
                   Throw in React.js, CSS and using localStorage for persistence
                   of data.`}
          </p>
          <div className="div-link">
            <div>
              <h4>{idioma ? "Link del proyecto" : "Project link"}</h4>
              <a
                href=" https://ontiveros-js.github.io/list-maker/"
                target="_blank"
                rel="noreferrer"
              >
                List maker app
              </a>
            </div>
            <div>
              <h4>{idioma ? "Link del repositorio" : "Repository link"}</h4>
              <a
                href="https://github.com/ontiveros-js/list-maker/tree/master"
                target="_blank"
                rel="noreferrer"
              >
                List maker repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProyPers;
