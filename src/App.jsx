import React, {useState} from 'react';
import './index.css';


//components import
import Header from './components/Header';
import Form from './components/Form';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';

import styled from '@emotion/styled';


const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  backdrop-filter: blur(5px) saturate(132%);
    -webkit-backdrop-filter: blur(5px) saturate(132%);
    background-color: rgba(17, 25, 40, 0.42);
    border: 1px solid rgba(255, 255, 255, 0.125);

    padding: 3rem;
`;


const App = () =>{

  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos:{
      marca: "",
      year: "",
      plan: ""
    }
  });

  //data extract
  const {cotizacion, datos} = resumen;


  return(
    <Container>
      <Header
        titulo="Cotizador de seguros"
      />

      <FormContainer>
        <Form 
          guardarResumen={guardarResumen}
        />

        <Resumen
          datos={datos}
        />

        <Resultado
          cotizacion={cotizacion}
        />
      </FormContainer>
    </Container>
  );
}


export default App;