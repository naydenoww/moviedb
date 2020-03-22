import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// App Components
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

// Bootstrap Components
import Container from 'react-bootstrap/Container';

const App = () => {
  return(
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
