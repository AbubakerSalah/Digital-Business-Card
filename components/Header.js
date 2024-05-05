import React from "react"



export default function Header() {
    return (
        <header >
        <img className ="img" src = "./me.jpeg" width = "220px" />
        <h2> Abubaker Salah</h2>
        <h4>Frontend Developer</h4>
       <div className="header-container">
        <a className="mail-btn" href="mailto:abubakersalah4@gmail.com" target="_blank"><i className="fa-solid fa-envelope"></i>Email</a>
        <a className="lnkd-btn" href="http://linkedin.com/in/abubaker-salah-205483287" target="_blank"><i className="fa-brands fa-linkedin" alt="My Linkedin profile"></i>LinkedIn</a>
      
       </div>
        
       
        </header>
        
        
        
    )
}

 