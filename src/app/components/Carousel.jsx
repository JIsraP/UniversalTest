import React, { useState } from 'react';
import { Container, Grid, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const getPrevIndex = (index) => (index - 1 + images.length) % images.length;
  const getNextIndex = (index) => (index + 1) % images.length;

  return (
    <Container maxWidth="md">
      <Grid container alignItems="center" justifyContent='center' width='100%'>
        <Grid item xs={1}>
          <IconButton onClick={handlePrev}>
            <ArrowBackIosIcon sx={{ color: 'primary.main', fontSize: '25px' }} />
          </IconButton>
        </Grid>
        <Grid item xs={3}>
          <img
            src={images[getPrevIndex(currentIndex)]}
            alt={`carousel-prev`}
            onClick={handlePrev}
            style={{ width: '100%', maxHeight: '400px', borderRadius: '10px', opacity: 0.5 }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={images[currentIndex]}
            alt={`carousel-current`}
            style={{ maxWidth: '100%', maxHeight: '450px', borderRadius: '10px' }}
          />
        </Grid>
        <Grid item xs={3}>
          <img
            src={images[getNextIndex(currentIndex)]}
            alt={`carousel-next`}
            onClick={handleNext}
            style={{ width: '100%', maxHeight: '400px', borderRadius: '10px', opacity: 0.5 }}
          />
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={handleNext}>
            <ArrowForwardIosIcon sx={{ color: "primary.main", fontSize: '25px' }} />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};