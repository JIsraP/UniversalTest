import { Box, Grid, Link } from '@mui/material'
import React, { useState } from 'react'
import { Carousel, Counter, NavBar, TempConverter, ToDo } from '../components'
import { Link as RouterLink } from 'react-router-dom';


export const Practice1 = () => {

    const [view, setView] = useState('to-do');

    const pages = [
        { name: 'Teoría', route: '/theory' },
        { name: 'Práctica 1', route: '/practice1' },
        { name: 'Práctica 2', route: '/practice2' },
    ];

    const images = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg']

    const ToDoView = () => (
        <Grid item xs={12} align='center'>
            <ToDo />
        </Grid>
    );

    const CounterView = () => (
        <Grid item xs={12} align='center'>
            <Counter />
        </Grid>
    );

    const TempConverterView = () => (
        <Grid item xs={12} align='center'>
            <TempConverter />
        </Grid>
    );

    const CarouselView = () => (
        <Grid item xs={12} align='center'>
            <Carousel images={images} />
        </Grid>
    );

    return (
        <Box sx={{ width: '100%', position: 'relative' }}>

            <NavBar pages={pages} />

            <Box sx={{
                position: 'fixed',
                top: '15vh',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'row',
                gap: 5,
                width: '100%',
                justifyContent: 'center'
            }}>
                <Link
                    component={RouterLink}
                    underline="none"
                    sx={{
                        color: view === 'to-do' ? 'secondary.main' : 'App.black',
                        borderBottom: view === 'to-do' ? '2px solid' : 'none',
                        textDecoration: 'none',
                        '&:hover': {
                            color: view === 'to-do' ? 'secondary.main' : 'App.black',
                        },
                    }}
                    onClick={() => setView('to-do')}
                >
                    To Do
                </Link>
                <Link
                    component={RouterLink}
                    underline="none"
                    sx={{
                        color: view === 'counter' ? 'secondary.main' : 'App.black',
                        borderBottom: view === 'counter' ? '2px solid' : 'none',
                        textDecoration: 'none',
                        '&:hover': {
                            color: view === 'counter' ? 'secondary.main' : 'App.black',
                        },
                    }}
                    onClick={() => setView('counter')}
                >
                    Counter
                </Link>
                <Link
                    component={RouterLink}
                    underline="none"
                    sx={{
                        color: view === 'temp-converter' ? 'secondary.main' : 'App.black',
                        borderBottom: view === 'temp-converter' ? '2px solid' : 'none',
                        textDecoration: 'none',
                        '&:hover': {
                            color: view === 'temp-converter' ? 'secondary.main' : 'App.black',
                        },
                    }}
                    onClick={() => setView('temp-converter')}
                >
                    Temperature Converter
                </Link>
                <Link
                    component={RouterLink}
                    underline="none"
                    sx={{
                        color: view === 'carousel' ? 'secondary.main' : 'App.black',
                        borderBottom: view === 'carousel' ? '2px solid' : 'none',
                        textDecoration: 'none',
                        '&:hover': {
                            color: view === 'carousel' ? 'secondary.main' : 'App.black',
                        },
                    }}
                    onClick={() => setView('carousel')}
                >
                    Carousel
                </Link>
            </Box>

            <Grid container justifyContent="center" alignItems='center' height='65vh' width='100vw' sx={{
                marginTop: 20,
                overflow: 'auto',
                '&::-webkit-scrollbar': {
                    width: '8px',
                },
                '&::-webkit-scrollbar-track': {
                    backgroundColor: 'App.grey',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: "secondary.main",
                    borderRadius: '10px',
                },
            }}>
                {view === 'to-do' ? <ToDoView /> : view === 'counter' ? <CounterView /> : view === 'temp-converter' ? <TempConverterView /> : view === 'carousel' ? <CarouselView /> : ''}
            </Grid>
        </Box>
    )
}