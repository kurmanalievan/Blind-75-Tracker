import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { Link, useMatch, useResolvedPath} from 'react-router-dom'
import './style.css'

function Navigation(){
    return(
        <div className="navigation">
        <div className='github'><a target="_blank" href="https://github.com/kurmanalievan/ReactProject" title="Go to GitHub"><FaGithub /></a></div>
        <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/questions">Questions</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
        </div>
    )
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
     <li className={ isActive ? "active" : ""}>
         <Link to={to} {...props}>
           {children}
         </Link> 
     </li>
    )
 }
export default Navigation