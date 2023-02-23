import React from 'react';
import Image from '../../images/my_pic.png'
function Header(){
    return(
        <div className="header">
            <img className="img" src={Image}/>
        </div>
    )
}
export default Header;