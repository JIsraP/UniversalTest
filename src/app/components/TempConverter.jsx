import React, { useState } from 'react';
import { Container, TextField, Grid, Typography, Box, IconButton } from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

export const TempConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
    const [isSwapped, setIsSwapped] = useState(false);

    const handleCelsiusChange = (event) => {
        const value = event.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setCelsius(value);
            if (value === '') {
                setFahrenheit('');
            } else {
                const fahrenheitValue = (parseFloat(value) * 9 / 5) + 32;
                setFahrenheit(fahrenheitValue.toFixed(2));
            }
        }
    };

    const handleFahrenheitChange = (event) => {
        const value = event.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setFahrenheit(value);
            if (value === '') {
                setCelsius('');
            } else {
                const celsiusValue = (parseFloat(value) - 32) * 5 / 9;
                setCelsius(celsiusValue.toFixed(2));
            }
        }
    };

    const handleSwap = () => {
        setIsSwapped(!isSwapped);
    };

    return (
        <Container maxWidth="sm">
            <Box boxShadow={2} padding={5}>
                <Typography variant="h6">
                    Temperature Converter
                </Typography>
                <Grid container spacing={2} alignItems="center" marginTop={2}>
                    {isSwapped ? (
                        <>
                            <Grid item xs={5}>
                                <TextField
                                    label="Fahrenheit"
                                    variant="outlined"
                                    fullWidth
                                    value={fahrenheit}
                                    onChange={handleFahrenheitChange}
                                />
                            </Grid>
                            <Grid item xs={2} style={{ textAlign: 'center' }}>
                                <IconButton onClick={handleSwap}>
                                    <SwapHorizIcon sx={{ color: 'primary.main' }} />
                                </IconButton>
                            </Grid>
                            <Grid item xs={5}>
                                <TextField
                                    label="Celsius"
                                    variant="outlined"
                                    fullWidth
                                    value={celsius}
                                    onChange={handleCelsiusChange}
                                />
                            </Grid>
                        </>
                    ) : (
                        <>
                            <Grid item xs={5}>
                                <TextField
                                    label="Celsius"
                                    variant="outlined"
                                    fullWidth
                                    value={celsius}
                                    onChange={handleCelsiusChange}
                                />
                            </Grid>
                            <Grid item xs={2} style={{ textAlign: 'center' }}>
                                <IconButton onClick={handleSwap}>
                                    <SwapHorizIcon sx={{ color: 'primary.main' }} />
                                </IconButton>
                            </Grid>
                            <Grid item xs={5}>
                                <TextField
                                    label="Fahrenheit"
                                    variant="outlined"
                                    fullWidth
                                    value={fahrenheit}
                                    onChange={handleFahrenheitChange}
                                />
                            </Grid>
                        </>
                    )}
                </Grid>
            </Box>
        </Container>
    );
};