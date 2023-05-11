import React from "react";
import style from "./Landing.module.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Nav from "../../components/Nav/Nav";

function Landing() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className={style.container}>
      {isAuthenticated || location.state?.fromLogin ? (
        <>
          <Nav />
          <div>
            <h1>SML VIEWS</h1>
            <Link to="/employees" className={style.linksRoutes}>
              Employees
            </Link>
            <Link to="/analytics" className={style.linksRoutes}>
              Analytics
            </Link>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Landing;

// import React from "react";
// import style from "./Landing.module.css"
// import { Link } from "react-router-dom"
// import { useAuth0 } from "@auth0/auth0-react";

//
//function Employees() {
//   const {isAuthenticated} = useAuth0()
//   return (
//   <div className={style.container}>
//     <h1>SML VIEWS</h1>
//     {isAuthenticated || location.state?.fromLogin ? (
//         <>

//         <Link to="/employees" className={style.linksRoutes}>Employees</Link>
//         <Link to="/analytics" className={style.linksRoutes}>Analytics</Link>
//         </>
//       ):null
//     }
//     <Link to="/login" className={style.linksRoutes}>Login</Link>

//   </div>
//   );
