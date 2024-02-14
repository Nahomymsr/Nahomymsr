import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-bootstrap';
import { FormContact} from './Componentes/FormContact'
import { Phone } from 'react-bootstrap-icons';
import resume from './images/CV120224.pdf';
import { useState, useEffect } from 'react';





function App() {

  const [Show, setShow] = useState(false)

    function handleClick(){
        setShow (Show => !Show);
        console.log("entro");
    }

    let classCheck = Show ? 'collapse navbar-collapse show' :'collapse navbar-collapse';
    
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" data-spy="affix" data-offset-top="0">
        <div className="container">
        <a class="navbar-brand" href="#">
            <img src="assets/imgs/logonahomy.png" alt="Bootstrap" width="40" height="50"></img>
        </a>
            <a className="navbar-brand" src="assets/imgs/logonahomy.png"></a>
            <button className="navbar-toggler" type="button" onClick={()=> handleClick()} data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            

            <div className={classCheck} id="navbarSupportedContent">
                
                <ul className="navbar-nav ml-auto align-items-center">
                    <li className="nav-item">
                        <a className="nav-link" href="#home">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">Acerca de mí</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skills">Habilidades</a>
                    </li>                   
                   
                    
                    <li className="nav-item">
                    
                    <a  href="#Contacto" type="button" class="btn btn-outline-primary pl-3 font-weight-bold"><Phone></Phone> Contáctame</a>
                    </li>
                </ul>
            </div>
        </div>          
    </nav>
    <header className="header" style={{ marginTop:'150PX',height:'AUTO',minHeight:'fit-content'}} id="home">
    <div className="container d-block d-sm-flex mb-5">
            <div className="img-holder d-block d-sm-none " style={{alignContent: 'center', height:'50%'}}>
                <img src="assets/imgs/nahomycari.png" alt=""></img>
            </div>   
            <div className="infos mt-5">
                <h6 className="subtitle d-flex justify-content-center d-sm-block">Hola,soy</h6>
                <h6 className="title letra d-flex justify-content-center d-sm-block mb-3">Nahomy Salazar</h6>
                <p className='d-flex text-center text-sm-start justify-content-center d-sm-block'>Frontend Web Developer | Ingeniero Industrial</p>

                <div className="buttons pt-3 d-flex justify-content-center d-sm-block">
                    <button className="btn btn-primary ">INFO</button>
                    <a href={resume} download="CV120224" className="btn btn-dark ">DESCARGA CV</a>
                </div>      

                <div className="socials mt-4 justify-content-center justify-content-sm-start ">
                    <a className="social-item" href="https://github.com/Nahomymsr"><i className="ti-github"></i></a>
                    <a className="social-item"href="https://www.linkedin.com/in/nahomy-salazar-37886a119/"><i className="ti-linkedin"></i></a>
                </div>
            </div>              
            <div className="img-holder d-none d-sm-grid " style={{alignContent: 'center'}}>
                <img className="pb-5 ancho-img" src="assets/imgs/nahomycari.png" alt=""></img>
            </div>      
        </div>      

       
        
    </header>
    <section id="about" className="section mt-3 p-3">
        <div className="container mt-5">
            <div className=" text-center text-md-left">
                <div className="pl-md-4 ">
                   
                    <div className='row'>
                        <div className='col-0 col-xl-4 '>
                            <img src="assets/imgs/desarrollo.png" className='d-none d-xl-block' style={{maxHeight:'400px',maxWidth:'400px'}}></img>
                        </div>

                        <div className="col-12 col-xl-8"  >
                            <div className='d-flex justify-content-center'>
                                <h6 class=" d-flex letra justify-content-center d-sm-block mb-3 fw-bold" style={{fontSize:'65px',color:'#FF8882'}}>Acerca de mí</h6>
                            </div>
                            <div className='pl-1 pr-1 pl-xl-5 pr-xl-5'>
                            <p  className='parraf'>Ingeniero Industrial mención honorífica Cumlaude. 
2 años de experiencia en el desarrollo de aplicaciones web en el entorno de .NET, con el uso de Blazor.
Actualmente capacitandome con el framework de React Js.
Me caracterizo por ser una persona responsable, creativa, con facilidad de aprendizaje  y adaptacion, siempre dispuesta a trabajar en equipo.
</p>
                            </div>
                            

                        </div>
                   
                    
                    </div>
                    
                                 
                </div>
            </div>
        </div>
    </section>


    <section className="section mt-5 p-3">
    <div className="container text-center">
    <h6 className="section-title mb-4 fw-bold" id="skills">Habilidades</h6>
            <Accordion>
                <AccordionItem eventKey="0">
                    <AccordionHeader> MOSTRAR HABILIDADES </AccordionHeader>
                        <AccordionBody>
                        <div className="row text-left">
            <div className="col-sm-6">
                    <h6 className="mb-3">HTML | CSS </h6>
                    <div className="progress">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '90%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>90%</span></div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <h6 className="mb-3">React Js</h6>
                    <div className="progress">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '40%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>83%</span></div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <h6 className="mb-3">Blazor </h6>
                    <div className="progress">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>95%</span></div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <h6 className="mb-3">Javascript </h6>
                    <div className="progress">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>95%</span></div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <h6 className="mb-3">SQL</h6>
                    <div className="progress">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>95%</span></div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <h6 className="mb-3">C#</h6>
                    <div className="progress">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>95%</span></div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <h6 className="mb-3">Python</h6>
                    <div className="progress">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '65%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>95%</span></div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <h6 className="mb-3">ASP.NET CORE</h6>
                    <div className="progress">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>95%</span></div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <h6 className="mb-3">SAP</h6>
                    <div className="progress">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>95%</span></div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <h6 className="mb-3">Ingles C1</h6>
                    <div className="progress">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>95%</span></div>
                    </div>
                </div>
            </div>
                        </AccordionBody> 
                </AccordionItem>
            </Accordion>
          
              
        </div>
      </section>

     <FormContact>
     </FormContact>

    </div>
  );
}

export default App;
