import React, { Component } from 'react';
import Pdf from '../../documents/Anthony_Cedrone_Resume.pdf';

class Download extends Component {

  render() {

    return (
      <div className="App">
        <a href={Pdf} rel="noreferrer" target="_blank">Download Pdf</a>
      </div>
    );

  }
}

export default Download;