import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import User from './Container/User/User'



function App() {
  return (

    <BrowserRouter>
    
      <div className="App">
       <User/>
      </div>
     
    </BrowserRouter>

  );
}

export default App;