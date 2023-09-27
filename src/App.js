import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar/>
      <Routes>
         <Route path= "/" element={<Home/>}/>
         <Route path= "home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
