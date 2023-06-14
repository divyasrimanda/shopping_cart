import { Card, CardContent, Typography, TextField, Grid } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React from 'react'

function Newsletter() {
  return (
    <Grid container className='News-Container'>
        <Grid item xs={12}>
        <Card className='News-Card'>
        <CardContent>
        <Typography className="New-Title">Join Our News Letters</Typography>
        <Typography className='News-Desc'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative appproaches to corpprate strategy foster</Typography>
        <TextField   className="outlined-basic" label="Insert your email here" variant="outlined" />
        <ChevronRightIcon className='Textfield-Icon' />
      </CardContent>
     </Card>
        </Grid>
    </Grid>
  
  )
}

export default Newsletter