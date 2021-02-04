import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function AppNav() {

  return (
    <div className="container">
    <Navbar collapseOnSelect expand="md" variant="dark">
      <LinkContainer to="/">
      <Navbar.Brand>
          JABreland.dev
      </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle/>
      <Navbar.Collapse className="justify-content-end">
      <Nav activeKey={window.location.pathname}>
          <Nav.Item>
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/contact">
            <Nav.Link>Contact Me</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default AppNav;
