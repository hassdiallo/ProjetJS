import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBarr from './component/NavBarr';
import Liste from './component/Liste';
import Ajouter from './component/Ajouter';
import Student from './component/Student';
import Modifier from './component/Modifier';

function App() {
  return (
    <div className="App">
      <NavBarr/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Liste/>}/>
          <Route path='/ajout' element={<Ajouter/>}/>
          <Route path='/students/:id' element={<Student/>}/>
          <Route path='/students/update/:id' element={<Modifier/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
