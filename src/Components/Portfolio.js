import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  // Array of image paths
  const imagePaths = [
    "public/assets/Pic1.png",
    "public/assets/Pic2.png",
    "public/assets/Pic3.png",
    "public/assets/Pic4.png"
  ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to advance to the next image
  const nextImage = () => {
    if (currentImageIndex < imagePaths.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  // useEffect hook to automatically advance to the next image after a delay
  useEffect(() => {
    // Check if there are more images to display
    if (currentImageIndex < imagePaths.length - 1) {
      const timer = setTimeout(() => {
        nextImage();
      }, 1000); // Change the delay time as needed (2000 milliseconds = 2 seconds)

      // Clear the timer when the component unmounts or when the current image index changes
      return () => clearTimeout(timer);
    }
  }, [currentImageIndex, imagePaths.length]); // Depend on currentImageIndex and imagePaths.length

  // Spacing factor between images
  const spacingFactor = 0; // Adjust as needed to control spacing

  // Constant width for each image
  const imageWidth = '25%'; // Adjust as needed

  // Width between each image
  const imageSpacing = '-4%'; // Adjust as needed

  // Calculate the total width of all images
  const totalWidth = `calc(${imagePaths.length} * (${imageWidth} + ${imageSpacing}))`;

  return (
    <div style={{ height: '1500px', position: 'relative', marginTop: '1px', overflow: 'hidden', marginLeft: '30px', }}>
      {imagePaths.map((path, index) => (
        <img
          key={index}
          src={path}
          alt={`Portfolio Image ${index + 1}`}
          style={{
            width: imageWidth, // Use constant width for each image
            height: 'auto', // Allow height to adjust automatically
            objectFit: 'cover',
            position: 'absolute',
            top: index * spacingFactor + '0px', // Adjust top position for dropping effect
            left: `calc(${index} * (${imageWidth} + ${imageSpacing}))`, // Adjust left position for spacing
            transition: 'top 0.5s ease-in-out', // Apply transition effect for dropping down
            opacity: index <= currentImageIndex ? 1 : 0, // Control opacity to hide images that have not yet dropped
          }}
        />
      ))}
      {/* Set the width of the container to ensure Pic 4 is fully visible */}
      <div style={{ width: totalWidth }} />
    </div>
  );
};

export default Portfolio;