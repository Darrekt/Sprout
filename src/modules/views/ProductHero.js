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
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
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
      Sprout is a low-cost Internet-of-Things device that aims to help you be a better plant owner! Using embedded sensors and a wifi-chip, sprout outputs real-time data to a simple web application that lets you determine if a given spot is a good place to grow a plant.
      </Typography>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
