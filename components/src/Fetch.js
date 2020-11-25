import React from 'react';
import axios from 'axios';

export default function Fetcher() {
  const fetchRandomData = ()) => {
  return axios.get('https://randomuser.me/api')
    .then(res => {
      console.log(res)
      return res;
    })
    .catch(err => {
      console.log(err)
    });
}
return ( <div>
  <button onClick={() => {
    fetchRandomData()
  }}> Fetch Random Data </button>
</div>
)
};

// const axios = require('axios');

// // Make a request for a user with a given ID
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });