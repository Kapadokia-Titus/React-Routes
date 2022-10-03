import logo from './logo.svg';
import './App.css';
// STEP 3 import necessary routing libraries from react
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Book from './components/Book';
import Services from './components/Services';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    {/*  routes wraps all route  */}
   <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About />}/>
      <Route path='/book' element={<Book />}/>
      <Route path='/services' element={<Services />}/>
   </Routes>
    </>
  );
}

export default App;
