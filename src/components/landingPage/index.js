import Img from '../../assets/logo.png'
import "./Landing.css";
import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default function App() {
  return (
    <div id='body'>
      <Header />
      <Card
        className='section'
        title='Sobre'
        description='Fundada em 2020, focada tanto na facilitação do processo de contratação para os empregadores,
                quando na alocação dos prestadores de serviços dentro de suas respectivas especialidades, abordando vários nichos.'
      />

      <Card
        className='section'
        title='Missão'
        description='Entregar soluções inteligentes para nossos clientes com excelência, de acordo com suas vontades, aceitando os mais diversos tipos de desafios.'
      />
      <ContactContainer />
    </div>
  );
}

const Header = () => {
  return (
    <div className='header'>

<img src={Img} align='center'/>
      <ButtonGroup color="inherit">
      <Link to="./login"><Button>Login</Button></Link>
      </ButtonGroup>
    </div>
  );
}







const Card = (props) => {
  return (
    <div className={props.className} >
      <div className="small-div">
        <i className={props.className}></i>
      </div>

      <div className="big-div">
        <span className='div-title'>
          {props.title}
        </span>
        <br />
        <span>
          {props.description}
        </span>
      </div>
    </div>
  )
}



const ContactContainer = () => {
  return (
    <div className='contact-container bg-grey'>
      <span className="div-title">Contate-nos</span>
      <div className='contact-form'>
        <div id='sect1'>
          <span>Contate-nos e retornaremos nas próximas 24 horas</span>
          <span>
            <i className="fas fa-map-marker-alt"></i>
                        Uberlândia MG
                    </span>
          <span>
            <i className="fas fa-mobile-alt"></i>
                        +55 34 9 9191 9191
                    </span>
          <span>
            <i className="far fa-envelope"></i>
                        autonymous@gmail.com
                    </span>
        </div>

        <div id='sect2'>
          <span>
            Contato
                    </span>

          <input type="text" placeholder="Seu endereço de email" className="input-field" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Comentário"></textarea>
          <button className="contact-btn">Enviar</button>
        </div>
      </div>
    </div>
  );

}
