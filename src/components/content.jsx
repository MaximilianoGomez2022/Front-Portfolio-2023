import './bootstrap.min.css'
import './styles.css'
import 'animate.css'

import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import {useState} from 'react'

import Banner from './banner';
import Pastillas from './pastillas';
import Proyectos from './proyectos';
import Habilidades from './habilidades';
import Sobremi from './sobremi';
import Contacto from './contacto';

function Content(props){

    return (
        <div className="Content">
            <Banner></Banner>
            <Pastillas></Pastillas>
            <Habilidades></Habilidades>
            <Proyectos></Proyectos>
            <Sobremi></Sobremi>
            <Contacto></Contacto> 
         </div>
    )
}

export default Content