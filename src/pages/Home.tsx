import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import styled from 'styled-components'


const StyledJumbo = styled(Jumbotron)`
	background-color: transparent;
	text-align: center;
	margin-top: 10vh;
`

const Home: React.FC = () => {
	return (
		<div>
			<StyledJumbo>
				{/*Carousel Here*/}
				

				{/*End Carousel*/}
				<h1>Time to grow!</h1>
				<p>No green thumbs? No problem.</p>

				{/*Container Here*/}
					{/*4 Transparent Cards*/}
					

				{/*End Container*/}
			</StyledJumbo>

			{/*Demo Video Here*/}
					

			{/*End*/}

			{/*Staggered Card Array Here*/}
					

			{/*End Staggered Card Array*/}
		</div>
	);
}

export default Home;