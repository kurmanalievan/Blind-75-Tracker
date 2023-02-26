import React from 'react'
import {useState, useEffect} from 'react'
import Problem from './Problem'

function NumberOfSolved({solveddata}){
   return(
    <form className="results-form">
      <h2>Solved: <h3>{solveddata}/74</h3></h2>
    </form>
   )
}
function Print({type, func}){
  return(
    <>
    <tr className="table-title">
       <th>{type}</th>
    </tr>
    {func}
    </>
    ) 
 }
function Body({data}){
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
   }
    function distribute(type) {
      return (
        data.map((val) => {
        if(val.type === type){       
         return(
          <>
          <tr>
            <td >
              <Problem value={val}  handleSolvedData={() => handleSolvedData(val)}/>
            </td>
          </tr></>
        )}
       })
      )
    }
   
    return(
        <div className="body-div">
            <NumberOfSolved solveddata={solveddata}/>
      
             <table className="table">
               <thead className="table-name"><h3>This is the list of questions</h3></thead>
                <Print type="Array" func={distribute("Array")}/>
                <Print type="Binary" func={distribute("Binary")}/>
                <Print type="Dynamic Programming" func={distribute("Dynamic Programming")}/>
                <Print type="Graph" func={distribute("Graph")}/>
                <Print type="Interval" func={distribute("Interval")}/>
                <Print type="Linked List" func={distribute("Linked List")}/>
                <Print type="Matrix" func={distribute("Matrix")}/>
                <Print type="String" func={distribute("String")}/>
                <Print type="Tree" func={distribute("Tree")}/>
                <Print type="Heap" func={distribute("Heap")}/>
             </table>
        </div>
    )
}

export default Body
