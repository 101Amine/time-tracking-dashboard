import './App.css';
import { Card } from './Components/card';
import { HeaderCard } from './Components/headerCard';

function App() {
  return (
    <div className="App container">

      <div>
      <HeaderCard/>
       
      </div>
      <div>
      <Card tracking={'5hrs'} time={'32hrs'} title={'Work'} color={'hsl(15, 100%, 70%)'}/>
       <Card tracking={'5hrs'} time={'32hrs'} title={'Work'} color={'hsl(15, 100%, 70%)'}/>
      </div>
       
      <div>
      <Card tracking={'5hrs'} time={'32hrs'} title={'Work'} color={'hsl(15, 100%, 70%)'}/>
       <Card tracking={'5hrs'} time={'32hrs'} title={'Work'} color={'hsl(15, 100%, 70%)'}/>
      </div>

      <div>
      <Card tracking={'5hrs'} time={'32hrs'} title={'Work'} color={'hsl(15, 100%, 70%)'}/>
       <Card tracking={'5hrs'} time={'32hrs'} title={'Work'} color={'hsl(15, 100%, 70%)'}/>
      </div>
    </div>
  );
}

export default App;
