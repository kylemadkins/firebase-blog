import Link from "next/link";

interface User {
  photoUrl: string | null;
}

export default function Navigation() {
  const user: User = {
    photoUrl:
      "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
  };
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
          <li className="adminLinks">
            <Link href="/admin">
              <a className="button buttonPrimary">Create Post</a>
            </Link>
            <Link href={`/${username}`}>
              <a
                className="profilePic"
                style={{ backgroundImage: `url(${user?.photoUrl})` }}
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
