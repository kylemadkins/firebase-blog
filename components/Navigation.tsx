import Link from "next/link";

interface User {
  photoUrl: string | null;
}

export default function Navigation() {
  const user: User = { photoUrl: null };
  const username: string | null = { username: null }.username;

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
          <>
            <li>
              <Link href="/admin">
                <a>Create Post</a>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <a className="profilePic">
                  <img
                    src={user?.photoUrl}
                    alt={`${username}'s profile picture`}
                  />
                </a>
              </Link>
            </li>
          </>
        )}
        {!username && (
          <li>
            <Link href="/login">
              <a className="button button-primary">Login</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
