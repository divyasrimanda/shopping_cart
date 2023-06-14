import { CardContent, Grid, Typography, Card, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from 'react'

function Seller() {
  return (
    <>
     <Button className='Left-Arrow-Btn'><ArrowBackIosIcon /></Button>
    <Card container className='Seller-Container'>
         <Grid item xs={4}>
            <Card className='Seller-Card'>
                <CardContent></CardContent>
            </Card>
         </Grid>
    <Grid item xs={6}>
    <Typography className='Seller-Title'>Good Seller</Typography>
    <Typography className='Seller-Desc'>Briefly summarise the story. Discuss the setting, the main character(s) and the main events or problems that the characters experience. Do not give the ending away! Discuss what you like or dislike about the story.</Typography>
    <Typography className='Reviewer-Name'>Anna Saraspova</Typography>
    <Typography className='Quote'>Your Beloved Buyer</Typography>
    </Grid>
    </Card>
    <Button className='Right-Arrow-Btn'><ArrowForwardIosIcon /></Button>
    </>
  )
}

export default Seller