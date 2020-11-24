import React from 'react';
import ReactDOM from 'react-dom';

const {useState} = React;

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <div style={{
        backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}> </div>
      <h1>hello friend</h1>
      <h2> let's try something new</h2>
      <p>
        {counter};
      </p>
      <button onClick={() => {setCounter(counter + 1);}}>Increase</button>
    </div>
  )
};

ReactDOM.render(
  <App />, document.querySelector('#root')
)