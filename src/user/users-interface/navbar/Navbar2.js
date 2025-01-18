import React from 'react'
import { BsDatabaseAdd, BsMenuButton } from 'react-icons/bs';
import { FaBusinessTime, FaTh, FaUserTie } from 'react-icons/fa';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { IoPersonCircle } from 'react-icons/io5';
import { TbLogout } from 'react-icons/tb';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar2 = () => {
        const navigate = useNavigate();
        
        const handleLogout = () => {
            localStorage.removeItem('token');
            navigate("/login");
        }
    
        const handleSignup = () => {
            localStorage.removeItem('token');
            navigate("/register");
        }
    
        const menuItem = [
            {
                path: "/profile",
                name: "Your Profile",
                icon: <IoPersonCircle />
            },
            {
                path: "/user-add",
                name: "Add your data",
                icon: <BsDatabaseAdd />
            },
            {
                path: "/consultant-list",
                name: "Consultant List",
                icon: <FaBusinessTime />
            },
            {
                path: "/dashboard",
                name: "Dashboard",
                icon: <FaTh />
            }
        ];
    
        const name = localStorage.getItem('username');
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark fixed-top "  data-bs-theme="dark">
                    
                    <div className="container-fluid bg-transparent">
                        <div className='d-flex'>
                            {!localStorage.getItem("token") ? (
                                <h1 className="navbar-brand ">CarrierRise</h1>
                            ):(
                                <>
                                <Link className="navbar-toggler " type="button" data-bs-toggle="offcanvas" 
                                style={{ outline: 'none', boxShadow: 'none',border: 'none',paddingTop:"8px"  }}
                                data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                                    <HiOutlineBars3  />
                                </Link>
                                <h1 className="navbar-brand">Welcome to CarrierRise</h1>
                                </>
                            )}
                        </div>
    
                        {!localStorage.getItem("token") ? (
                            <form className="d-flex">
                                <Link type="button" to='/login' className="btn btn-none-outline-light mx-2 my-3 nav-btton">Sign in</Link>
                                <div className='Sline my-3'>|</div>
                                <button type="button" onClick={handleSignup} className="btn btn-none-outline-light mx-2 my-3 nav-btton">Sign up</button>
                            </form>
                        ) : (
                            <div className="btn-group">
                                <button type="button" className="btn btn-dark">
                                    <FaUserTie className='user mx-2 '/>
                                    <b>{name ? name:'Guest'}</b>
                                </button>
    
                                <button type="button" className="btn btn-dark dropdown-toggle dropdown-toggle-marginLeft" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden"></span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li style={{paddingBottom:"5px"}}>
                                        <button onClick={handleLogout} className='btn btn-none-outline-light nav-btton dropdown-item' >
                                            <TbLogout className='user mx-3'/>Logout 
                                        </button>
                                    </li>
                                    <li style={{paddingBottom:"5px"}}>
                                        <Link to='/profile' className="btn btn-none-outline-light nav-btton dropdown-item">
                                            <IoPersonCircle className='user mx-3'/>View Profile
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
    
                        <div  style={{ width:'200px' }} className="offcanvas offcanvas-start text-bg-dark " tabIndex="-3" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                            <div className=" offcanvas-header ">
                            
                            <BsMenuButton className='mx-4'/>            
                                <h1>Filter</h1>
                            </div><hr />
                            
                            <div className="offcanvas-body">
                                {menuItem.map((item, index) => (
                                    <NavLink to={item.path} key={index} className="link text-light" activeclassname="active">
                                        <div className="icon">{item.icon}</div>
                                        <div className="link_text">{item.name}</div>
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
  )
}

export default Navbar2