import React from 'react'
import { FaInstagram, FaLinkedinIn} from 'react-icons/fa';
function Footer(){
    return(
        <>
         <footer className="footer">
            <a className="instagram" target="_blank" href="https://www.instagram.com/" title="Go to GitHub"><FaInstagram /></a>
            <a className="linkedin"target="_blank" href="https://www.instagram.com/" title="Go to GitHub"><FaLinkedinIn /></a>
         </footer>
        </>
    )
}
export default Footer