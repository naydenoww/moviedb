import React from 'react';

// Bootstrap Components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Home = () => {
  return(
    <Row>
        <Col>
        <InputGroup className="mt-5 mb-5">
          <DropdownButton
            as={InputGroup.Prepend}
            variant="outline-secondary"
            title="All"
            id="input-group-dropdown-1"
          >
            <Dropdown.Item href="#">Movie</Dropdown.Item>
            <Dropdown.Item href="#">Series</Dropdown.Item>
            <Dropdown.Item href="#">Episode</Dropdown.Item>
          </DropdownButton>
          <FormControl
            placeholder="Search MovieDb"
            aria-label="Search MovieDb"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="primary">Search</Button>
          </InputGroup.Append>
        </InputGroup>
        </Col>
    </Row>
  );
}

export default Home;
