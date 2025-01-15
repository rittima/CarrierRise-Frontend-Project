import { BsDatabaseAdd, BsMenuButton } from 'react-icons/bs'
import { FaTh, FaUserTie } from 'react-icons/fa'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { IoPersonCircle } from 'react-icons/io5'
import { SiGooglemeet } from 'react-icons/si'
import { TbLogout } from 'react-icons/tb'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar1 = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/login");
    }

    const handleSignup = () => {
        localStorage.removeItem('token');
        navigate("/register");
    }

    const username = localStorage.getItem('username');
    const menuItem = [
        { path: '/dashboard', name: 'Dashboard', icon: <FaTh /> },
        { path: '/profile', name: 'Your Profile', icon: <IoPersonCircle /> },
        { path: '/consultant-add', name: 'Add your data', icon: <BsDatabaseAdd /> },
        { path: '/meeting', name: 'Meeting', icon: <SiGooglemeet /> },
    ];

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark fixed-top "  data-bs-theme="dark">
                <div className="container-fluid my-2">
                    <div className="d-flex align-items-center">
                        {!localStorage.getItem('token') ? (
                            <h1 className="navbar-brand">CarrierRise</h1>
                        ) : (
                            <>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasDarkNavbar"
                                    aria-controls="offcanvasDarkNavbar"
                                    style={{ border: 'none' }}
                                >
                                    <HiOutlineBars3 />
                                </button>
                                <h1 className="navbar-brand">Welcome to CarrierRise</h1>
                            </>
                        )}
                    </div>

                    {!localStorage.getItem("token") ? (
                        <form className="d-flex">
                            <Link to="/login" className="btn btn-dark mx-2 my-3">
                                Sign in
                            </Link>
                            <span className="text-light mx-2 my-4">|</span>
                            <button onClick={handleSignup} className="btn btn-dark mx-2 my-3">
                                Sign up
                            </button>
                        </form>
                    ) : (
                        <div className="btn-group">
                            <button className="btn btn-dark">
                                <FaUserTie className="me-2" />
                                <b>{username || 'Guest'}</b>
                            </button>
                            <button
                                className="btn btn-dark dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            ></button>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li>
                                    <button onClick={handleLogout} className="dropdown-item">
                                        <TbLogout className="me-2" />
                                        Logout
                                    </button>
                                </li>
                                <li>
                                    <Link to="/profile" className="dropdown-item">
                                        <IoPersonCircle className="me-2" />
                                        View Profile
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}

                    <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
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

export default Navbar1