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
    const types = ["Array", "Binary", "Dynamic Programming", "Graph", "Interval", "Linked List", "Matrix", "String", "Tree", "Heap"]
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
               <tr className="table-title">
                <th>Arrays</th>
               </tr>
               {distribute("Array")}
               <tr className="table-title">
                <th>Binary</th>
               </tr>
               {distribute("Binary")}
               <tr className="table-title">
                <th>Dynamic Programming</th>
               </tr>
               {distribute("Dynamic Programming")}
               <tr className="table-title">
                <th>Graph</th>
               </tr>
               {distribute("Graph")}
               <tr className="table-title">
                <th>Interval</th>
               </tr>
               {distribute("Interval")}
               <tr className="table-title">
                <th>Linked List</th>
               </tr>
               {distribute("Linked List")}
               <tr className="table-title">
                <th>Matrix</th>
               </tr>
               {distribute("Matrix")}
               <tr className="table-title">
                <th>String</th>
               </tr>
               {distribute("String")}
               <tr className="table-title">
                <th>Tree</th>
               </tr>
               {distribute("Tree")}
               <tr className="table-title">
                <th>Heap</th>
               </tr>
               {distribute("Heap")}
             </table>
        </div>
    )
}

export default Body
