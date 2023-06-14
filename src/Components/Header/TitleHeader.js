import React from 'react'
import { Typography,Grid } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import './style.css'




 const TitleHeader = (props) =>{
  return (
    <>
    <Grid container className='Title_header'>
    <Grid item lg={8} className="Title">
    <Typography className='Header-Title-Styles'>Dealerz.</Typography>
    </Grid>
    <Grid item lg={3} className='Toll-Free-Details'>
    <span className='Toll-Free-Details'>
    <PhoneIcon /> 
    <Typography marginLeft={2}>Call Center</Typography>
    </span>
    <span className='Toll-Free-Details'>
    <LocalShippingIcon /> 
    <Typography marginLeft={2}>Shipping & Return</Typography>   
     </span>
    </Grid>
    </Grid>
    </>
  )
}

export default TitleHeader;