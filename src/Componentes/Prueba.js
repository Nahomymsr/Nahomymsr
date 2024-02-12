import Alert from 'react-bootstrap/Alert';
import './Prueba.css';
import { SwitchTransition, Transition } from 'react-transition-group';


function Prueba({Active,Type, mensaje, titulo, cssClass}) {
    return (

        <section className='position-absolute'style={{margin:'60px'}} >
        {Active ? (
               
              <Alert className='slide-in-top' variant={Type} mensaje={mensaje} titulo={titulo}>
                 <Alert.Heading>{titulo}</Alert.Heading>
                     <p>{mensaje}</p>
              </Alert>
          
       ) : <div></div>}
      
      </section>
        
      );
  

  }

  export default Prueba;