import React from 'react'
import { BrowserRouter as NavMenu, NavLink } from 'react-router-dom'
import Image from '../images/symbol.png'
import Footer from './Footer'

function Hero(){
        return(
            <div className="hero">
              <img src={Image}/>
               <div>
                <h1>Problems from LeetCode and their solutions</h1>
                 <p>Specifically organized for better prepration for interviews at tech companies</p>
               </div>
               <Footer/>
            </div>
        )
}

export default Hero