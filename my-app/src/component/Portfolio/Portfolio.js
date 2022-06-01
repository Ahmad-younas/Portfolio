import React from "react"
import "./Portfolio.css"
import Card from "./Card"
import Portfolio_data from "../Portfolio/Portfolio_data";
import project1 from "../pic/project1.png";
import project2 from "../pic/project2.png";
import project3 from "../pic/project3.png";
import project4 from "../pic/project4.png";
import project5 from "../pic/project5.png";
import project6 from "../pic/project6.png";



const Portfolio = () => {


  const pics=[{
      id:1,
      image:project1
    },{
      id:2,
      image:project2,
    },{
      id:3,
      image:project3,
    },{
      id:4,
      image:project4,
    },{
      id:5,
      image:project5,
    },{
      id:6,
      image:project6
    }
]
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
            <h1>My Portfolio</h1>
          </div>

          <div className='content grid'>
            {Portfolio_data.map((value, index) => {
              // console.log(pics[index].image);
              return <Card key={index} image={pics[index].image} title={value.title} link={value.link} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
