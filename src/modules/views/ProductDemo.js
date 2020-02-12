import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#c7f0bd',
    opacity: 0.5,
    zIndex: -1,
  },
});

function ProductDemo(props) {
  const { classes } = props;

  return (
		<Container className={classes.root} component="section">
			<div className={styles.backdrop} />
			<Typography variant="h4" marked="center" align="center" component="h2">
				See it in action
			</Typography>
		</Container>
  );
}

ProductDemo.propTypes = {
  	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductDemo);
