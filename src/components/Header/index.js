import React from 'react';

// Styles
import './Header-styles.scss';

import { Link } from 'react-router-dom';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
  return(
    <header className="Header">
        <Container>
          <Row>
            <Col className="d-flex align-items-center justify-content-between">
              <Link to="/">
                <h3 className="logo-text mb-0">MovieDB</h3>
              </Link>
              <div className="nav">
                <Link to="/"><span>Home</span></Link>
                <Link to="/about"><span>About</span></Link>
              </div>
            </Col>
          </Row>
        </Container>
    </header>
  );
}

export default Header;
