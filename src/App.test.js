import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const rootEl = document.createElement('div');
  if (module.hot) {
    // Whenever a new version of App.js is available
    module.hot.accept('./App', function () {
      // Require the new version and render it instead
      var NextApp = require('./App')
      ReactDOM.render(<NextApp />, rootEl)
    })
  }
});

