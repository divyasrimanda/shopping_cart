import { Typography, Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import React from 'react';
import './style.css';


function TopItems() {
  return (
    <Grid container>
    <Grid item xs={12}>
    <Typography className='Top-Big-Text'>Top Items</Typography>
    <Typography className='Top-Desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
    </Grid>
    <Grid container>
    <Grid item xs={4} className='Top-Display'>
    <Card className='Top-Card'>
      <CardContent>
        <Button className='Sale-Btn'>Sale</Button>
        <Typography  className='Top-Text'>
        Tracksuit Hyped
        </Typography>
        <Typography className='Top-SubText'>
        Apple Cherry
        </Typography>
        <Typography className='Top-price'>
        <span className='Price-One'>$ 384</span> $454
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid item xs={4} className='Top-Display'>
    <Card className='Top-Card'>
      <CardContent>
      <Button className='Sale-Btn'>Sale</Button>
      <Typography  className='Top-Text'>
        Tracksuit Hyped
        </Typography>
      <Typography className='Top-SubText'>
        Apple Cherry
        </Typography>
        <Typography className='Top-price'>
        <span className='Price-One'>$ 384</span> $454
        </Typography>
        </CardContent>
    </Card>
    </Grid>

    <Grid item xs={4} className='Top-Display'>
    <Card className='Top-Card'>
      <CardContent>
      <Button className='Sale-Btn'>Sale</Button>
      <Typography  className='Top-Text'>
        Tracksuit Hyped
        </Typography>
      
      <Typography className='Top-SubText'>
        Apple Cherry
        </Typography>
        <Typography className='Top-price'>
        <span className='Price-One'>$ 384</span> $454
        </Typography>
        </CardContent>
    </Card>
    </Grid>
    </Grid>
    </Grid>
    
  )
}

export default TopItems