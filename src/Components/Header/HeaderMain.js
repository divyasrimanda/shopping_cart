import React, { Fragment } from 'react';
import {Grid, Link} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './style.css'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,

    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
      marginTop:'-0.7em'
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '45ch',
        '&:focus': {
          width: '45ch',
        },
      },
    },
  }));
  
function HeaderMain() {
    return (
     <Fragment>
      <Grid container  className='container'>
        <Grid item lg={4} className='pages'>
            <Link href='/shop' className='product_links'>Shop</Link>
            <Link href='/shop' className='product_links'>Promo</Link>
            <Link href='/shop' className='product_links'>About</Link>
            <Link href='/shop' className='product_links'>Blog</Link> 
        </Grid>
         <Grid item xs={4} className='pages'> 
         <Search>
         <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search what you need"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
         </Grid>
         <Grid item xs={4} className='pages'>
          <FavoriteBorderIcon /> 
            <ShoppingCartIcon />
            <PermIdentityIcon />
            <NotificationsNoneIcon />
         </Grid>
      </Grid>
      </Fragment>
  )
}

export default HeaderMain