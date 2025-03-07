import './bootstrap.min.css'
import './styles.css'
import 'animate.css'
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import {useState} from 'react'

function Content(props){
    let [nombre, setNombre] = useState('')
    let [mail, setMail] = useState('')
    let [asunto, setAsunto] = useState('')
    let [mensaje, setMensaje] = useState('')
    let [error, setError] = useState([])
    let form = useRef();

    function onSubmit(event){
        event.preventDefault()
        let errNom = document.querySelector('#error-nombre')
        let errMail = document.querySelector('#error-mail')
        let errMens = document.querySelector('#error-mensaje')



        if(nombre !== '' && mensaje !== '' && mail !== '') {
            emailjs.sendForm('service_gvufsvh', 'template_wv3356c', form.current, 'ZPbvjNyvJzGq33SIL')
            .then((result) => {
                console.log(result.text);
                console.log('Se envió el mensaje')
                let envioError = document.querySelector('#error-envio')
                envioError.className = 'error-envio-oculto'
                let envio = document.querySelector('#success-envio')
                envio.className = 'success-envio-mostrar'
                setTimeout(() => {
                   envio.className = 'success-envio-oculto' 
                }, 10000);
            }, (error) => {
                console.log(error.text);
            })
        }
        
        if (nombre === '') {
            console.log('Debés Ingresar el nombre')
            errNom.innerHTML = 'Debés Ingresar el nombre'
            errMens.innerHTML = 'Debés Ingresar el mensaje'
            let envio = document.querySelector('#error-envio')
            envio.className = 'error-envio-mostrar'
        } else {
            errNom.innerHTML= ''
        }
        
        if (mensaje === '') {
            console.log('Debés Ingresar el mensaje')
            errMens.innerHTML = 'Debés Ingresar el mensaje'
            let envio = document.querySelector('#error-envio')
            envio.className = 'error-envio-mostrar'
        }  else {
            errMens.innerHTML= ''
        }
        
        if (mail === '') {
            console.log('Debés Ingresar el mail')
            errMail.innerHTML = 'Debés Ingresar un mail válido'
            errMens.innerHTML = 'Debés Ingresar el mensaje'
            let envio = document.querySelector('#error-envio')
            envio.className = 'error-envio-mostrar'                                        
        }   else {
            errMail.innerHTML= ''
        }

    }

    function OnChangeNombre(event){
        setNombre(event.target.value)
    }

    function OnChangeMail(event){
        setMail(event.target.value)
    }

    function OnChangeAsunto(event){
        setAsunto(event.target.value)
    }

    function OnChangeMensaje(event){
        setMensaje(event.target.value)
    }

    return (
        <div className="Content">
            <section class="banner" id="home">
            <div className='texto-banner'>
            <span className='hola'>HOLA SOY</span>
            <h1 className='animate__animated animate__fadeIn animate__delay-1s'>GOMEZ <br></br>MAXIMILIANO</h1>
                <p>&lt;Desarrollador web/&gt;<span>&#160;</span></p>
                {/* <div class="lds-ellipsis animate__animated animate__fadeOut animate__delay-2s"><div></div><div></div><div></div><div></div></div> */}
            </div>
            </section>
            <section id='pastillas'>
                <div className='container'>
                <div className='row justify-content-center'>
                    <div className="col-md-3 text-center">
                        <img src="pastilla-2.svg" alt="icono de programador frontend" />
                        <h2>PROGRAMADOR FRONTEND</h2>
                    </div>
                    <div className="col-md-3 text-center">
                        <img src="pastilla-3.svg" alt="icono de programador backend" />
                        <h2>PROGRAMADOR BACKEND</h2>
                        </div>
                    <div className="col-md-3 text-center">
                        <img src="pastilla-1.svg" alt="icono de diesño responsive" />
                        <h2>DISEÑO RESPONSIVE UX / UI</h2>
                        </div>
                </div>
                </div>
            </section>

            <div class="nosotros-bk">
            <div className='separador-sobremi'></div>
            <section id="sobremi-section">
                    <div class="titulo" data-aos="fade-up">
                        <h2>SOBRE MÍ</h2>
                    </div>
            <div class="sobremi">
                <div className="sobremi-imagen" data-aos="fade-left" data-aos-duration="1000">
                    <img src="Maximiliano-Gomez-CV-2023-foto-02.png" alt="foto mía" />
                </div>
                <div class="sobremi-texto" data-aos="fade-right" data-aos-duration="1000">
                    {/* <div className='info-yo'>
                    <h3>¿QUIÉN SOY?</h3>
                    <p>Hola soy Maximiliano Gomez, actualmente resido en la Ciudad Autónoma de Buenos Aires, Argentina.</p>
                    </div> */}
                    <div className='info-yo'>
                    <h3>ESTUDIOS SECUNDARIOS</h3>
                    <p>Tengo el título de Técnico en informática cursado en la Escuela Técnica N°1 de Ituzaingó.</p>
                    </div>
                    <div className='info-estudios'>
                    <h3>ESTUDIOS TERCIARIOS</h3>
                    <p>Terminé de cursar la carrera de Desarrollo web en Escuela Da Vinci. Obteniendo así la CERTIFICACIÓN PROFESIONAL EN GESTIÓN DE MEDIOS DIGITALES, y faltando una materia para el título.</p>
                    </div>
                    <div className='info-estudios'>
                    <h3>EXPERIENCIA LABORAL</h3>
                    <p><b>AGENCIA VALOR DIGITAL</b>, haciendo los bocetos para los clientes y luego la maquetación y el diseño en css, en la plataforma Wordpress. Uso de Filezilla para subir archivos al servidor.</p>
                    <p>También trabajé en la empresa <b>FIXEAR</b>, como desarrollador front-end modificando un proyecto ya hecho, cambiando funcionalidad y diseños usando el framework Vue.js. Uso de gitlab para las versiones del proyecto y comandos desde la terminal para ubicar el proyecto en el servidor.</p>
                    <p><b>ACQ IT</b> Usando Laravel para el backend, modificando funcionalidades del sistema interno de la empresa basado en una ticketera de tareas y peticiones de los clientes. Uso de Teams, outlook, Microsoft SQL server para ver las bases de datos. Gitlab para las versiones del proyecto y las ramas de cada uno de nuestro equipo. Para el front end usamos javascript vanilla en el mismo blade de Laravel. Un poco de uso de docker.</p>
                    </div>
                    <div className='descargar-cv'>
                        <a id='btn-descarga' className='btn btn-dark' href='./pdf/Maximiliano-Gomez-CV-2024.pdf' download='Maximiliano-Gomez-CV-2024.pdf'>Descargar CV</a>
                    </div>
                </div>
            </div>
            </section>
            </div>
            
            <section id="habilidades">
            <div className='separador-habilidades'></div>
                <div class="titulo" data-aos="fade-up">
                    <h2>HABILIDADES</h2>        
                </div>
                <div class="flex-container-habilidades">
                    <div data-aos="fade-right">
                        <img src="html.png" alt="ícono de un lago"/>
                        <h3>HTML 5</h3>
                </div>
                    <div>
                        <img src="css.png" alt="ícono de un hombre constructor"/>
                        <h3>CSS 3</h3>
                    </div>
                    <div data-aos="fade-left">
                        <img src="js.png" alt="ícono de una máquina constructora"/>
                        <h3>JAVASCRIPT</h3>
                    </div>
                </div>
                <div class="flex-container-habilidades">
                    <div data-aos="fade-right">
                        <img src="php.png" alt="ícono de una garantía"/>
                        <h3>PHP</h3>
                    </div>
                    <div data-aos="fade-up">
                        <img src="laravel.png" alt="ícono de una garantía"/>
                        <h3>LARAVEL</h3>
                    </div>
                    <div data-aos="fade-left">
                        <img src="bootstrap.png" alt="ícono de un ecosistema de lago con peces"/>
                        <h3>BOOTSTRAP</h3>
                    </div>
                </div>
                <div class="flex-container-habilidades">
                    <div data-aos="fade-right">
                        <img src="vue.png" alt="ícono de una garantía"/>
                        <h3>VUE</h3>
                    </div>
                    <div data-aos="fade-up">
                        <img src="react.png" alt="ícono de una garantía"/>
                        <h3>REACT</h3>
                    </div>
                    <div data-aos="fade-left">
                        <img src="mysql.png" alt="ícono de un ecosistema de lago con peces"/>
                        <h3>MYSQL</h3>
                    </div>
                </div>
            </section>
            <section className='proyectos' id='proyectos'>
            <div className='separador-proyectos'></div>
                <div class="titulo" data-aos="fade-up">
                    <h2>PROYECTOS</h2>        
                </div>
                {props.children}
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
                        <img src="logo-taste.svg" alt="Logo Taste 1"/>
                    </div>
                    <div data-aos="fade-up">
                        <img src="logo-taste-queso.svg" alt="Logo Taste 2"/>
                    </div>
                    <div data-aos="fade-left">
                        <img src="logo-taste-jamon.svg" alt="Logo Taste 3"/>
                    </div>
                </div>
                <div class="flex-container-habilidades">
                    <div data-aos="fade-right">
                        <img src="autoclases-logo.svg" alt="Logo autoclases 1"/>
                    </div>
                    <div data-aos="fade-up">
                        <img src="autoclases-logo-2.svg" alt="Logo autoclases 2"/>
                    </div>
                    <div data-aos="fade-left">
                        <img src="autoclases-logo-blanco.svg" alt="Logo autoclases 3"/>
                    </div>
                </div>
            </article>
            </section>
            <section id="contacto">
            <div className='separador-contacto'></div>
                <div class="titulo" data-aos="fade-up">
                    <h2>CONTACTO</h2>             
                </div>
                <div class="contacto container">
                    <div className='row'>
                    <div className='col-md-6'>
                        
                        <img src="contacto-img.svg" alt="" srcset="" />
                    </div>
                    <div class="contacto-form col-md-6">
                    <h3>GRACIAS POR VISITAR MI PORTFOLIO</h3>
                    <p>Me alegra que hayas llegado hasta aquí. Estaré encantado de leer tu mensaje y responder lo antes posible.</p>
                    <p>¡Espero saber de ti pronto, saludos!</p>
                            <form ref={form} onSubmit={onSubmit}>
                            <div id='success-envio' className='success-envio-oculto'>
                            El mensaje se envió correctamente
                            </div>
                            <div id='error-envio' className='error-envio-oculto'>
                            No se pudo enviar el mensaje. Hay errores en los campos ingresados, por favor revisalos. 
                            </div>
                            <div class="form-labels">
                                <div>
                                    <label htmlFor="from_name">Nombre</label>
                                    <input type="text" name="from_name" id="from_name" placeholder="Nombre" onChange={OnChangeNombre} value={nombre}/>
                                    <div id="error-nombre"></div>
                                </div>
                                <div>
                                    <label htmlFor="Asunto">Asunto</label>
                                    <input type="text" name="Asunto" id="Asunto" placeholder="Asunto" onChange={OnChangeAsunto} value={asunto}/>
                                    <div id="error-asunto"></div>
                                </div>
                            </div>
                            <div class="form-labels">
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Email" onChange={OnChangeMail} value={mail}/>
                                    <div id="error-mail"></div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message">Mensaje</label>
                                <textarea name="message" id="message" cols="30" rows="10" placeholder="Mensaje" onChange={OnChangeMensaje} value={mensaje}></textarea>
                                <div id="error-mensaje"></div>
                            </div>
                            <input type="submit" value="Enviar"/>
                        </form>
                    </div>
                    </div>
                </div>
            </section>
         </div>
    )
}

export default Content