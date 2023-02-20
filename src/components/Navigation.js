import React from 'react'
import { FaGithub } from 'react-icons/fa';
import './style.css'

function Navigation(){
    return(
        <div className="navigation">
        <div className='github'><FaGithub /></div>
        <ul>
        <li>
            <a href='./'>Home</a>
        </li>
        <li>
            <a href='./questions'>Questions</a>
        </li>
        {/* <li>
            <a href='./solutions'>Solutions</a>
        </li> */}
        {/* <CustomLink to="/questions">Questions</CustomLink>
        <CustomLink to="/about">About</CustomLink> */}
        <li>
            <a href='./about'>About</a>
        </li>
      </ul>
        </div>
    )
}
export default Navigation