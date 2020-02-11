import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';


const styles = theme => ({
  background: {
    backgroundColor: 'transparent', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(7),
    marginRight: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(5),
    },
  },
  more: {
    marginTop: theme.spacing(8),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Grow your garden
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Tired of your plants dying? New to gardening? Or just unsure? Sprout is a small, low-cost monitoring device that helps you 
        decide if a plant can grow in a given space!
      </Typography>
      <Typography variant="h5" color="inherit" className={classes.more}>
        Find out more!
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
