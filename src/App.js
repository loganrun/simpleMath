
import './App.css';
import MathQuest from '../src/components/mathQuest'

function App() {
  return (
    <div className="container">
      <div className="box">
        <p>Instructions</p>
        <MathQuest/>

      </div>
      <div className="box">
        <p>Fill it in here</p>
        <MathQuest/>

      </div>
      
    </div>
  );
}

export default App;
