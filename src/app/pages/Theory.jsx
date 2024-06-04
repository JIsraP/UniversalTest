import React, { useState } from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavBar } from '../components';

export const Theory = () => {

  const [selectedAccordion, setSelectedAccordion] = useState(null);

  const pages = [
    { name: 'Teoría', route: '/theory' },
    { name: 'Práctica 1', route: '/practice1' },
    { name: 'Práctica 2', route: '/practice2' },
  ];

  const questions = [
    { index: 1, question: '¿Qué es React y cómo funciona?' },
    { index: 2, question: '¿Qué es JSX?' },
    { index: 3, question: '¿Qué es un componente de React?' },
    { index: 4, question: '¿Qué es el estado en React?' },
    { index: 5, question: '¿Qué es un ciclo de vida de un componente en React?' }
  ];

  const answers = [
    'React es una biblioteca de JavaScript para construir interfaces de usuario. Funciona mediante la creación de una representación virtual del DOM, llamada Virtual DOM, y actualiza eficientemente el DOM real solo cuando es necesario.',
    'JSX es una extensión de la sintaxis de JavaScript que permite escribir código que se parece a HTML. JSX se utiliza en React para describir cómo debería verse la UI.',
    'Un componente de React es una pieza reutilizable de código que define cómo una parte de la UI debería verse y comportarse. Los componentes pueden ser clases o funciones.',
    'El estado en React es un objeto que determina cómo se renderiza y se comporta un componente. El estado puede cambiar con el tiempo, generalmente en respuesta a la entrada del usuario.',
    'El ciclo de vida de un componente en React se refiere a las diferentes fases por las que pasa un componente desde que se monta en el DOM hasta que se desmonta. Las fases principales son montaje, actualización y desmontaje.'
  ];

  return (
    <Grid container alignItems="center" justifyContent="center" height='100vh'>
      <NavBar pages={pages} />
      <Grid item xs={10} md={6} width='100%'>
        {questions.map((item, index) => (
          <Accordion
            key={item.index}
            sx={{ backgroundColor: index === selectedAccordion ? 'primary.main' : 'transparent' }}
            expanded={selectedAccordion === index}
            onChange={() => setSelectedAccordion(index === selectedAccordion ? null : index)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color: index === selectedAccordion ? 'App.white' : 'App.gray'}}/>}>
              <Typography sx={{ color: index === selectedAccordion ? 'App.white' : 'primary.main', fontWeight: 'bold', textAlign: 'justify' }}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ textAlign: 'justify', color: 'App.white' }}>
                {answers[index]}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </Grid>
  );
};