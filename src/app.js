import React from 'react';

import Header from './components/header.js';
import Main from './components/main.js';
import Footer from './components/footer.js';

import './app.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
