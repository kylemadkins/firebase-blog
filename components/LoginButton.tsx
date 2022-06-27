import { auth, googleAuthProvider } from "../lib/firebase";

export default function LoginButton() {
  const loginWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };
  return (
    <button className="button buttonGoogle" onClick={loginWithGoogle}>
      Sign in with Google
    </button>
  );
}
