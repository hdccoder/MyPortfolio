import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Slide from '@mui/material/Slide';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '1500px',
    position: 'relative',
    marginTop: '1px',
    overflow: 'hidden',
    marginLeft: '30px',
  },
  image: {
    height: 'auto',
    objectFit: 'cover',
    position: 'absolute',
    transition: 'opacity 1s ease-in-out',
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  const imagePaths = [
    "public/assets/Pic1.png",
    "public/assets/Pic2.png",
    "public/assets/Pic3.png",
    "public/assets/Pic4.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (currentImageIndex < imagePaths.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  useEffect(() => {
    if (currentImageIndex < imagePaths.length - 1) {
      const timer = setTimeout(() => {
        nextImage();
      }, 2000); // Change the delay time as needed

      return () => clearTimeout(timer);
    }
  }, [currentImageIndex, imagePaths.length]);

  return (
    <div className={classes.container}>
      {imagePaths.map((path, index) => (
        <Slide
          key={index}
          direction="down"
          in={index <= currentImageIndex}
          timeout={1000}
          style={{ transitionDelay: `${index * 0.5}s` }}
          mountOnEnter
          unmountOnExit
        >
          <img
            src={path}
            alt={`Portfolio Image ${index + 1}`}
            className={classes.image}
            style={{
              left: `${index * 25}%`,
              opacity: index <= currentImageIndex ? 1 : 0,
            }}
          />
        </Slide>
      ))}
    </div>
  );
};

export default Portfolio;