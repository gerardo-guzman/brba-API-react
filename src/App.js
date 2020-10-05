import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574E 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFF;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .5s ease;
  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

const Contenedor = styled.div`
  display:flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

function App() {

  const [phrase, setPhrase] = useState({
    quote: '',
    author: ''
  });

  const consultApi = async () => {
    const result = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes').then(resp => resp.json());
    console.log(result[0])
    setPhrase(result[0]);
  }

  useEffect(() => {
    consultApi();
  }, []);
 
  return (
    <Contenedor>
      <Frase 
        phrase={phrase}
      />
      <Boton
        onClick={consultApi}
      >Obtener Frase</Boton>
    </Contenedor>
  );
}

export default App;
