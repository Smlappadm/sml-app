import styles from "./App.module.css";
import Landing from "./views/Landing/Landing";
import Analytics from "./views/Analytics/Analytics.jsx";
import Settings from "./views/Settings/Settings.jsx";
import Login from "./views/Login/Login";
import CorredoresDashboard from "./components/Corredores/Dashboard/CorredoresDashboard";
import VendedoresDashboard from "./components/Vendedores/Dashboard/VendedoresDashboard";
import { AnalyticLeader } from "./components/Lideres/Analytic/AnalyticLeader";
import { LideresDasboard } from "./components/Lideres/Dashboard/DashboardLeader";
import CorredoresAnlaytics from "./components/Corredores/Analitycs/CorredoresAnalytics";
import VendedoresHistory from "./components/Vendedores/analytics/VendedoresHistory";
import VendedoresAnalytics from "./components/Vendedores/analytics/VendedoresAnalytics";
import VentasDasboard from "./components/Vendedores/Dashboard/VentasDashboard";
import ReturnToPage from "./components/ReturnToPage/ReturnToPage";
import Lideres from "./components/Lideres/Lideres";
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

if (!"pk_test_Z3VpZGVkLWtvZGlhay0xMi5jbGVyay5hY2NvdW50cy5kZXYk") {
  throw new Error("Missing Publishable Key");
}

const clerkPubKey = "pk_test_Z3VpZGVkLWtvZGlhay0xMi5jbGVyay5hY2NvdW50cy5kZXYk";
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
    }
    checkRole();
  }, [role]);

  const handleSignOut = () => {
    localStorage.removeItem("roleReady");
    setRoleReady("");
  };

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
      onSignOut={handleSignOut}
    >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/sign-in/*"
          element={
            <SignIn
              routing="path"
              path="/sign-in"
              appearance={{
                variables: {
                  colorInputBackground: "#222131",

                  spacingUnit: "0.8rem",
                },
                layout: {
                  socialButtonsPlacement: "top",
                },
                elements: {
                  formButtonPrimary: styles.formButtonPrimary,
                  socialButtonsBlockButton: styles.socialButtons,
                  formFieldInput: styles.formFieldInput,
                  card: styles.card,
                  main: styles.main,
                  form: styles.form,
                  formField: styles.formField,
                  dividerRow: styles.dividerRow,
                  formFieldLabel: styles.formFieldLabel,
                  footerActionText: styles.footerActionText,
                  logoImage: styles.logoImage,
                  headerTitle: styles.headerTitle,
                  headerSubtitle: styles.headerSubtitle,
                  rootBox: styles.rootBox,
                },
              }}
            ></SignIn>
          }
        />

        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
        <Route path="*" element={<h1>error 404</h1>} />
        <Route path="/home" element={<Landing />} />
        <Route path="/" element={<Login />} />
        <Route
          path="/lideres"
          element={
            isRoleAllowed(roleReady) &&
            (roleReady === "clevel" || roleReady === "leader") ? (
              <LideresDasboard />
            ) : (
              <ReturnToPage />
            )
          }
        />
        <Route
          path="/lideres-analytics"
          element={
            isRoleAllowed(roleReady) &&
            (roleReady === "clevel" || roleReady === "leader") ? (
              <AnalyticLeader />
            ) : (
              <ReturnToPage />
            )
          }
        />
        <Route
          path="/lideres-employees"
          element={
            isRoleAllowed(roleReady) && roleReady === "leader" ? (
              <Lideres />
            ) : (
              <ReturnToPage />
            )
          }
        />
        <Route
          path="/lideres-incidences"
          element={isRoleAllowed(roleReady) ? <Incidences /> : <returnToPage />}
        />
        <Route
          path="/clevel"
          element={
            isRoleAllowed(roleReady) &&
            (roleReady === "clevel" || roleReady === "leader") ? (
              <Clevel />
            ) : (
              <ReturnToPage />
            )
          }
        />
        <Route
          path="/clevel-analytics"
          element={
            isRoleAllowed(roleReady) && roleReady === "clevel" ? (
              <Analytic />
            ) : (
              <ReturnToPage />
            )
          }
        />
        <Route
          path="/corredores"
          element={
            isRoleAllowed(roleReady) && roleReady === "corredor" ? (
              <CorredoresDashboard />
            ) : (
              <ReturnToPage />
            )
          }
        />
        <Route
          path="/corredores-history"
          element={
            isRoleAllowed(roleReady) && roleReady === "corredor" ? (
              <CorredoresAnlaytics />
            ) : (
              <ReturnToPage />
            )
          }
        />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route
          path="/vendedores"
          element={
            isRoleAllowed(roleReady) && roleReady === "vendedor" ? (
              <VendedoresDashboard />
            ) : (
              <ReturnToPage />
            )
          }
        />
        <Route
          path="/vendedores-history"
          element={
            isRoleAllowed(roleReady) && roleReady === "vendedor" ? (
              <VendedoresHistory />
            ) : (
              <ReturnToPage />
            )
          }
        />
        <Route
          path="/vendedores-ventas"
          element={
            isRoleAllowed(roleReady) && roleReady === "vendedor" ? (
              <VentasDasboard />
            ) : (
              <ReturnToPage />
            )
          }
        />
        <Route
          path="/vendedores-analytics"
          element={
            isRoleAllowed(roleReady) && roleReady === "vendedor" ? (
              <VendedoresAnalytics />
            ) : (
              <ReturnToPage />
            )
          }
        />
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
    <div className={styles.App}>
      <ClerkProviderWithRoutes />
    </div>
  );
}

export default App;
