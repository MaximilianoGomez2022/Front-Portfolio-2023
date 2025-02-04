import { useState, useEffect } from "react"
import { find } from "/services/proyectos.services.js";


function Proyectos (){

    const [proyectos, setProyectos] = useState([])

    useEffect(()=>{
        find()
        .then(data => {
            setProyectos(data)
            console.log(data)
        })
    }, [])

    return(
        <section className='proyectos' id='proyectos'>
            <div className='separador-proyectos'></div>
                <div class="titulo" data-aos="fade-up">
                    <h2>PROYECTOS</h2>
                </div>
                <div className="container">
                    <div className="row">
                    {proyectos.map((proyecto) => (
                    <div className="col-md-3 mb-4" key={proyecto.id}>
                        <div className="card h-100">
                        <div className="card-body text-center">
                            <img src={proyecto.img} alt="" srcset="" />
                            <h5 className="card-title">{proyecto.titulo}</h5>
                            <p className="card-text">{proyecto.descripcion}</p>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>       
                </div>
                <article className='article-logos'>
                <h2 className='text-center'>DISEÑO DE LOGOS</h2>
                <div class="flex-container-habilidades">
                    <div data-aos="fade-right">
                        <img src="logo-ari-1.svg" alt="Logo Ariel 1"/>
                    </div>
                    <div data-aos="fade-up">
                        <img src="logo-ari-2.svg" alt="Logo Ariel 2"/>
                    </div>
                    <div data-aos="fade-left">
                        <img src="logo-ari-3.svg" alt="Logo Ariel 3"/>
                    </div>
                </div>
                <div class="flex-container-habilidades">
                    <div data-aos="fade-right">
                        <img src="logo-bianca-1.svg" alt="Logo bianca 1"/>
                    </div>
                    <div data-aos="fade-up">
                        <img src="logo-bianca-2.svg" alt="Logo bianca 2"/>
                    </div>
                    <div data-aos="fade-left">
                        <img src="logo-bianca-blanco.svg" alt="Logo bianca 3"/>
                    </div>
                </div>
                <div class="flex-container-habilidades">
                    <div data-aos="fade-right">
                        <img src="logo-taste.svg" alt="Logo bianca 1"/>
                    </div>
                    <div data-aos="fade-up">
                        <img src="logo-taste-queso.svg" alt="Logo bianca 2"/>
                    </div>
                    <div data-aos="fade-left">
                        <img src="logo-taste-jamon.svg" alt="Logo bianca 3"/>
                    </div>
                </div>
                <div class="flex-container-habilidades">
                    <div data-aos="fade-right">
                        <img src="autoclases-logo.svg" alt="Logo bianca 1"/>
                    </div>
                    <div data-aos="fade-up">
                        <img src="autoclases-logo-2.svg" alt="Logo bianca 2"/>
                    </div>
                    <div data-aos="fade-left">
                        <img src="autoclases-logo-blanco.svg" alt="Logo bianca 3"/>
                    </div>
                </div>
            </article>
            </section>
    ) 

}

export default Proyectos