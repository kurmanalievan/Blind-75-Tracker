import React from 'react'
import ReactMarkdown from 'react-markdown'
import {sol_list} from './SolutionsList'
const SolutionForm = ({problem_name}) => {
  const input = sol_list.filter(el => el.name == problem_name)
  return (
    <form className='solution-form'>
      <ReactMarkdown>{input[0].solution}</ReactMarkdown>
    </form>
  )
}

export default SolutionForm
