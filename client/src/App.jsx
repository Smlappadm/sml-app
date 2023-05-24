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
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

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

   const roleReady = useSelector(state => state.rol);
  // const [roleReady, setRoleReady] = useState(null);

  // useEffect(() => {
  //   const fetchRole = async () => {
  //     await new Promise((resolve) => setTimeout(resolve, 3000)); // Esperar 3 segundos

  //     const role = roles; // Obtener el valor de role (puedes reemplazar esto con tu lógica real)

  //     setRoleReady(role); // Establecer roleReady con el valor de role después de 3 segundos
  //   };

  //   fetchRole();
  // }, []);

  // if (roleReady === null) {
  //   return <h1>cargando</h1>; // Renderizar algo mientras roleReady sea null (puede ser un mensaje de carga, por ejemplo)
  // }

   console.log(roleReady);
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
        <Route path="/home" element={ <Landing />} />
        <Route path="/" element={<Login />} />
        <Route path="/lideres" element={roleReady === "clevel" || roleReady === "leader" ? <AnalyticLeader /> : <h1>error 404</h1>} />
        <Route path="/lideres/analytics" element={roleReady === "clevel" || roleReady === "leader" ? <AnalyticLeader /> : <h1>error 404</h1>} />
        <Route path="/lideres/analytics/incidences" element={roleReady === "clevel" || roleReady === "leader" ? <Incidences /> : <h1>error 404</h1>} />
        <Route path="/clevel" element={roleReady === "clevel" || roleReady === "leader" ? <Clevel /> : <h1>error 404</h1>} />
        <Route path="/clevel/analytics" element={roleReady === "clevel" || roleReady === "leader" ? <Analytic /> : <h1>error 404</h1>} />
        <Route path="/corredores" element={roleReady === "corredor" || roleReady === "clevel" || roleReady === "leader" ? <CorredoresDashboard /> : <h1>error 404</h1>} />
        <Route path="/corredores/history" element={roleReady === "corredor" || roleReady === "clevel" || roleReady === "leader" ? <CorredoresAnlaytics /> : <h1>error 404</h1>} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/vendedores" element={roleReady === "vendedor" || roleReady === "clevel" || roleReady === "leader" ? <VendedoresDashboard /> : <h1>error 404</h1>} />
        <Route path="/vendedores/history" element={roleReady === "vendedor" || roleReady === "clevel" || roleReady === "leader" ? <VendedoresHistory /> : <h1>error 404</h1>} />
        <Route path="/vendedores/analytics" element={roleReady === "vendedor" || roleReady === "clevel" || roleReady === "leader" ? <VendedoresAnalytics /> : <h1>error 404</h1>} />
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