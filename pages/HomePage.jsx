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
    {proyectos.map(({ _id, name, video, link, descripcion, tecnologias }) => (
      <div key={_id} className="row align-items-center contenedor-proyecto">

        {/* Video */}
        <div className="col-12 col-lg-6">
          <div className="contenedor-video">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="video-proyecto"
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Información */}
        <div className="col-12 col-lg-6">
          <div className="info-proyecto">
            <h3>{name}</h3>
            <p>{descripcion}</p>

            {tecnologias && (
              <div className="tecnologias">
                {tecnologias.map((tech) => (
                  <img
                    key={tech}
                    src={`${tech}-proyectos.svg`}
                    alt={tech}
                    className="icono-tecnologia"
                  />
                ))}
              </div>
            )}
          
            <a
              className="btn btn-primary"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visitar sitio
            </a>
          </div>
        </div>

      </div>
    ))}
  </div>
);
}

export default HomePage