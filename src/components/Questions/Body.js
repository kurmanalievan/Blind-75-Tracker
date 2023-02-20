import React from 'react'
import {data} from '../Data'
import {useState} from 'react'
import SolutionForm from './SolutionForm'

var copy = []
function Solution({name}){
  return(
    <div className="solution">
      <SolutionForm problem_name={name}/> 
    </div>
  )
}

function Problem({value, handleSolvedData, showSolution, handleClick}){
  const [first, setFirst] = useState(true) 

  return(
    <div>
        <input className="problem-checkbox" type="checkbox" onChange={() => handleSolvedData({value})}></input>
       <a className="link"href={value.link}>{value.name}</a>
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
      <h1>{solveddata}</h1>
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

  function handleClick(){
    setShowSolution(!showSolution)
  }


    return(
        <div className="body-div">
            <NumberOfSolved solveddata={solveddata}/>
             <table className="table">
               <thead className="table-name">This is the list of questions</thead>
               <tr className="table-title">
                <th>Question</th>
               </tr>
               {data.map((val, key) => {
                return(
                  <tr>
                    <td >
                      <Problem value={val} showSolution={showSolution} handleClick={handleClick} handleSolvedData={() => handleSolvedData(val)}/>
                      </td>
                 </tr>
                )
               })
               }
             </table>
        </div>
    )
}

export default Body
export {copy}