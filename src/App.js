
import { useState } from 'react';
import './App.css';

function App() {
  return (
      <div className='App'>
        <h2>HOC</h2>
        <HOCRed cmp={Counter}/>
        <HOCGreen cmp={Counter}/>
        <HOCBlue cmp={Counter}/>
      </div>
  );  
}

function HOCRed(props){
  return (
    <>
      <h2 style={{background: "red", width: "100px"}}><props.cmp /></h2>
    </>
  )
}

// function HOCGreen(props){
//   return(
//     <h2 style={{background: 'green', width: "100px"}}><props.cmp /></h2>
//   )
// }

function Counter(){
  const [count, setCount] = useState(0);
  
  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount(count+1)}>Update</button>
    </>
  )
}

export default App;
