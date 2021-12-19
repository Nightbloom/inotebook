import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Navbar  from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';

function App() {
  return (
    <>
      <Navbar/>
      <h1>This is iNotebook</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
  
  
export default App;
