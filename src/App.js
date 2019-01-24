import React, { Component } from 'react';
import Sidebar from './components/sidebar';
import WorkExp from './components/workexperience'
import Education from './components/education';
import Footer from './components/footer'

// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="w3-content w3-margin-top" style={ { maxWidth: '1400px' } }>
          <div className="w3-row-padding">
          <Sidebar />
            <div className="w3-twothird">
              <WorkExp />

              <Education />

            </div>

          </div>

        </div>

        <Footer />
        
      </div>
    );
  }
}

export default App;
