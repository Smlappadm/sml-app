import style from './Login.module.css';
import {
	ClerkProvider,
	SignedIn,
	SignedOut,
	RedirectToSignIn,
	SignIn,
	SignUp,
	UserButton,
} from "@clerk/clerk-react";

function Login() {

	return (
		<div className={style.container}>
			<UserButton />
		</div>
	);
}

export default Login;
