import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import imagen1 from './Components/Imagen1';
import imagen2 from './Components/Imagen2';
import imagen3 from './Components/Imagen3';
import imagen4 from './Components/Imagen4';
import imagen5 from './Components/Imagen5';
import imagen6 from './Components/Imagen6';
import imagen7 from './Components/Imagen7';
import imagen8 from './Components/Imagen8';
import imagen9 from './Components/Imagen9';
import imagen10 from './Components/Imagen10';
import Navigation from './Components/Navigation';

function App() {
  return (
    <Router>
      
      <Routes>
      <Route path='/Imagen1' element={imagen1}/>
      <Route path='/Imagen2' element={imagen2}/>
      <Route path='/Imagen3' element={imagen3}/>
      <Route path='/Imagen4' element={imagen4}/>
      <Route path='/Imagen5' element={imagen5}/>
      <Route path='/Imagen6' element={imagen6}/>
      <Route path='/Imagen7' element={imagen7}/>
      <Route path='/Imagen8' element={imagen8}/>
      <Route path='/Imagen9' element={imagen9}/>
      <Route path='/Imagen10' element={imagen10}/>
      </Routes>
      <Navigation />
    </Router>
  );
}

export default App;
