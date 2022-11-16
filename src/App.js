import React from 'react'
import './App.scss';
import Second from './components/SecondSection/SecondSection'
import First from './components/FirstSection/FirstSection'
import Third from './components/ThirdSection/ThirdSection'


function App() {
  return (
    <div> 
        <First />
        <Second />  
        <Third />
    </div>
  );
}

export default App;
