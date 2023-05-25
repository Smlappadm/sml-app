import "./App.css";
import Landing from "./views/Landing/Landing";
import Analytics from "./views/Analytics/Analytics.jsx";
import Settings from "./views/Settings/Settings.jsx";
import Login from "./views/Login/Login";
import CorredoresDashboard from "./components/Corredores/Dashboard/CorredoresDashboard";
import VendedoresDashboard from "./components/Vendedores/Dashboard/VendedoresDashboard";
import { AnalyticLeader } from "./components/Lideres/Analytic/AnalyticLeader";
import CorredoresAnlaytics from "./components/Corredores/Analitycs/CorredoresAnalytics";
import VendedoresHistory from "./components/Vendedores/analytics/VendedoresHistory";
import VendedoresAnalytics from "./components/Vendedores/analytics/VendedoresAnalytics";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Clevel from "./components/C-Level/Clevel";
import Analytic from "./components/C-Level/Analytics/Analytic";
import Incidences from "./components/Lideres/incidences/incidencias";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

if (!"pk_test_ZmFtb3VzLWRyYWdvbi0xMi5jbGVyay5hY2NvdW50cy5kZXYk") {
  throw new Error("Missing Publishable Key");
}

const clerkPubKey = "pk_test_ZmFtb3VzLWRyYWdvbi0xMi5jbGVyay5hY2NvdW50cy5kZXYk";
function PublicPage() {
  return (
    <>
      <h1>Public page</h1>
      <a href="/protected">Go to protected page</a>
    </>
  );
}

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();
  const role = useSelector((state) => state.rol);
  const [roleReady, setRoleReady] = useState("");

  function isRoleAllowed(role) {
    const allowedRoles = ["vendedor", "clevel", "leader", "corredor"];
    return allowedRoles.includes(role);
  }

  useEffect(() => {
    const checkRole = async () => {
      if (role !== undefined && role !== null && role !== "") {
        setRoleReady(role);
        localStorage.setItem("roleReady", role);
      }
    };

    const storedRoleReady = localStorage.getItem("roleReady");
    if (storedRoleReady) {
      setRoleReady(storedRoleReady);
    } else {
      checkRole();
    }
  }, [role]);

  console.log(isRoleAllowed(roleReady));

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/sign-in/*"
          element={<SignIn routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
        <Route path="*" element={<h1>error 404</h1>} />
        <Route path="/home" element={<Landing />} />
        <Route path="/" element={<Login />} />
        <Route path="/lideres" element={isRoleAllowed(roleReady) ? <AnalyticLeader /> : <h1>error 404</h1>} />
        <Route path="/lideres/analytics" element={isRoleAllowed(roleReady) ? <AnalyticLeader /> : <h1>error 404</h1>} />
        <Route path="/lideres/analytics/incidences" element={isRoleAllowed(roleReady) ? <Incidences /> : <h1>error 404</h1>} />
        <Route path="/clevel" element={isRoleAllowed(roleReady) && roleReady === "clevel" ? <Clevel /> : <h1>error 404</h1>} />
        <Route path="/clevel/analytics" element={isRoleAllowed(roleReady) ? <Analytic /> : <h1>error 404</h1>} />
        <Route path="/corredores" element={isRoleAllowed(roleReady) ? <CorredoresDashboard /> : <h1>error 404</h1>} />
        <Route path="/corredores/history" element={isRoleAllowed(roleReady) ? <CorredoresAnlaytics /> : <h1>error 404</h1>} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/vendedores" element={isRoleAllowed(roleReady) ? <VendedoresDashboard /> : <h1>error 404</h1>} />
        <Route path="/vendedores/history" element={isRoleAllowed(roleReady) ? <VendedoresHistory /> : <h1>error 404</h1>} />
        <Route path="/vendedores/analytics" element={isRoleAllowed(roleReady) ? <VendedoresAnalytics /> : <h1>error 404</h1>} />
        <Route
          path="/protected"
          element={
            <>
              <SignedIn>
                <Landing />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
}

function App() {
  return (
    <div className="App">
      <ClerkProviderWithRoutes />
    </div>

  );
}

export default App;