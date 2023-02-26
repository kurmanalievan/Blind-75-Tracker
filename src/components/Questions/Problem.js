import React from 'react'
import SolutionForm from './SolutionForm'
import {FaExternalLinkAlt} from 'react-icons/fa'
import {useState} from 'react'

function Solution({name}){
    return(
      <div className="solution">
        <SolutionForm problem_name={name}/> 
      </div>
    )
  }
function Problem({value,handleSolvedData}) {
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

export default Problem
