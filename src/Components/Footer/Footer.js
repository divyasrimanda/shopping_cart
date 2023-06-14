import { Copyright } from '@mui/icons-material'
import { Card, Grid, Typography, CardContent, Button } from '@mui/material'
import React from 'react'
import './style.css';


function Footer() {
  return (
    <Grid container className='Footer-Container'>
    <Grid item xs={4}>
    <Card className='Footer-Card'>
    <CardContent></CardContent>
    </Card>
    </Grid>
    <Grid item xs={1}></Grid>
    <Grid item xs={3}>
        <Typography className="Label">Dealerz.</Typography>
        <Typography className='Privacy-Text'>Privacy Policy</Typography>
        <Typography className='Term-Text'>Terms and Condition</Typography>
        <Typography className='CopyWrite'>
        <span className='Copyright-Dsiplay'><Copyright />
      2020 TahanAir Studio.All rights reserved
      </span>
      </Typography>
    </Grid>
    <Grid item xs={4} className='Footer-links'>
    <Button className='Link-Btn'>Yt</Button>
    <Button className='Link-Btn'>Fb</Button>
    <Button className='Link-Btn'>Tw</Button>
    <Button className='Link-Btn'>Ig</Button>
    </Grid>
    </Grid>
  )
}

export default Footer