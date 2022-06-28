import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../lib/AuthContext";
import { User } from "../lib/types";

export default function Navigation() {
  const { user, username }: { user: User; username: string | null } =
    useContext(AuthContext);

  return (
    <nav className="Navigation">
      <ul>
        <li>
          <Link href="/">
            <a className="feedLink">
              <img src="/images/code.svg" alt="" />
              NXT
            </a>
          </Link>
        </li>
        {username && (
          <li className="adminLinks">
            <Link href="/admin">
              <a className="button buttonPrimary">Create Post</a>
            </Link>
            <Link href={`/${username}`}>
              <a
                className="profilePic"
                style={{ backgroundImage: `url(${user?.photoURL})` }}
              />
            </Link>
          </li>
        )}
        {!username && (
          <li>
            <Link href="/login">
              <a className="button buttonPrimary">Login</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
