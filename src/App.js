import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MainInfo from './components/MainInfo';
import './components/style.css';
import { BrowserRouter, Route, Router , Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <Router>
    
    <Navbar/>
    
     
     {/* <Routes>
      <Route exact  path='/' element={<Home/>} </Route>
      <Route exact  path='/marvel' element={<Marvel/>} </Route>
     </Routes>
     
     <MainInfo/>
     </Router> */}
    <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/Pokemon' element={< Pokemon />}></Route>

                <Route exact path='/marvel' element={< Marvel />}></Route>
                <Route exact path='/about' element={< About />}></Route>
        </Routes>
     </>
   
  )
}

export default App;
