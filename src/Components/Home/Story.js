import { Grid, Typography,Card, CardContent } from '@mui/material';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import CategoryIcon from '@mui/icons-material/Category';
import PentagonIcon from '@mui/icons-material/Pentagon';
import React from 'react'
import './style.css'
import Seller from './Seller';
import GetMoreInsight from './GetMoreInsight';
import Newsletter from '../Newsletter/Newsletter';
function Story() {
  return (
    <Grid container className='Story-Container'>
    <Grid item xs={5}>
    <Card className='Story-Card'>
        <CardContent></CardContent>
    </Card>
    </Grid>
    <Grid item xs={6}>
    <Typography className='Story-Big-Text'>Story about</Typography>
    <Typography className='Story-Small-Text'>Our Brand</Typography>
    <Typography className='Story-Desc'>Develop a website by finding a product identity that has value and branding to become a characteristic of a company.We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company Develop a website by finding a product identity that has value and branding to become a characteristic of a company.We will also facilitate the business marketing of these products with SEO experts so that ready-to-use website and help sell a product from the company Develop a website by finding a product</Typography>
    <Typography className='Read-Text'>Read full story</Typography>
    </Grid>
    <Typography className='Ach-Text'>Our Acheivement</Typography>
    <Grid container>
    <Grid item xs={12} className='Ach-Logo'>
    <TrackChangesIcon className='Company-Logo' />
    <Typography className='Company-Logo-Text'>
     Company Text Logo
    </Typography>
    
    <DonutSmallIcon className='Company-Logo' />
    <Typography className='Company-Logo-Text'>
     Company
    </Typography>
    
    <CategoryIcon   className='Company-Logo'/>
    <Typography className='Company-Logo-Text'>
     A Company 
    </Typography>

    <PentagonIcon  className='Company-Logo' />
    <Typography className='Company-Logo-Text'>
    Text Logo
    </Typography>

    <Typography className='Company-Logo-Text'>
     Company 
    </Typography>
    
    <TrackChangesIcon className='Company-Logo' />
    <Typography className='Company-Logo-Text'>
     Company Text Logo
    </Typography>
    </Grid>
    </Grid>
    <Seller />
    <GetMoreInsight />
    <Newsletter />
    </Grid>
  )
}

export default Story