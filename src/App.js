import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Job from './pages/Job'
import Jobs from './pages/Jobs'
import Home from './pages/Home'
import PrintJob from './components/PrintJob';
import Settings from './pages/Settings'
import Login from './pages/Login';
import Client from './pages/Client';

function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Jobs' element={<Jobs/>}/>
        <Route path='/Job/:id' element={<Job/>}/>
        <Route path='/print/:id' element={<PrintJob/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/client' element={<Client/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
