import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Card, Container, CardContent, CardMedia} from "@mui/material";




const Bio = () => {

    const navigate = useNavigate();
    
    return(
 
        <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} maxWidth="xl">
              <Typography gutterBottom variant="caption" component="span">
                <h1> Hello </h1>
              </Typography>
             HeY Yall
              <Typography variant="body2" color="text.secondary">
               
              </Typography>
             
        </Container>

    )



}

export default Bio