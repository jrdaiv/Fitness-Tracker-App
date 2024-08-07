import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import '../styles/ComponentStyles.css'


const Home = () => {
  return (
    <Container fluid className="text-center">
      <h1 className='welcome-sign'>Welcome To The Home Page</h1>
    </Container>
    
  );
};

export default Home;
