import React from 'react'
import {data} from '../Data'
import {useState} from 'react'
import SolutionForm from './SolutionForm'
import {FaExternalLinkAlt} from 'react-icons/fa'

var copy = []
function Solution({name}){
  return(
    <div className="solution">
      <SolutionForm problem_name={name}/> 
    </div>
  )
}

function Problem({value,handleSolvedData}){
  const [showSolution, setShowSolution] = useState(false)
  function handleClick(){
    setShowSolution(!showSolution)
  }
  return(
    <div>
        <input className="problem-checkbox" type="checkbox" onChange={() => handleSolvedData({value})}></input>
       <a className="link" title="Go to LeetCode" target="_blank" href={value.link}>{value.name}  <FaExternalLinkAlt className='link-icon' /></a>
       <button className="btn-solution"onClick={handleClick} style={
        {backgroundColor: showSolution ? 'red' : "green"}}>
          {showSolution ? 'Close' : 'Solution'}</button>
          {showSolution && <Solution name={value.name}/>}
    </div>
  )
}

function NumberOfSolved({solveddata}){
   return(
    <form className="results-form">
      <h2>Solved: <h3>{solveddata}/74</h3></h2>
    </form>
   )
}
function Body(){
    const [solveddata, setSolveddata] = useState(0)
    const [showSolution, setShowSolution] = useState(false)
    function handleSolvedData(value){
      for(let i = 0;i < data.length; i++){
        if(data[i].name === value.name){
          data[i].solved = !data[i].solved
        }
      }
      var cnt = data.filter(el => el.solved)
      setSolveddata(cnt.length)
      console.log(solveddata)
   }

    function distribute(type) {
      return (data.map((val) => {
        if(val.type === type){     
          console.log(val.name)      
         return(
          <tr>
            <td >
              <Problem value={val}  handleSolvedData={() => handleSolvedData(val)}/>
              </td>
         </tr>
        )}
       })
      )
    }

    return(
        <div className="body-div">
            <NumberOfSolved solveddata={solveddata}/>
             <table className="table">
               <thead className="table-name"><h3>This is the list of questions</h3></thead>
               <tr className="table-title">
                <th>Arrays</th>
               </tr>
               {distribute("array")}
               <tr className="table-title">
                <th>Binary</th>
               </tr>
               {distribute("binary")}
               <tr className="table-title">
                <th>Dynamic Programming</th>
               </tr>
               {distribute("dp")}
               <tr className="table-title">
                <th>Graph</th>
               </tr>
               {distribute("graph")}
               <tr className="table-title">
                <th>Interval</th>
               </tr>
               {distribute("interval")}
               <tr className="table-title">
                <th>Linked List</th>
               </tr>
               {distribute("linkedlist")}
               <tr className="table-title">
                <th>Matrix</th>
               </tr>
               {distribute("matrix")}
               <tr className="table-title">
                <th>String</th>
               </tr>
               {distribute("string")}
               <tr className="table-title">
                <th>Tree</th>
               </tr>
               {distribute("tree")}
               <tr className="table-title">
                <th>Heap</th>
               </tr>
               {distribute("heap")}
             </table>
        </div>
    )
}

export default Body
export {copy}