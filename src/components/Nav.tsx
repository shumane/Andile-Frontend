import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'inherit',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    // marginRight: theme.spacing(2),
  },
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.title}>
              Andile Ecommerce
            </Link>
          </Typography>
          <Button color="inherit">
            <Link to="/customer" className={classes.link}>
              Create Customer
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/product" className={classes.link}>
              Add Product
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/order" className={classes.link}>
              Create Order
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/basket" className={classes.link}>
              Basket
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/past-orders" className={classes.link}>
              Past Orders
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
