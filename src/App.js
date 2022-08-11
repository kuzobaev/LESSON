import React,{useState} from 'react';

import './App.css';

function App() {


  const [state,setState] = useState('Hi therer')
  return (
    <div className="app">
      <h1>Hi there!</h1>
    </div>
  );
}

export default App;
