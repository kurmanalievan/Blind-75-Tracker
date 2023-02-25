import './App.css';
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import {Route, Routes} from "react-router-dom"
import About from './components/About/About'
import Questions from './components/Questions/Questions';
import {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchData()
      setData(dataFromServer)
    }
    getData()
  }, [])
  
   const fetchData = async () => {
    const res = await fetch('http://localhost:5100/data')
    const data = await res.json()

    return data
  }
  console.log(data)
  return (
    <div className="App">
     <Navigation/>
       <Routes>
        <Route path="/" element={<Hero/>}></Route>
        <Route path="/questions" element={<Questions data={data}/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
