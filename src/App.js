import logo from './logo.svg';
import './App.css';
// import InitialRender from './InitialRender';
// import UseState from './UseState';
// import Parent from './ParentChild';
// import StateImmutability from './StateImmutability';
import { RestartButton } from './ReactStateProps/RestartButton';
function App() {
  return (
    <div className="App">
        {/* <InitialRender/> */}
        {/* <UseState/> */}
        {/* <Parent /> */}
        {/* <StateImmutability/> */}
        <RestartButton gameOver = {true}/>
    </div>
  );
}

export default App;