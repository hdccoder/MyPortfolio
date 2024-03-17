import React, { useState, useEffect } from 'react';
import { Container, Box, Slide, Typography } from '@mui/material';

const Bio = () => {
  const [showSecondPic, setShowSecondPic] = useState(false);

  useEffect(() => {
    // Set a timeout to show the second picture after a few seconds
    const timer = setTimeout(() => {
      setShowSecondPic(true);
    }, 1000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container maxWidth="xl" sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      <Box sx={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        <img src="public/assets/BioBg.png" alt="Bio Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <Typography
          variant="body1"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '75%',
            width: '40%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: '#000', // Change text color to black
            zIndex: 1,
            fontSize: '19', // Increase font size
          }}
        >
          Hi there, my name is Heather Lockett, and I'm an artist and web developer. I have a great passion for art, and I love working with Photoshop to create stunning designs. My artistic flair and attention to detail are evident in my work, which always stands out from the crowd.
          <br /><br />
          I'm also a certified full-stack web developer, and I'm always eager to learn new tools and techniques to stay up-to-date with the ever-changing world of web development. I find coding to be a fascinating and exciting process, and I enjoy creating new, innovative spaces on the internet.
          <br /><br />
          Although I am new to coding, I have achieved a full-stack certificate, which is a testament to my dedication and hard work. I'm excited to see where my career in web development takes me, and I'm always looking for new challenges to further improve my skills.
          <br /><br />
          In my free time, I love reading books and watching movies. I also enjoy traveling and exploring new places, which I find to be a great source of inspiration for my art and web development projects.
        </Typography>
        <Slide direction="right" in={showSecondPic} timeout={1000}>
          <img
            src="public/assets/BioPiclayer2.png"
            alt="Bio Pic Layer 2"
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '50%', // Adjust the width to make it smaller
              height: 'auto', // Maintain aspect ratio
              objectFit: 'cover',
            }}
          />
        </Slide>
      </Box>
    </Container>
  );
};

export default Bio;