
import './App.css';
import Endow from './pages/Endow';
import Test from './pages/test'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Navbar  from './pages/Navbar';
import Contact from './pages/Contact'



function App() {
  return (
    <div>
      <div>
        <div>
          <Navbar />
        </div>
        <main>
          <Routes>
            <Route path='/endow' element={<Endow />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
      </div>
    </div>


  );
}


export default App;
