import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter.js'
import Fetcher from './Fetch.js';

export default function App() {


  return (
    <div>
   < Counter />
   < Fetcher />
   </div >
  )
};

ReactDOM.render(
  <App />, document.querySelector('#root')
);