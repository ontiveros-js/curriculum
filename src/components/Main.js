import React, { useState } from "react";
import Context from "../context/Context";
import Layout from "./Layout";
import Home from "./Home";
import Contacto from "./Contacto";
import ProyPers from "./ProyPers";
import Tecnologias from "./Tecnologias";
import Estudios from "./Estudios";
import Habilidades from "./Habilidades";
import ExpeProf from "./ExpeProf";
import Aside from "./Aside";

const Main = () => {
  const [home, setHome] = useState(true);
  const [contacto, setContacto] = useState(false);
  const [proyPers, setProypers] = useState(false);
  const [tecnologias, setTecnologias] = useState(false);
  const [estudios, setEstudios] = useState(false);
  const [habilidades, setHabilidades] = useState(false);
  const [expeProf, setExpeProf] = useState(false);
  const [asideAppear, setAsideAppear] = useState(false);
  const [closeBtn, setCloseBtn] = useState(false);

  const functions = {
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
  };

  const handleAside = {
    asideAppear,
    setAsideAppear,
    closeBtn,
    setCloseBtn,
  };

  return (
    <Context>
    <Layout handleAside={handleAside}>
      <div className="layout-div">
        {home && <Home />}
        <Aside functions={functions} />
        {contacto && <Contacto />}
        {proyPers && <ProyPers />}
        {tecnologias && <Tecnologias />}
        {estudios && <Estudios />}
        {habilidades && <Habilidades />}
        {expeProf && <ExpeProf />}
      </div>
    </Layout>
    </Context>
  );
};

export default Main;
