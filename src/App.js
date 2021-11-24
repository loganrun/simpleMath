
import './App.css';
import MathQuest from '../src/components/mathQuest';
import TopBar from '../src/components/topBar';
import Instructions  from '../src/components/instructions'

function App() {
  return (
    <div className="container">
      <TopBar/>
      <div className="box">       
        <h1 className="headline">Instructions</h1>
        <Instructions/> 

      </div>
      <div className="box">
        <h1 className = "headline">Fill it in here</h1>
        <MathQuest/>

      </div>
      
      
    </div>
  );
}

export default App;
