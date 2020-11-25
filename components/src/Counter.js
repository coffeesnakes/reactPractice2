import React from 'react';

const { useState } = React;

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">

      <h1>hello friend, let's make some components</h1>
      <h2> </h2>
      <p>
        {counter};
      </p>
      <button onClick={() => { setCounter(counter + 1); }}>Increase</button>
    </div>
  )
};
