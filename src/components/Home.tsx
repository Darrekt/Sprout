import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

const Home: React.FC = () => {
  return (
    <div>
        <Jumbotron>
            <h1>Time to grow!</h1>
            <p>
                No green thumbs? No problem.
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
        </Jumbotron>
    </div>
  );
}

export default Home;