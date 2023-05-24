import "./App.css";
import Landing from "./views/Landing/Landing";
import Lideres from "./components/Lideres/Lideres";
import Analytics from "./views/Analytics/Analytics.jsx";
import Settings from "./views/Settings/Settings.jsx";
import Login from "./views/Login/Login";
import CorredoresDashboard from "./components/Corredores/Dashboard/CorredoresDashboard";
import VendedoresDashboard from "./components/Vendedores/Dashboard/VendedoresDashboard";
import { AnalyticLeader } from "./components/Lideres/Analytic/AnalyticLeader";
import CorredoresAnlaytics from "./components/Corredores/Analitycs/CorredoresAnalytics";
import VendedoresHistory from "./components/Vendedores/analytics/VendedoresHistory";
import VentasDashboard from "./components/Vendedores/Dashboard/VentasDashboard";
import VendedoresAnalytics from "./components/Vendedores/analytics/VendedoresAnalytics";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
  UserButton,
} from "@clerk/clerk-react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Clevel from "./components/C-Level/Clevel";
import Analytic from "./components/C-Level/Analytics/Analytic";
import Incidences from "./components/Lideres/incidences/incidencias";

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

function ProtectedPage() {
  return (
    <>
      <h1>Protected page</h1>
      <UserButton />
    </>
  );
}

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Routes>
        <Route path="/" element={<PublicPage />} />
        <Route
          path="/sign-in/*"
          element={<SignIn routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
        <Route path="/home" element={<Landing />} />
        <Route path="/" element={<Login />} />
        <Route path="/lideres" element={<AnalyticLeader />} />
        <Route path="/lideres-employees" element={<Lideres />} />
        <Route path="/lideres-analytics-incidences" element={<Incidences />} />
        <Route path="/clevel" element={<Clevel />} />
        <Route path="/clevel-analytics" element={<Analytic />} />
        <Route path="/corredores" element={<CorredoresDashboard />} />
        <Route path="/corredores-history" element={<CorredoresAnlaytics />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/vendedores" element={<VendedoresDashboard />} />
        <Route path="/vendedores-ventas" element={<VentasDashboard />} />
        <Route path="/vendedores-history" element={<VendedoresHistory />} />
        <Route path="/vendedores-analytics" element={<VendedoresAnalytics />} />
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
    // <div className="App">
    //   <Routes>
    //     <Route path="/home" element={<Landing />} />
    //     <Route path="/" element={<Login />} />
    //     <Route path="/employees" element={<Employees />} />
    //     <Route path="/employees/analytics" element={<AnalyticLeader />} />
    //     <Route path="/corredores" element={<CorredoresDashboard />} />
    //     <Route path="/corredores/analytics" element={<CorredoresAnlaytics />}/>
    //     <Route path="/analytics" element={<Analytics />} />
    //     <Route path="/settings" element={<Settings />} />
    //     <Route
    //       path="/vendedores"
    //       element={<VendedoresDashboard/>}
    //     />
    //     <Route path="/vendedores/analytics" element={<VendedoresHistory/>} />
    //   </Routes>

    //   {(
    //     <div className="App flex items-center justify-center">
    //       <img
    //         className="opacity-20 w-4/5 mt-[2%]"
    //         src="https://cdn.discordapp.com/attachments/1105243107555037294/1106577865698459788/White_Logo_Social_Media_Lab.png"
    //       />
    //     </div>
    //   )}
    // </div>
  );
}

export default App;
