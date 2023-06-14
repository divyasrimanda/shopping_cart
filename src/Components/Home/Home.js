import { Typography, Grid, Button } from '@mui/material';
import './style.css';
import React from 'react'
import Collection from './Collection';
import Story from './Story';
import Footer from '../Footer/Footer';
import CircleIcon from '@mui/icons-material/Circle';
import LooksIcon from '@mui/icons-material/Looks';
import TopItems from './TopItems';

const HomeComponent = ({bigTitle, smallTitle, desc, findBtnText}) => {
  return (
    <Grid container marginTop="8em">
    <Grid item xs={6}>
     <LooksIcon className='Circle2'/>
      <CircleIcon className='Circle1'/>
    </Grid>
    <Grid item xs={6}>
        <Typography className='Home-Big-Text'>{bigTitle}</Typography>
        <LooksIcon className='Circle5'/> 
        <Typography className='Home-Small-Text'>{smallTitle}</Typography>
        <Typography className='Home-Desc'>{desc}</Typography>
        <CircleIcon className='Circle6'/>
        <CircleIcon className='Circle4'/>
        <Button className='findBtn'>{findBtnText}</Button>
        <LooksIcon className='Circle3'/> 
    </Grid>
    
    <Collection />
    <TopItems />
    <Story />
    <Footer />
    </Grid>
  )
}

export default HomeComponent;