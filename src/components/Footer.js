import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
const Footer = () => {
  var today = new Date();

  return (
    // <footer class="text-gray-600 body-font bg-neutral-800">
    //   <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    //     <p class="text-sm font-semibold text-sky-500 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
    //       © {" " + new Date().getFullYear() + " . "} Sales — Management
    //     </p>
    //     <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    //       <a class="text-gray-500 cursor-pointer hover:text-red-600">
    //         <svg
    //           fill="currentColor"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           stroke-width="2"
    //           class="w-5 h-5"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    //         </svg>
    //       </a>
    //       <a class="ml-3 text-gray-500 cursor-pointer hover:text-red-600">
    //         <svg
    //           fill="currentColor"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           stroke-width="2"
    //           class="w-5 h-5"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
    //         </svg>
    //       </a>
    //       <a class="ml-3 text-gray-500 cursor-pointer hover:text-red-600">
    //         <svg
    //           fill="none"
    //           stroke="currentColor"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           stroke-width="2"
    //           class="w-5 h-5"
    //           viewBox="0 0 24 24"
    //         >
    //           <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    //           <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
    //         </svg>
    //       </a>
    //       <a class="ml-3 text-gray-500 cursor-pointer hover:text-red-600">
    //         <svg
    //           fill="currentColor"
    //           stroke="currentColor"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           stroke-width="0"
    //           class="w-5 h-5"
    //           viewBox="0 0 24 24"
    //         >
    //           <path
    //             stroke="none"
    //             d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
    //           ></path>
    //           <circle cx="4" cy="4" r="2" stroke="none"></circle>
    //         </svg>
    //       </a>
    //     </span>
    //   </div>
    // </footer>
    <MDBFooter bgColor="dark" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-3 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-3">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <img
                src={process.env.PUBLIC_URL + "images/img.png"}
                style={{ marginTop: "10px", width: "200px", height: "200px" }}
              />
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  About Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vehicle Fleet
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Services
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Contact Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  FAQ
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Our Partners
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> 35/15, Nawala Road,
                Narahenpita,Colombo 5, Sri Lanka
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                Car4u@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> +94 71 878 9343
              </p>
              <p>
                <i className="fas fa-print me-3"></i> +94 71 878 9343
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright: Car4u(Private) Limited
      </div>
    </MDBFooter>
  );
};

export default Footer;
