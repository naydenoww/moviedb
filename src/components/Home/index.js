import React, { useState, useEffect } from 'react';

// Styles
import './Home-styles.scss';

// Bootstrap Components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Media from 'react-bootstrap/Media';

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState({});

  const setSearchQuery = (value) => {
    setSearchText(value)
  }
  
  const showResult = async(searchText) => {
    let data = await fetch(`http://www.omdbapi.com/?t=${searchText}&apikey=bfbf6d1b`);
    let item = await data.json();
    setSearchResult(item);
  }

  console.log(searchResult);

  return(
    <React.Fragment>
      <Row>
          <Col>
          <InputGroup className="mt-5 mb-5 search-movie-wrapper">
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
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <InputGroup.Append>
              <Button variant="primary" onClick={() => showResult(searchText)}>Search</Button>
            </InputGroup.Append>
          </InputGroup>
          </Col>
      </Row>
      <Row>
        <Col>
          <Media>
            <img
              width={64}
              height={64}
              className="mr-3"
              src={searchResult.Poster}
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>{searchResult.Title}</h5>
              <p>{searchResult.Plot}</p>
            </Media.Body>
          </Media>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Home;
