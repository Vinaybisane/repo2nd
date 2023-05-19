import logo from './logo.svg';
import './App.css';
import Sub from './component/Sub/Sub';
import Add from './component/Add/Add';

function App() {
  return (
    <div>
      <h2>Vinay bisane</h2>
      <h2> 4th commit</h2>
      
      <h1>table 1</h1>
      <Add></Add>
      <Sub />
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
