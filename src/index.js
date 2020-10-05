import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function MyApp() {
  return (
    <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
  )
}

ReactDOM.render(
  <MyApp />,
  document.getElementById("root")
)
