import React from "react"
import "./Home.css"
import main from "../pic/main.png"
import Typed from 'react-typed';
import linkedininbrands from "../pic/linkedininbrands.svg";
import instagrambrands from "../pic/instagrambrands.svg";
import facebookbrands from "../pic/facebookbrands.svg";

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Rana M.Amir Latif</span>
            </h1>
            <h2>
              a
              <span>

              <Typed
                strings={["&nbsp;Data Scientist. "]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
              </span>
            </h2>

            <p>RANA M. AMIR LATIF received my B.S. and M.S. degrees from the COMSATS University Islamabad Sahiwal, one of the top 
              universities in Pakistan (the 5th according to QS university ranking). I am currently doing the job as a Lecturer at Barani Institute of Sciences, Sahiwal.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <a href="https://www.facebook.com/rana.aamer.509" target="_blank"> <img src={facebookbrands}/></a>
                  </button>
                  <button className='btn_shadow'>
                    <a href="https://www.instagram.com/ranaomi178/" target="_blank"><img src={instagrambrands}/></a>
                  </button>
                  <button className='btn_shadow'>

                    <a href="https://www.linkedin.com/in/rana-m-amir-latif-051375140/" target="_blank"><img src={linkedininbrands}/></a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={main} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
