import { auth } from "../lib/firebase";

export default function LogoutButton() {
  return (
    <button
      className="button buttonPrimary"
      onClick={() => {
        auth.signOut();
      }}
    >
      Logout
    </button>
  );
}
