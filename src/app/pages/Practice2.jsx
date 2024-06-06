import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { APICall, NavBar } from '../components';

export const Practice2 = () => {

    const pages = [
        { name: 'Teoría', route: '/theory' },
        { name: 'Práctica 1', route: '/practice1' },
        { name: 'Práctica 2', route: '/practice2' },
    ];

    return (
        <Grid container justifyContent='center' alignItems='center'>
            <NavBar pages={pages} />

            <Grid item xs={12} marginTop='15vh' >
                <APICall />
            </Grid>
        </Grid>
    )
}