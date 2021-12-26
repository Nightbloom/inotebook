import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Navbar  from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
      <NoteState>
      <Navbar/>
      <div className='container'>
      <h1>This is iNotebook</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
      </NoteState>
    </>
  );
}
  
  
export default App;
