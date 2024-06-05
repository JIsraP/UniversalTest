import React, { useState } from 'react';
import { Button, Typography, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const containerWidth = isLargeScreen ? '25vw' : isMediumScreen ? '35vw' : '50vw';

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <Grid container justifyContent='center' alignItems='center' boxShadow={2} width= { containerWidth } height='30vh' padding={5}>
            <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                    Counter
                </Typography>
                <Typography variant="h3" gutterBottom>
                    {count}
                </Typography>
            </Grid>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <Button variant="contained" color="secondary" onClick={decrement}>
                        -
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={increment}>
                        +
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};