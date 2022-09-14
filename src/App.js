import {  useState } from 'react';
import './App.css';
import { Card } from './Components/card';
import { HeaderCard } from './Components/headerCard';
import Data from './data.json'
function App() {


  const [timeType, setTimeType] = useState('Daily');

  return (
    <div className="App container">

      <div>
      <HeaderCard setTimeType={setTimeType} timeType={timeType}/>
       
      </div>
      <div>
      <Card timeType={timeType} data={Data.find((pred) => pred.title === 'Work')} color={'hsl(15, 100%, 70%)'}/>
       <Card timeType={timeType} data={Data.find((pred) => pred.title === 'Exercise')} color={'hsl(145, 58%, 55%)'}/>
      </div>
       
      <div>
      <Card  timeType={timeType} data={Data.find((pred) => pred.title === 'Play')} color={'hsl(195, 74%, 62%)'}/>
       <Card  timeType={timeType} data={Data.find((pred) => pred.title === 'Social')} color={'hsl(264, 64%, 52%)'}/>
      </div>

      <div>
      <Card timeType={timeType} data={Data.find((pred) => pred.title === 'Study')} color={'hsl(348, 100%, 68%)'}/>
       <Card timeType={timeType} data={Data.find((pred) => pred.title === 'Self Care')} color={'hsl(43, 84%, 65%)'}/>
      </div>


    </div>
  );
}

export default App;
