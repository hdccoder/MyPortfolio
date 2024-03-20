import React from 'react';
import { Slide } from '@mui/material';

const Portfolio = () => {
  return (
    <div style={{ height: '2000px', position: 'relative', marginTop: '1px' }}> {/* Adjust marginTop to create space for the AppHeader */}
      <Slide direction="down" in={true} timeout={900}>
        <img
          src="public/assets/PORTFOLIOPG1.png"
          alt="Portfolio Image"
          style={{
            width: '90%', // Adjust width to make the image smaller
            height: 'auto', // Allow height to adjust automatically
            objectFit: 'cover',
            position: 'relative', // Change position to relative
            left: '5%', // Adjust left position to move the image slightly to the right
            transform: 'translateX(-50%)',
          }}
        />
      </Slide>
    </div>
  );
};
 
export default Portfolio;
