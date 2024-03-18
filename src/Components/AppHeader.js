import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    width: '2.5in', // Set the width to 1.5 inches
    height: '1.9in', // Set the height to 1 inch
    marginTop: '35',
    marginLeft: '-71',
  },
  title: {
    flexGrow: 1,
  },
}));

function AppHeader() {
  const classes = useStyles();
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const handleNavigation = (destination) => {
    navigate(destination); // Navigate to the specified destination
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ height: '78px' }}> {/* Set the height of the AppBar */}
        <Toolbar>
          {/* Logo */}
          <Box className={classes.title}>
            <img src="/public/assets/PORTLOGO.png" alt="My Portfolio Logo" className={classes.logo} />
          </Box>
          {/* Navigation buttons */}
          <Button color="inherit" onClick={() => handleNavigation('/home')}>Home</Button>
          <Button color="inherit" onClick={() => handleNavigation('/bio')}>Bio</Button>
          <Button color="inherit" onClick={() => handleNavigation('/resume')}>Resume</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppHeader;