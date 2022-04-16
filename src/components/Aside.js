import React from "react";
import { useGetContext } from "../Hooks/useGetContext";

const Aside = ({ functions }) => {
  const { idioma, setIdioma } = useGetContext();

  const {
    setHome,
    setContacto,
    setProypers,
    setTecnologias,
    setEstudios,
    setHabilidades,
    setExpeProf,
    asideAppear,
    setAsideAppear,
    setCloseBtn,
  } = functions;

  const handleClick = (e) => {
    if (e.target.textContent === "Inicio" || 
    e.target.textContent === "Home") {
      setHome(true);
      setContacto(false);
      setProypers(false);
      setTecnologias(false);
      setEstudios(false);
      setHabilidades(false);
      setExpeProf(false);
      setAsideAppear(false);
      setCloseBtn(false);
    }
    if (
      e.target.textContent === "Habilidades" ||
      e.target.textContent === "Skills"
    ) {
      setHome(false);
      setContacto(false);
      setProypers(false);
      setTecnologias(false);
      setEstudios(false);
      setHabilidades(true);
      setExpeProf(false);
      setAsideAppear(false);
      setCloseBtn(false);
    }
    if (
      e.target.textContent === "Tecnologías" ||
      e.target.textContent === "Technologies"
    ) {
      setHome(false);
      setContacto(false);
      setProypers(false);
      setTecnologias(true);
      setEstudios(false);
      setHabilidades(false);
      setExpeProf(false);
      setAsideAppear(false);
      setCloseBtn(false);
    }
    if (
      e.target.textContent === "Contacto" ||
      e.target.textContent === "Contact"
    ) {
      setHome(false);
      setContacto(true);
      setProypers(false);
      setTecnologias(false);
      setEstudios(false);
      setHabilidades(false);
      setExpeProf(false);
      setAsideAppear(false);
      setCloseBtn(false);
    }
    if (
      e.target.textContent === "Estudios" ||
      e.target.textContent === "Studies"
    ) {
      setHome(false);
      setContacto(false);
      setProypers(false);
      setTecnologias(false);
      setEstudios(true);
      setHabilidades(false);
      setExpeProf(false);
      setAsideAppear(false);
      setCloseBtn(false);
    }
    if (
      e.target.textContent === "Experiencia profesional" ||
      e.target.textContent === "Professional experience"
    ) {
      setHome(false);
      setContacto(false);
      setProypers(false);
      setTecnologias(false);
      setEstudios(false);
      setHabilidades(false);
      setExpeProf(true);
      setAsideAppear(false);
      setCloseBtn(false);
    }
    if (
      e.target.textContent === "Proyectos personales" ||
      e.target.textContent === "Personal projects"
    ) {
      setHome(false);
      setContacto(false);
      setProypers(true);
      setTecnologias(false);
      setEstudios(false);
      setHabilidades(false);
      setExpeProf(false);
      setAsideAppear(false);
      setCloseBtn(false);
    }
    if (
      e.target.textContent === "English" ||
      e.target.textContent === "Español"
    ) {
      if (idioma) {
        setIdioma(false);
        localStorage.setItem("idioma", JSON.stringify(false));
      } else {
        setIdioma(true);
        localStorage.setItem("idioma", JSON.stringify(true));
      }
      setAsideAppear(false);
      setCloseBtn(false);

    }
  };

  return (
    <aside className={asideAppear ? "aside asideAppear" : "aside"}>
      <nav className="aside-nav">
        <ul onClick={handleClick}>
          <li className="aside-li">
            <span>{idioma ? "Inicio" : "Home"}</span>
          </li>
          <hr />
          <li className="aside-li">
            <span>{idioma ? "Habilidades" : "Skills"}</span>
          </li>
          <hr />
          <li className="aside-li">
            <span>{idioma ? "Tecnologías" : "Technologies"}</span>
          </li>
          <hr />
          <li className="aside-li">
            <span>{idioma ? "Contacto" : "Contact"}</span>
          </li>
          <hr />
          <li className="aside-li">
            <span>{idioma ? "Estudios" : "Studies"}</span>
          </li>
          <hr />
          <li className="aside-li">
            <span>{idioma ? "Experiencia profesional" : "Professional experience"}</span>
          </li>
          <hr />
          <li className="aside-li">
            <span>{idioma ? "Proyectos personales" : "Personal projects"}</span>
          </li>
          <hr />
          <li className="aside-li">
            <span>{idioma ? "English" : "Español"}</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
