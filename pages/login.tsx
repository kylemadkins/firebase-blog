import { useContext } from "react";
import { firestore } from "../lib/firebase";
import { AuthContext } from "../lib/AuthContext";
import { User } from "../lib/types";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import UsernameForm from "../components/UsernameForm";

export default function LoginPage() {
  const { user, username }: { user: User; username: string | null } =
    useContext(AuthContext);

  const handleSubmit = async (usernameValue) => {
    const userDoc = firestore.doc(`users/${user.uid}`);
    const usernameDoc = firestore.doc(`usernames/${usernameValue}`);

    const batch = firestore.batch();
    batch.set(userDoc, {
      username: usernameValue,
      photoURL: user.photoURL || null,
      displayName: user.displayName
    });
    batch.set(usernameDoc, { uid: user.uid });
    await batch.commit();
  };

  return (
    <main className="LoginPage">
      <div className="container">
        <h1>Welcome</h1>
        {user ? (
          !username ? (
            <UsernameForm onSubmit={handleSubmit} />
          ) : (
            <div className="LoginPage__buttons">
              <LogoutButton />
            </div>
          )
        ) : (
          <div className="LoginPage__buttons">
            <LoginButton />
          </div>
        )}
      </div>
    </main>
  );
}
