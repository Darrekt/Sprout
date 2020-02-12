import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = theme => ({
	root: {
		display: 'flex',
		overflow: 'hidden',
		backgroundColor: theme.palette.secondary.light,
	},
	container: {
		marginTop: theme.spacing(10),
		marginBottom: theme.spacing(10),
		display: 'flex',
		position: 'relative',
	},
	item: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: theme.spacing(0, 5),
	},
	image: {
		height: 55,
	},
	title: {
		marginTop: theme.spacing(5),
		marginBottom: theme.spacing(5),
	},
	curvyLines: {
		pointerEvents: 'none',
		position: 'absolute',
		top: -180,
	},
});

function ProductValues(props) {
	const { classes } = props;

	return (
		<section className={classes.root}>
			<Container className={classes.container}>
				<img
					src="/static/assets/productCurvyLines.png"
					className={classes.curvyLines}
					alt="curvy lines"
				/>
				<Grid container spacing={5}>
					<Grid item xs={12} md={4}>
						<div className={classes.item}>
							<img
								className={classes.image}
								src="/static/assets/icons/hot.png"
								alt="temp"
							/>
							<Typography variant="h6" className={classes.title}>
								Temperature
              				</Typography>
						</div>
					</Grid>
					<Grid item xs={12} md={4}>
						<div className={classes.item}>
							<img
								className={classes.image}
								src="/static/assets/icons/water.png"
								alt="humidity"
							/>
							<Typography variant="h6" className={classes.title}>
								Humidity
              				</Typography>
						</div>
					</Grid>
					<Grid item xs={12} md={4}>
						<div className={classes.item}>
							<img
								className={classes.image}
								src="/static/assets/icons/sun.png"
								alt="light"
							/>
							<Typography variant="h6" className={classes.title}>
								Light Intensity
              				</Typography>
						</div>
					</Grid>
					<Grid item xs={12}>
						<div className={classes.item}>
							<Typography variant="h5" className={classes.title}>
								Sprout outputs real-time data to a simple web application 
								that shows you if a given spot is a is suitable for your plant to grow! 
								Data is clearly visualised with minimum levels, showing what is inhibiting 
								your plant's growth!
								Just find the parameters your plant needs, or choose from our presets!
							</Typography>
						</div>
					</Grid>

				</Grid>				
			</Container>
			
		</section>
	);
}

ProductValues.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
