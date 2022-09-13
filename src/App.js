import './App.css';
import { Card } from './Components/card';

function App() {
  return (
    <div className="App container">
       <Card tracking={'5hrs'} time={'32hrs'} title={'Work'} color={'hsl(15, 100%, 70%)'}/>
    </div>
  );
}

export default App;
