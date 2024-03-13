import logo from '../src/Images/logo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='welcome'>
       <img width={100} src={logo} />
        <h1>Welcome to Travisty Creations</h1>
        <p>This site hasn't launched yet, but if you are patient enough to wait and keep watching, you may find something cool!</p>
        <img className='cat' src='https://www.thesprucepets.com/thmb/Dm_fEN3vXtW3lsNo_A0gKaO2LsY=/3956x2628/filters:fill(auto,1)/cat-meowing-on-wooden-floor-125026653-5aeb0df043a103003619c114.jpg' />
      </div>
    </div>
  );
}

export default App;
