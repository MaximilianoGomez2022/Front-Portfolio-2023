import { useState, useEffect, useRef } from "react"


function Contacto () {

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

    return(
        <section id="contacto">
            <div className='separador-contacto'></div>
                <div class="titulo" data-aos="fade-up">
                    <h2>CONTACTO</h2>             
                </div>
                <div class="contacto container">
                    <div class="contacto-form">
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
            </section>
    )

}

export default Contacto