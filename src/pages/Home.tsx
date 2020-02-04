import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'

const Home: React.FC = () => {
  return (
    <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://dummyimage.com/300"
              alt="Convenience"
            />
            <Carousel.Caption>
              <h3>Convenient</h3>
              <p>Small, non-invasive device. All it needs is a Wi-Fi connection.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://dummyimage.com/300"
              alt="Visual Representation"
            />
            <Carousel.Caption>
            <h3>Idiot-proof</h3>
              <p>All the information you need to grow your plant!</p>
            </Carousel.Caption>
          </Carousel.Item>
        
        </Carousel>

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