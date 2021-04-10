/**
 * React renderer.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Import the styles here to process them with webpack
import '@public/style.css';

ReactDOM.render(
  <div className='app'>
    <h4>Comerciando Ando</h4>
    <p>Bienvenido</p>
  </div>,
  document.getElementById('app')
);
