import React from 'react';

// Styles
import './Footer-styles.scss';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return(
      <footer className="Footer">
        <Container>
            <Row>
                <Col>
                    footer
                </Col>
            </Row>
        </Container>
      </footer>
  );
}

export default Footer;
