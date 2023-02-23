import React from 'react'

const Main = () => {
  return (
    <div className="container">
    <div><h1>Nursezim Kurmanalieva</h1></div>
      <h3>Software Engineer</h3>

     <div>
         <a href="mailto:kurmanalieva.nurs@gmail.com"><button className="btnEmail"type="button" >Email</button></a>
     </div>
     <div>
         <a href="https://www.linkedin.com/in/nursezim-kurmanalieva-5417a2206/"> <button className="btnLinkedIn">LinkedIn</button></a>
         
     </div>

     <div className="about">
         <h1>About</h1>
         <p className="about-text">I am a third-year Computer Science student and ELTE in Budapest.</p>
     </div>
 </div>
  )
}

export default Main
