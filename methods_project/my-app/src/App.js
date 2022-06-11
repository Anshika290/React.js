import GetData from './component/GetData';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import StoreData from './component/StoreData';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="www.tnplab.com">tnplab.com</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link to="/">Display</Link></Nav.Link>
            <Nav.Link ><Link to="/register">Register</Link></Nav.Link>

          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<GetData />} />
        <Route path="/register" element={<StoreData />} />
      </Routes>
    </div>
  );
}

export default App;
