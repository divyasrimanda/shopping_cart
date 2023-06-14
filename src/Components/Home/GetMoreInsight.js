import { Typography, Grid, CardContent,Card } from '@mui/material'
import React from 'react'
import './style.css';
function GetMoreInsight() {
  return (
    <Grid container className='See-More-Container'>
     <Grid item xs={10}>
       <Typography className='Get-More-Text'>Get Better Insights form Our Articles</Typography>
     </Grid>
     <Grid item xs={2} className='See-More-Text'>
      See more
     </Grid>
     <Grid item xs={5} className="Article-Card">
     <Card className='Seller-Card'>
     <CardContent></CardContent>
     </Card>
     <Typography className='Art-Big-Text'>Best Summer Outfit Style</Typography>
     <Typography className='Date'>14 Feb . Livina Style</Typography>
     <Typography className='Art-Desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Typography>
     <Typography className='Expand-Text'>Expand More</Typography>
     </Grid>
     <Grid item xs={1}></Grid>
     <Grid item xs={5} className="Article-Card">
     <Card className='Seller-Card'>
     <CardContent></CardContent>
     </Card>
     <Typography className='Art-Big-Text'>Best Summer Outfit Style</Typography>
     <Typography className='Date'>14 Feb . Livina Style</Typography>
     <Typography className='Art-Desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Typography>
     <Typography className='Expand-Text'>Expand More</Typography>
     </Grid>

     <Grid item xs={5} className="Article-Card">
     <Card className='Seller-Card'>
     <CardContent></CardContent>
     </Card>
     <Typography className='Art-Big-Text'>Best Summer Outfit Style</Typography>
     <Typography className='Date'>14 Feb . Livina Style</Typography>
     <Typography className='Art-Desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Typography>
     <Typography className='Expand-Text'>Expand More</Typography>
     </Grid>
     
     <Grid item xs={1}></Grid>
     <Grid item xs={5} className="Article-Card">
     <Card className='Seller-Card'>
     <CardContent></CardContent>
     </Card>
     <Typography className='Art-Big-Text'>Best Summer Outfit Style</Typography>
     <Typography className='Date'>14 Feb . Livina Style</Typography>
     <Typography className='Art-Desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Typography>
     <Typography className='Expand-Text'>Expand More</Typography>
     </Grid>

    </Grid>
  )
}

export default GetMoreInsight