import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Darrick Lau
      </Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles(theme => ({
	'@global': {
		ul: {
			margin: 0,
			padding: 0,
			listStyle: 'none',
		},
	},
	appBar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	toolbar: {
		flexWrap: 'wrap',
	},
	toolbarTitle: {
		flexGrow: 1,
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	heroContent: {
		padding: theme.spacing(8, 0, 6),
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
	},
	cardPricing: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'baseline',
		marginBottom: theme.spacing(2),
	},
	footer: {
		borderTop: `1px solid ${theme.palette.divider}`,
		marginTop: theme.spacing(8),
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
		[theme.breakpoints.up('sm')]: {
			paddingTop: theme.spacing(6),
			paddingBottom: theme.spacing(6),
		},
	},
}));

const members = [
	{
		title: 'Hardware / Embedded Systems Lead',
		name: 'Naim Govani',
		description: [
			'Github',
			'LinkedIn'
		],
		buttonText: 'Contact',
		buttonVariant: 'contained',
	},
	{
		title: 'Web Development Lead',
		name: 'Darrick Lau',
		description: [
			'Website',
			'Github',
			'LinkedIn'
		],
		buttonText: 'Contact',
		buttonVariant: 'contained',
	},
	{
		title: 'Internet of Things / Backend Lead',
		name: 'Olly Larkin',
		description: [
			'Github',
			'LinkedIn'
		],
		buttonText: 'Contact',
		buttonVariant: 'contained',
	},
];

export default function About() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			{/* Hero unit */}
			<Container maxWidth="sm" component="main" className={classes.heroContent}>
				<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
					About Us
        </Typography>
				<Typography variant="h5" align="center" color="textSecondary" component="p">
					Find out more about everyone on the development team that brought you this cool project!
        </Typography>
			</Container>
			{/* End hero unit */}
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					{members.map(member => (
						// Enterprise card is full width at sm breakpoint
						<Grid item key={member.title} xs={12} sm={member.title === 'Enterprise' ? 12 : 6} md={4}>
							<Card>
								<CardHeader
									title={member.title}
									subheader={member.subheader}
									titleTypographyProps={{ align: 'center' }}
									subheaderTypographyProps={{ align: 'center' }}
									className={classes.cardHeader}
								/>
								<CardContent>
									<div className={classes.cardPricing}>
										<Typography component="h2" variant="h4" color="textPrimary">
											{member.name}
										</Typography>
									</div>
									<ul>
										{member.description.map(line => (
											<Typography component="li" variant="subtitle1" align="center" key={line}>
												{line}
											</Typography>
										))}
									</ul>
								</CardContent>
								<CardActions>
									<Button fullWidth variant={member.buttonVariant} color="primary">
										{member.buttonText}
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>

			{/* Footer */}
			<Container maxWidth="md" component="footer" className={classes.footer}>
				<Box mt={5}>
					<Copyright />
				</Box>
			</Container>
			{/* End footer */}
		</React.Fragment>
	);
}