import React from 'react'
import ReactMarkdown from 'react-markdown'
import {plist} from './SolutionsList'

const SolutionForm = ({problem_name}) => {
  const input = plist.filter(el => el.name == problem_name)
  console.log(input)

  return (
    <form className='solution-form'>
      <ReactMarkdown>{input[0].solution}</ReactMarkdown>
    </form>
  )
}

export default SolutionForm
