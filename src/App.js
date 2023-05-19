import logo from './logo.svg';
import './App.css';
import Sub from './component/Sub/Sub';
import Add from './component/Add/Add';
import Mul from './component/Mul/Mul';
import { useState } from 'react';

function App() {
  const[inputvalue,setinputvalue]=useState(0)
  const printvalue=()=>{
    console.log("inputvalue:",inputvalue)
  }
  return (
   
    <div>
      <div>
        <input value={inputvalue} 
        onChange={(e)=>{
          setinputvalue(e.target.value)
          //console.log('event',e)
        }}
        type='number' 
        placeholder='enter the number' />
      </div>
      <h2>Vinay bisane </h2>
      <h2> 4th commit{inputvalue}</h2>
      
      <h1>table 1</h1>
      <Add a={inputvalue} b="3"></Add>
      <Sub a={inputvalue} b="1"/>
      <Mul a={inputvalue} b="2" />
   <table>
    <tr>
      <th>id</th>
      <th>name</th>
      <th>location</th>
    </tr>
    <tr>
      <td>1</td>
      <td>vinay</td>
      <td>tumsar</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Achal</td>
      <td>nagpur</td>
    </tr>
   </table>

   </div>
  );
}

export default App;
