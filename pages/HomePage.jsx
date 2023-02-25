import { useState, useEffect } from "react"
import * as ProyectosServices from "../services/proyectos.services.js"
import '../src/components/bootstrap.min.css'

function HomePage(){

    const [proyectos, setProyectos] = useState([])

    useEffect(()=>{
        ProyectosServices.find()
        .then(data => {
            setProyectos(data)
            console.log(data)
        })
    }, [])

   return ( 
            <div className="container">
            <div className="row">
                {proyectos.map(({_id, name, img,link, descripcion}) =>
                <div key={_id} className="col-md-6 contenedor-proyecto">
                    <img src={`${img}`}></img>
                    <h3>{name}</h3>
                    <p>{descripcion}</p> 
                    <a class="btn btn-primary" target={"_blank"} href={`${link}`}>Visitar sitio</a>                  
                </div>
                )}
            </div>
            </div> 
          
          )}

export default HomePage