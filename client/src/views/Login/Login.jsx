import { useAuth0 } from "@auth0/auth0-react";
import style from "./Login.module.css";
import Form from "../../components/Login/Form/Form";
import { validate } from "../../components/Login/Form/validation";

function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleFormLogin = (userData) => {
    const errors = validate(userData);
    const hasErrors = Object.values(errors).some((error) => error !== "");

    if (hasErrors) {
      // Mostrar errores de validación al usuario o realizar alguna acción adicional
      console.log("Errores de validación:", errors);
    } else {
      try {
        // Lógica para autenticar con el formulario
        // Realizar la solicitud al servidor para verificar las credenciales del usuario
        // Por ejemplo, utilizando una API o un servicio de autenticación

        // Si la autenticación es exitosa, redirigir a la ruta "/"
        // window.location.href = "/landing?fromLogin=true";
        window.location.href = {
          pathname: "/home",
          state: { fromLogin: true },
        };
      } catch (error) {
        // Manejo de errores de autenticación
        console.log(error);
      }
    }
  };

  return (
    <div className={style.container}>
      {!isAuthenticated && <Form Login={handleFormLogin} />}
      <h1 className="underline">hola</h1>
      <button
        onClick={() => loginWithRedirect()}
        className={`${style["auth-button"]} ${style["google-button"]}`}
      >
        <span className={style["google-icon"]}></span>

        <span className={style["button-text"]}>Google</span>
      </button>
    </div>
  );
}

export default Login;

// {/* <p>Username</p>
//       <input type="text" placeholder="Title" />
//       <p>Password</p>
//       <input type="password" placeholder="Title" />
//       <label>
//         <input type="checkbox" /> Remember me
//       </label>
//       <p>Forgot your password? <a href="#">Reset Password</a></p>
//       <button type="submit">Login</button> */}

// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// function Login() {
//   const { loginWithRedirect } = useAuth0();
//   const googleRedirectUri = window.location.origin + "/login/callback"

//   const handleGoogleLogin = () => {
//     loginWithRedirect({
//       screen_hint: "signup",
//       connection: "google-oauth2",
//       redirect_uri: googleRedirectUri,
//     });
//   };
//   const handleMicrosoftLogin = () => {
//     window.location.href = `https://login.microsoftonline.com/${microsoftTenantId}/oauth2/v2.0/authorize?client_id=${microsoftClientId}&response_type=code&redirect_uri=${microsoftRedirectUri}&scope=user.read%20openid%20profile`;
//   };

//   const handleSlackLogin = () => {
//     window.location.href = `https://${slackWorkspace}.slack.com/oauth/authorize?client_id=${slackClientId}&scope=identity.basic`;
//   };

//   return (
//     <div>
//       <button onClick={handleGoogleLogin}>Iniciar sesión con Google</button>
//       <button onClick={handleMicrosoftLogin}>Iniciar sesión con Microsoft</button>
//       <button onClick={handleSlackLogin}>Iniciar sesión con Slack</button>
//     </div>
//   );
// }

//  export default Login;
