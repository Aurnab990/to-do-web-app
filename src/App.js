import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import CompleteTask from './CompleteTask';
import Addtask from './Addtask';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='completetask' element={<CompleteTask></CompleteTask>}></Route>
        <Route path='addtask' element={<Addtask></Addtask>}></Route>
      </Routes>
    </div>
  );
}

export default App;
