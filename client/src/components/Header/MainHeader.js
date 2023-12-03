import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
// import ProductSansBoldItalic from '..//../assets/fonts/ProductSansBoldItalic'
import CityLogo from "../../assets/logos/CityLogo.png";
import { Grid } from '@mui/material';


const pages = [
  { label: 'Home', link: '/' },
  { label: 'Offers', link: '/offers' },
  { label: 'Hot Deals', link: '/hotdeals' },
  { label: 'Travel Guides', link: '/travelGuides' },
  { label: 'About Us', link: '/about' },
  { label: 'EMI', link: '/emi' },
  { label: 'News & Media', link: '/news' },
  { label: 'Blog', link: '/blog' },
  { label: 'FAQ', link: '/faq' },
  // ... (add other pages with their corresponding routes)
];

const DashBoardHeader = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
 const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
     <AppBar
      position="sticky"
      sx={{
        backgroundColor: scrolling ? '#fff' : 'transparent',
        boxShadow: scrolling ? '0px 1px 5px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'background-color 0.3s, box-shadow 0.3s',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              margin: '0',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#0067FF',
              textDecoration: 'none',
            }}
          >
            <img src={CityLogo} style={{ color: 'red' }}  alt="Logo" />
          </Typography>
            </div>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerClose}
            sx={{
              width: 200,
              flexShrink: 0,
              display: { xs: 'block', md: 'none' },
            }}
          >
            <List>
              {pages.map((page) => (
                <ListItem button key={page.label} onClick={handleDrawerClose} component={Link} to={page.link}>
                  <ListItemText primary={page.label} />
                </ListItem>
              ))}
            </List>
          </Drawer>

          <Grid container item xs={12} md={10} justifyContent="center" alignItems="center" spacing={1}>
            {pages.map((page) => (
              <Grid item key={page.label}>
                <Button
                  variant="text"
                  component={Link}
                  to={page.link}
                  sx={{
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                    color: 'black',
                    display: { xs: 'none', md: 'block' }, // Hide on mobile, show on desktop
                  }}
                >
                  {page.label}
                </Button>
              </Grid>
            ))}
          </Grid>
                  
          <Button variant="contained" component={Link} to="/signin" sx={{ width: 120, color: 'black', display: {  md: 'block' } }}>Sign In</Button>
                 
          <IconButton
            size="large"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default DashBoardHeader;