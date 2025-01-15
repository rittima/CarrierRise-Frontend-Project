import React from 'react'
import { Link } from 'react-router-dom';
import '../../../App.css'

const Footer = () => {
  return (
    <div>
      <div>
        <footer
          className="bd-footer py-4 py-md-5 mt-5 bg-footer"
        >  
         {/* bd-footer py-4 py-md-5 mt-5 bg-body-tertiary */}
          <div className="container p-4 ">
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h4 className="text-uppercase mb-4 font-weight-bold">
                    CARRIERISE
                  </h4>
                  <p>
                    Here you can get the usefull information, to know more clik on the given links.
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Products
                  </h6>
                  <p>
                    <Link className="text-white">MDBootstrap</Link>
                  </p>
                  <p>
                    <Link className="text-white">MDWordPress</Link>
                  </p>
                  <p>
                    <Link className="text-white">BrandFlow</Link>
                  </p>
                  <p>
                    <Link className="text-white">Bootstrap Angular</Link>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Useful links
                  </h6>
                  <p>
                    <Link className="text-white">Your Account</Link>
                  </p>
                  <p>
                    <Link className="text-white">Become an Affiliate</Link>
                  </p>
                  <p>
                    <Link className="text-white">Shipping Rates</Link>
                  </p>
                  <p>
                    <Link className="text-white">Help</Link>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>
                  <p>
                    <i className="fas fa-home mr-3"></i> West Bengal, WB 10012, India
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> info@carrierise.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> + 91 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> + 91 234 567 89
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-3" />

            <section className="p-3 pt-0">
              <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-8 text-center text-md-start">
                  {/* <!-- Copyright --> */}
                  <div className="p-3 mb-3">
                  <p>&copy; {new Date().getFullYear()} Copyright : &nbsp;
                    <Link className="text-white" href="/">
                        Carrierise.com
                    </Link></p>
                  </div>
                </div>

                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                  {/* <!-- Facebook --> */}
                  <Link
                    className="btn btn-outline-light btn-floating btn-facbook text-white m-1"
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Link>

                  {/* <!-- Twitter --> */}
                  <Link
                    className="btn btn-outline-light text-white btn-floating btn-twiter m-1"
                    role="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </Link>

                  {/* <!-- Google --> */}
                  <Link
                    className="btn btn-outline-light text-white btn-floating btn-google m-1"
                    role="button"
                  >
                    <i className="fab fa-google"></i>
                  </Link>

                  {/* <!-- Instagram --> */}
                  <Link
                    className="btn btn-outline-light text-white btn-floating btn-insta m-1"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer