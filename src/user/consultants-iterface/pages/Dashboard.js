import React, { useEffect } from 'react'
import Slide from './Slide';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate=useNavigate();
  const name = localStorage.getItem('username');

  useEffect(()=>{
    const jwtToken=localStorage.getItem('token');
    if (!jwtToken) {
      navigate("/login",{replace:false});
    }
     
  },[navigate])
  return (
    <>
    
    <div className="container my-3" style={{paddingTop:"6%"}}>
      <div className='container'>
        <h1>Hi {name ? name:'Guest'}, welcome to CarrierRise</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <h4 className="fst-italic" >"We are eager to have you on our website."</h4>
        <img style={{marginLeft:"20%"}} src="https://img.freepik.com/free-vector/cute-bot-say-users-hello-chatbot-greets-online-consultation_80328-195.jpg?w=740&t=st=1726583386~exp=1726583986~hmac=ccbc36e251983d509a17a850e61b0bdbe257bf1a891a00f0c843b549169c0f5e" width={'30%'} alt="Cute chatbot saying hello" />
        </div><footer className="blockquote-footer">Platform build by <cite title="Source Title">CarrierRise.com</cite></footer>
      </div>
      
      <Slide/>
    </div>
      
    </>
  )
}

export default Dashboard
