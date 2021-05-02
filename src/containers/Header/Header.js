import {useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  Typography,
  Container,
  Grid
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import MenuSearch from "@material-ui/icons/Search";



import "./Header.scss";

const useStyles = makeStyles((theme) => ({
    center: 'center',
}));

const Header = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
  return (
    <Container maxWidth="lg">
        <div className="header1">
      {/* <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">News</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar> */}
      {/* <Drawer open={open}  onClose={() => setOpen(false)}>  
          <h2>Bosh saxifa</h2>
      </Drawer> */}
        <Container  >
            <Grid container className='header' spacing={1}>
                <Grid item xs={4}><Button>SUBSCRIBE</Button></Grid>
                <Grid item xs={4}><Typography variant='h5' align='center'>Blog</Typography></Grid>
                <Grid item xs={4}>
                    
                    <Typography align='right'><Button  variant="outlined"><MenuSearch />SIGN UP</Button></Typography></Grid>
            </Grid>
            
        </Container>
    </div>
    </Container>

  );
};

export default Header;
