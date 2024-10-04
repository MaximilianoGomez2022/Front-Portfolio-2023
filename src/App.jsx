import HomePage from '../pages/HomePage'
import {Routes, Route} from 'react-router-dom'
import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer'


function App(){

  return  <>
        <Header>
        <header className='header'>
            <div className='header-container'>
            <div class="logo">
                <a href="/" id="logo">Fish & Lakes</a>
            </div>
            <nav id="menu">
                <ul id="hamburguesa">
                    <li><a href="#menu">abrir</a></li>
                    <li><a href="#">cerrar</a></li>
                </ul>
                <ul id="barra">
                <li><a href="#sobremi-section">SOBRE MI</a></li>
                    <li><a href="#habilidades">HABILIDADES</a></li>
                    <li><a href="#proyectos">PROYECTOS</a></li>
                    <li><a href="#contacto">CONTACTO</a></li>
                </ul>
            </nav>
            </div>
          </header>
        </Header>
        
        <Content>
          <Routes>

          <Route path='/' element={<HomePage/>}></Route>

          <Route path='/*' element={<h1>Error 404</h1>}></Route>
          </Routes>
          </Content>

          <Footer>
          <footer className='footer'>Maximiliano Gomez 2023 &copy; Todos los derechos reservados</footer>
          </Footer>
          </>
}

export default App
