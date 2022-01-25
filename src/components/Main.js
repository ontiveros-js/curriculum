import React from "react";
import click from "../icons/click.png"

const Main = () => {
    return(
        <main className="main">
            <div>
                <h2>Conocimientos:</h2>
                <p className="pMarg"><b>JavaScript:</b> Manejo de la API del DOM, conocimiento de ECMAScript 6 
                en adelante, conocimiento closures, comportamiento del <i>this</i>, 
                callback, promesas , async y await. </p>
                <p className="pMarg"><b>CSS:</b> Selectores, especificidad , pseudo-clases, pseudo-elementos, 
                media queries.</p>
                <p className="pMarg"><b>HTML: </b> Conocimientos de las etiquetas semánticas 
                de este lenguaje de marcado de hipertexto que es tan importante. </p>
                <p className="pMarg"><b>React.js:</b> Conocimiento en la librería mas usada en el Frontend,
                manejo de <i>Hooks</i> (useState, useEfecct, useContext, useReducer, useMemo, 
                entre otros), class component, componentes funcionales, formularios
                controlados.</p>
            </div>
            <hr/>
            <div>
                <h2 className="cen">Proyectos personales:</h2>
                <div className="div-card">
                    <h3>BioSong</h3>
                    <p>BioSon es una app para buscar la biografía del cantante que desees,
                        además de poder buscar la letra de tu canción favorita.
                    </p>
                    <div className="div-link">
                        <div>
                            <h4>Link del proyecto</h4>
                            <a href="https://ontiveros-js.github.io/BioSong/" target="_blank">
                                BioSon app
                            </a><img className="click" src={click}/>
                        </div>
                        <div>
                           <h4>Link del repositorio</h4>
                            <a href="https://github.com/ontiveros-js/BioSong.git" target="_blank">
                                BioSong repo
                            </a><img className="click" src={click}/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="div-card">
                    <h3>List maker</h3>
                    <p>List maker es una app para llevar un control de tus tareas cotidianas,
                        crear, marcar, buscar y eliminar tareas de manera fácil.
                    </p>
                    <div className="div-link">
                        <div>
                            <h4>Link del proyecto</h4>
                            <a href=" https://ontiveros-js.github.io/list-maker/" target="_blank">
                                List maker app
                            </a><img className="click" src={click}/>
                        </div>
                        <div>
                           <h4>Link del repositorio</h4>
                            <a href="https://github.com/ontiveros-js/list-maker.git" target="_blank">
                                List maker repo
                            </a><img className="click" src={click}/>
                        </div>
                    </div>
                </div>
            </div>
            
        </main>
    )
}

export default Main