import React, { useState } from 'react';
import { Button, Typography, Grid, Box, Container } from '@mui/material';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if(count > 0){
            setCount(count - 1);
        }
    };

    return (
        <Container maxWidth="xs">
            <Box boxShadow={2} padding={5}>
                <Grid>
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
            </Box>
        </Container>
    );
};