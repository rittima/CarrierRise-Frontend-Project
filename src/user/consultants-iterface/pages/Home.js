
import bgImg from '../../image/background.jpg'
import { useNavigate } from 'react-router-dom';
import Footer from '../navbar/Footer';
import { useEffect } from 'react';

const Home = () => {
  const navigate=useNavigate();
  const name = localStorage.getItem('username');

  useEffect(()=>{
      const jwtToken=localStorage.getItem('token');
      if (!jwtToken) {
        navigate("/",{replace:false});
      }
       
    },[navigate])

  const handleClick=() =>{
    navigate("/dashboard")
  }
  return (
    <div>
    <div className='bg-body' style={{ 
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImg})`,
      // color:'white'
    }}>
        <div className="container row" style={{paddingTop:'5%'}}>
          <div className='col-sm-7 ' style={{padding:"5%"}}>
            <h1>Hello {name ? name:'Guest'} !
            {/* <h1>Hello {name} ! */}
              <p className='my-3'>Welcome to Carrierise</p>
            </h1>
          </div>
          <div className="card col-sm-5  home-body" style={{width: "18rem" , float: 'left', marginLeft: '10%' ,padding:"1%",height:"22rem"}}>
            <div className="card-body">
              <h5 className="card-title">Hi there</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">~CarrierRise</h6>
              <p className="card-text">Welcome {!name ? name:'Guest'} to our our website where consunltants guide the students regarding tech or IT industry..please register your self before login  </p>
              <p className="card-text"> If you want to guide someone the login as a consultant ... </p>
              <button type="button" className="btn btn-dark" onClick={handleClick}>Get Started</button>
            </div>  
          </div>
        </div>
    <Footer/>
    </div>
    </div>
  )
}

export default Home



