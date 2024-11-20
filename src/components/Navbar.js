// import React from "react";
// import "../App.css";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// export default function Navbar(props) {
//   return (
//     <>
//       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//         <div className="container-fluid">
//           <a className="navbar-brand" href="/">
//             {/* My App */}
//             {props.heading}
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="/">
//                   {/* Home */}
//                   {props.home}
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/about">
//                   About Us
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/">
//                   Contact US
//                 </a>
//               </li>
//             </ul>
//             {/* <form className="d-flex" role="search">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button className="btn btn-outline-success" type="submit">
//                 Search
//               </button>
//             </form> */}
//             <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
//               <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
//               <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// Navbar.propTypes = {
//   // heading: PropTypes.string.isRequired,
//   heading: PropTypes.string,
//   home: PropTypes.string,
// };


// Navbar.defaultProps = {
//   heading: "App Name",
//   home: "App home"
// };



// import React from "react";
// import "../App.css";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

// export default function Navbar(props) {
//   return (
//     <>
//       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//         <div className="container-fluid">
//           <Link className="navbar-brand ms-4" to="/">
//             {props.heading}
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/">
//                   {props.home}
//                 </Link>
//               </li>
//               {/* <li className="nav-item">
//                 <Link className="nav-link" to="/about">
//                   About Us
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/">
//                   Contact US
//                 </Link>
//               </li> */}
//             </ul>
//             <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
//               <input
//                 className="form-check-input"
//                 onClick={props.toggleMode}
//                 type="checkbox"
//                 role="switch"
//                 id="flexSwitchCheckDefault"
//               />
//               <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
//                 Enable Dark Mode
//               </label>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// Navbar.propTypes = {
//   heading: PropTypes.string,
//   home: PropTypes.string,
// };

// Navbar.defaultProps = {
//   heading: "App Name",
//   home: "App home",
// };





import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          {/* Brand */}
          <Link className="navbar-brand md:ms-4" to="/">
            {props.heading}
          </Link>

          <div className="d-flex align-items-center d-lg-none">
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} me-2`}>
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefaultMobile"
              />
              <label className="form-check-label md:me-4" htmlFor="flexSwitchCheckDefault">
                Enable Dark Mode
              </label>
            </div>
            {/* Toggler button */}
            {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
          </div>

          {/* Navbar content */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {props.home}
                </Link>
              </li> */
              /* <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Contact US
                </Link>
              </li> */}
            </ul>

            {/* Dark mode switch for larger screens */}
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} d-none d-lg-block`}>
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label me-4" htmlFor="flexSwitchCheckDefault">
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}



