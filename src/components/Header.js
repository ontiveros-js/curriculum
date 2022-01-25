import React from "react";
import miImg from "../icons/foto.jpg"
import click from "../icons/click.png"

const Header = ()=> {
    return(
        <section className="header">
            <div>
            <div className="header-div">
            <img src={miImg} />
            </div>
            <div className="div-ezq cen">
                <h1>Douglas Ontiveros</h1>
                <p>Programador Frontend</p>
            </div>
            <hr/>
            <div className="div-ezq">
                <h2>Skills personales:</h2>
                <ul>
                    <li>Puntualidad.</li>
                    <li>Apasionado por el código.</li>
                    <li>Con mucho interés en seguir aprendiendo.</li>
                    <li>Autodidacta.</li>
                    <li>Me tomo muy enserio la programación.</li>
                    <li>Adaptabilidad para los equipos nuevos de trabajo.</li>
                    <li>Buenas habilidades de interlocución.</li>
                    <li>Responsable</li>
                </ul>
            </div>
            <hr/>
            <div className="div-ezq">
                <h2>Contactos:</h2>
                <p className="pMarg"><b>Teléfono y WhatsApp:</b> 
                <a href="https://wa.me/56933358494" target="_blank">+569 33358494</a>
                <img className="click" src={click}/></p>
                <p className="pMarg"><b>Email:</b> <a href="mailto:douglasontiveros1408@gmail.com" target="_blank">
                    douglasontiveros1408@gmail.com
                </a><img className="click" src={click}/></p>
            </div>
            </div>
        </section>
    )
}

export default Header