import React, { useState } from "react"
import "./header.css"
import axios from "axios";
const EndPoint = "http://localhost:4000";

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false);
  const downloadFile = async ()=>{
    axios(EndPoint,{
      method:"GET",
      responseType:"blob",
    }
    ).then(res=>{
      const file = new Blob([res.data], {
        type: "application/pdf",
      });
      const fileURL = URL.createObjectURL(file);
      //Open the URL on new Window
      window.open(fileURL);
      console.log("file",file);
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <h1>Rana M. Amir Latif</h1>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href='#home'>home</a>
              </li>
              <li>
                <a href='#features'>features</a>
              </li>
              <li>
                <a href='#portfolio'>portfolio</a>
              </li>
              <li>
                <a href='#resume'>resume</a>
              </li>
              <li>
                <a href='#clients'>clients</a>
              </li>
              <li>
                <a href='#blog'>blog</a>
              </li>
              <li>
                <a href='#contact'>contact</a>
              </li>
              <li>
                <button className='home-btn' onClick={downloadFile}>DOWNLOAD CV</button>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
