import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import styled from 'styled-components'
import IconCard from '../components/IconCard';
import logo from './../images/sprout_logo.png'

const StyledJumbo = styled(Jumbotron)`
	background-color: transparent;
	text-align: center;
	margin-bottom: 10vh;
`

const StyledContainer = styled(Container)`
	text-align: center;
`

const Home: React.FC = () => {
	return (
		<div>
			<StyledJumbo>
				<img src={logo} alt="sprout_logo"></img>
				<br/>
				<h5>Sprout is a low-cost Internet-of-Things device that aims to help you be a better plant owner!</h5>
				<p>Using embedded sensors and a wifi-chip, sprout outputs real-time data to a simple web application that lets you determine if a given spot is a good place to grow a plant.</p>
				<br/>

				<StyledContainer>
					<Row>
						<Col>
							<IconCard
								icon = "Temperature"
								title = "Ambient Temperature" 
							/>
						</Col>
						<Col>
							<IconCard
								icon = "Humidity"
								title = "Room Humidity" 
							/>
						</Col>
						<Col>
							<IconCard
								icon = "Light"
								title = "Light intensity" 
							/>
						</Col>
					</Row>

				</StyledContainer>

			</StyledJumbo>
			{/*
			Demo Video Here*/}
					

			{/*End*/}

			{/*Staggered Card Array Here*/}
				

			{/*End Staggered Card Array*/}
		</div>
	);
}

export default Home;