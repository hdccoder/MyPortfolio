import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Route, Routes } from 'react-router-dom';
// import AppHeader from './AppHeader';
// import AppFooter from './AppFooter';
import Bio from './Components/Bio';


const Home = ({ }) => {

  return (
    <Box>
      <Box sx={{ display: 'flex', minHeight: "100vh" }}>
        
        {/* <AppHeader/> */}
        <Box
        //   component="main"
        //   sx={{
        //     backgroundColor: (theme) =>
        //       theme.palette.mode === 'light'
        //         ? theme.palette.grey[100]
        //         : theme.palette.grey[900],
        //     flexGrow: 1,
        //     // height: '100vh',
        //     overflow: 'auto',
        //     paddingTop: '5rem'
        //   }}
        >

          <Container>
            <Routes>
                <Route>
                <Route path="/" element={<Bio />} />
                </Route>
            </Routes>
          </Container>
        </Box>
      </Box>
      {/* <AppFooter /> */}
    </Box >
  );
}

export default Home