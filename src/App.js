import React, {useState, useEffect} from 'react'
import './App.scss';
import ScaleLoader from "react-spinners/ScaleLoader";
import Second from './components/SecondSection/SecondSection'
import First from './components/FirstSection/FirstSection'
import Third from './components/ThirdSection/ThirdSection'
import { Html, useProgress } from '@react-three/drei'


const override: CSSProperties = { 
  display: 'block',
  marginLeft: '48%',
  marginTop: '20%',

};


function App() {
  

  const { progress } = useProgress()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    if(progress === 100){
      setLoading(false)
    }
    // setTimeout(()=> {
    //   setLoading(false)
    // }, 10000)
  })
  
  return (
    <div>
      {
        loading ?  
        <div className='loader'> 
          <ScaleLoader 
            color="#36d7b7"
            height={50}
            cssOverride={override}
            margin={4}
            width={10}
          />
        </div>
        :
        <div>
          <First/>
          <Second />
          <Third />
        </div>
      } 
      
    </div>
  );
}

export default App;
