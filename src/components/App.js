import React, { Component } from 'react';
import '../styles/App.css';
import GetImageForm from './GetImageForm'
import GetImageButton from './GetImageButton'
import ImageDisplay from './ImageDisplay'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GetImageForm />
        <GetImageButton />
        <ImageDisplay />
      </div>
    );
  }
}

export default App;
