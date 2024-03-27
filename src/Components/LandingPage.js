import React, { useState } from 'react';
import { Container, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const [showMainPage, setShowMainPage] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setShowMainPage(true);
    navigate('/home');
  };

  return (
    <Container style={{ height: '100vh', overflow: 'hidden' }}>
      <Grid container spacing={0} style={{ height: '100%' }}>
        <Grid item xs={6} style={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: showMainPage ? '-100%' : 0 }}
            transition={{ duration: 0.5 }}
            style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}
          >
            <img
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              alt="First Half"
              src="/public/assets/Greeting1.jpg"
            />
          </motion.div>
        </Grid>
        <Grid item xs={6} style={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: showMainPage ? '100%' : 0 }}
            transition={{ duration: 0.5 }}
            style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}
          >
            <img
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              alt="Second Half"
              src="/public/assets/Greeting2.jpg"
            />
          </motion.div>
        </Grid>
        {showMainPage ? null : (
          <Grid item xs={12} style={{ position: 'absolute', top: '75%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 100 }}>
            <Button onClick={handleButtonClick} variant="contained" style={{ backgroundColor: '#f3dfd7', color: 'black' }}>
              Click to Reveal Home
            </Button>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default LandingPage;