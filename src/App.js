import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Navbar  from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <NoteState>
      <Navbar/>
      <Alert message="This is amazing React App" />
      <div className='container'>
      <h1>This is iNotebook</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </div>
      </NoteState>
    </>
  );
}
  
  
export default App;
