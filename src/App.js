import './App.css';
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import {Route, Routes} from "react-router-dom"
import About from './components/About/About'
import Questions from './components/Questions/Questions';
// import Solutions from './components/Solutions/Solutions';

function App() {
  return (
    <div className="App">
     <Navigation/>
       <Routes>
        <Route path="/" element={<Hero/>}></Route>
        <Route path="/questions" element={<Questions/>}></Route>
        {/* <Route path="/solutions" element={<Solutions/>}></Route> */}
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
