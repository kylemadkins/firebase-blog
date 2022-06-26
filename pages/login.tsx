import { useContext } from "react";
import { AuthContext } from "../lib/AuthContext";
import { User } from "../lib/types";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import UsernameForm from "../components/UsernameForm";

export default function LoginPage() {
  const { user, username }: { user: User; username: string | null } =
    useContext(AuthContext);

  return (
    <main className="LoginPage">
      <div className="container">
        <h1>Welcome</h1>
        {user ? (
          !username ? (
            <UsernameForm />
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
