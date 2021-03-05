import react from 'react' ;
import './App.css';
import ham1 from "./video/ ham1.mp4";


function App() {
  return (
    <div className="App"> 
    
    <h1 class="title red">Your name here</h1>
    <br/>
    <img src="/images/vue1.jpg" alt="myimage"/>
    <br/>
    <img  src={require('./imag/bleu10.jpg').default} ></img>
    <video autoPlay loop muted
    style={{
      width="320";
      height="240";
    }}
    >
      <source src={ham1} type="video/mp4"/>
    </video>
    </div>
       
  );
}

export default App;