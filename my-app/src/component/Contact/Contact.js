import React, { useState, useEffect } from "react"
// import sirranaamir from "../pic/sirranaamir.jpg"
import siramir from "../pic/siramir.jpg"
import "./Contact.css"
import axios from'axios';
import { ToastContainer, toast } from 'react-toastify';
const EndPoint = "http://localhost:4000";
const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",})

  const [nameerror, setnameError] = useState(false);
  const [phoneerror, setphoneError] = useState(false);
  const [emailerror, setemailError] = useState(false);
  const [subjecterror, setsubjectError] = useState(false);
  const [messageerror, setmessageError] = useState(false);
  // const [validationerror, setvalidationError] = useState(true);
  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault();
    if(data.fullname=="" ){
      setnameError(true);
    }if(data.email==""){
      setemailError(true)
    // }
    // if (regex.test(data.email===false)){
    //   console.log("ksjkgbsg");
    //   setvalidationError(false)
    }if(data.phone==""){
      setphoneError(true)
    }if(data.message==""){
      setmessageError(true)
    }if(data.subject==""){
      setsubjectError(true)
    }
    if(nameerror===true || phoneerror===true || emailerror===true || subjecterror===true || messageerror===true){
      axios.post(EndPoint,data).then((res)=>{
        console.log(res);
        if(res.status===200){
          console.log("hi");
            toast("ok jhsgfjhsvahgk",{
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
        }
      }).catch((err)=>{
        console.log(err);
      });
      setData({
        fullname: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      })
        setnameError(false);
        setemailError(false)
        setphoneError(false)
        setmessageError(false)
        setsubjectError(false)
    }
  }

  const validate = ()=>{
    console.log("hiii");
  
  }
  // useEffect(() => {
  //   console.log("hghjssv");
  //   const listener = event => {
  //     if (event.code === "Enter" || event.code === "NumpadEnter") {
  //       event.preventDefault();
  //       validate();
  //       if(nameerror===true && phoneerror===true && emailerror===true && subjecterror===true && messageerror===true){
  //       formSubmit();
  //       }
  //       // callMyFunction();
  //     }
  //   };
  //   document.addEventListener("keydown", listener);
  //   return () => {
  //     document.removeEventListener("keydown", listener);
  //   };
  // }, []);

  // const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={siramir} alt='' />
                </div>
                <div className='details'>
                  {/* <h1>Contact Me</h1>
                  <p>Chief Operating Officer</p> */}

                  <br /><br /><br />
                  <p className="toptxt">I am available for freelance work. Connect with me via and call in to my account.</p> <br />
                  <br /><br /><br />
                  <p>Phone: &nbsp;+923076148524</p>
                  <p>Email: &nbsp;ranaamir10611@gmail.com</p> <br />
                  <br/>
                  
                  
                  {/* <span>FIND WITH ME</span>
                  <div className='button f_flex'>
                    <button className='btn_shadow'>
                      <i className='fab fa-facebook-f'></i>
                    </button>
                    <button className='btn_shadow'>
                      <i className='fab fa-instagram'></i>
                    </button>
                    <button className='btn_shadow'>
                      <i className='fab fa-twitter'></i>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                    {nameerror ? <span style={{color:"#591ca8"}} >Name Required*</span>: null}
                  </div>
                  <div className='input'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                    {phoneerror ? <span style={{color:"#591ca8"}} >Phone Number Required*</span>: null}
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                  {emailerror ? <span style={{color:"#591ca8"}} >Email Required*</span>: null}
                  {/* {!validationerror ? <span style={{color:"red"}} >Please Enter Correct Email*</span>: null} */}
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                  {subjecterror ? <span style={{color:"#591ca8"}} >Subject Required*</span>: null}
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                  {messageerror ? <span style={{color:"#591ca8"}} >Message Required*</span>: null}
                </div>
                <button className='btn_shadow' onClick={formSubmit} type="submit">
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
