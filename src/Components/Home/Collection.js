import { Typography, Grid } from '@mui/material'
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



 function Collection() {
   return (
    <Grid container className="Collection-Container">
    <Grid item xs={12}>
    <Typography className='Collection-Title'>Our Premium Collection</Typography>
    </Grid>
    <Grid item xs={12} className="Col-Display">
    <Typography className='Collection-List' style={{color:'darkorange'}}>All Products</Typography>
    <Typography className='Collection-List'>Coats & Jacket</Typography>
    <Typography className='Collection-List'>Dressed</Typography>
    <Typography className='Collection-List'>Playsuit</Typography>
    <Typography className='Collection-List'>Short</Typography>
    <Typography className='Collection-List'>Skirt</Typography>
    <Typography className='Collection-List'>T-shirt</Typography>
    </Grid>
    <Grid container>
    <Grid item xs={4} className='Cat-Display'>
    <Card className='Cat-Card'>
      <CardContent>
        <Typography  className='Cat-Text'>
         Category Dress
        </Typography>
        <Typography className='Cat-SubText'>
        Tropical Suit
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='ArrowBtn'><ArrowForwardIcon /></Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={4} className='Cat-Display'>
    <Card className='Cat-Card'>
      <CardContent>
        <Typography  className='Cat-Text'>
         Category Dress
        </Typography>
        <Typography className='Cat-SubText'>
        Tropical Suit
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='ArrowBtn'><ArrowForwardIcon /></Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid item xs={4} className='Cat-Display'>
    <Card className='Cat-Card'>
      <CardContent>
        <Typography  className='Cat-Text'>
         Category Dress
        </Typography>
        <Typography className='Cat-SubText'>
        Tropical Suit
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='ArrowBtn'><ArrowForwardIcon /></Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>

    <Grid container>
    <Grid item xs={4} className='Cat-Display'>
    <Card className='Cat-Card'>
      <CardContent>
        <Typography  className='Cat-Text'>
         Category Dress
        </Typography>
        <Typography className='Cat-SubText'>
        Tropical Suit
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='ArrowBtn'><ArrowForwardIcon /></Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={4} className='Cat-Display'>
    <Card className='Cat-Card'>
      <CardContent>
        <Typography  className='Cat-Text'>
         Category Dress
        </Typography>
        <Typography className='Cat-SubText'>
        Tropical Suit
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='ArrowBtn'><ArrowForwardIcon /></Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid item xs={4} className='Cat-Display'>
    <Card className='Cat-Card'>
      <CardContent>
        <Typography  className='Cat-Text'>
         Category Dress
        </Typography>
        <Typography className='Cat-SubText'>
        Tropical Suit
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='ArrowBtn'><ArrowForwardIcon /></Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
    <Button className='findBtn' style={{margin:'140px auto'}}>Find Out More</Button>
    </Grid>

  )
}

export default Collection