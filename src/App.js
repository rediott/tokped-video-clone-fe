import logo from './logo.svg';
import './App.css';
import Home from './page/Home'
import { Routes, Route } from 'react-router-dom';
import VideoPage from './page/VideoPage'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/video/:id' element = {<VideoPage />} />
    </Routes>

    </>
  );
}

export default App;
