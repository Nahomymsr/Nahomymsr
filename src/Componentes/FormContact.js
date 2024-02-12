import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Prueba from './Prueba';
import { useState } from 'react';





export const FormContact = () => {

    
   
    const [userRequest, setUserRequest] = useState({
        active: false,
        type: "danger",
        mensaje: "ops",
        titulo:"Error",
        cssClass:"slide-in-top"
      });
    
    const { active, type, mensaje, titulo, cssClass } = userRequest;
   
    const form = useRef();
   

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g7pqppq', 'template_i2ae9j6', form.current, {
        publicKey: '4ElJsHdqbvQagUtMy',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset()
          setUserRequest({
            active: true,
            type:"success",
            mensaje: "El mensaje se ha enviado con exito",
            titulo:"Exito",
            cssClass:"slide-in-top"
          })

          setTimeout(() => {
            setUserRequest({
              active: false,
            
            });
          }, "2000");


         
          
          
        },
        (error) => {
          console.log('FAILED...', error.text);
          setUserRequest({
            active: true,
            type:"danger",
            mensaje: "Ha ocurrido un error",
            titulo:"Error"
          })

          setTimeout(() => {
            setUserRequest({
              active: false,
            
            });
          }, "2000");

          
        },
      );

     
    }


    
    return <div>
             <div className="container mt-5 text-center" id="Contacto">
                <h6 className="section-title mb-4 fw-bold" style={{fontSize:'65px',color:'#FF8882'}}>Contacto</h6>
                <div className="contact text-left"> 
                    <div className="form">
                      <Prueba Active={active} Type={type} mensaje={mensaje} titulo={titulo} cssClass={cssClass}></Prueba>
                        <h6 className="subtitle">Disponible 24/7</h6>
                        <h6 className="section-title mb-4">Contáctame</h6>
                        <form ref={form} onSubmit={sendEmail}>
                        <div className="form-group">
                                <input type="text" className="form-control" name="user_name"  id="exampleInputPassword1" placeholder="Nombre" required></input>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" name="user_email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu correo" required></input>
                            </div>
            
                            <div className="form-group">
                                <textarea name="message" id="" cols="30" rows="5" className="form-control" placeholder="Mensaje"></textarea>
                            </div>
                            <button type="submit" onClick={()=> sendEmail} className="btn btn-primary btn-block rounded w-lg">Enviar mensaje</button>
                        </form>
                    </div>
                    <div className="contact-infos">
                        <div className="item">
                            <i className="ti-location-pin"></i>
                            <div className="">
                                <h5>Ubicación</h5>
                                <p>Venezuela</p>
                            </div>                          
                        </div>
                        <div className="item">
                            <i className="ti-mobile"></i>
                            <div>
                                <h5>Teléfono</h5>
                                <p>(+58) 0412-9296922</p>
                            </div>                          
                        </div>
                        <div className="item">
                            <i className="ti-email"></i>
                            <div className="mb-0">
                                <h5>Correo</h5>
                                <p>Nahomysalazar15@gmail.com</p>
                            </div>
                        </div>
                    </div>                  
                </div>
            </div>  
    
    </div>
    
    }