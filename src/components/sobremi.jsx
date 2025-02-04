function Sobremi() {

    return(
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
                <p>Empresa <b>FIXEAR</b>, como desarrollador front-end modificando un proyecto ya hecho, cambiando funcionalidad y diseños usando el framework Vue.js. Uso de gitlab para las versiones del proyecto y comandos desde la terminal para ubicar el proyecto en el servidor.</p>
                <p><b>ACQ IT</b> Usando Laravel para el backend, modificando funcionalidades del sistema interno de la empresa basado en una ticketera de tareas y peticiones de los clientes. Uso de Teams, outlook, Microsoft SQL server para ver las bases de datos. Gitlab para las versiones del proyecto y las ramas de cada uno de nuestro equipo. Para el front end usamos javascript vanilla en el mismo blade de Laravel. Un poco de uso de docker.</p>
                </div>
                <div className='descargar-cv'>
                    <a id='btn-descarga' className='btn btn-dark' href='./pdf/Maximiliano-Gomez-CV-2024.pdf' download='Maximiliano-Gomez-CV-2024.pdf'>Descargar CV</a>
                </div>
            </div>
        </div>
        </section>
        </div>
    )

}

export default Sobremi