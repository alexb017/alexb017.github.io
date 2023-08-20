import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <ul className="nav-ul">
          <li className="nav-item">
            <NavLink to="/">Alex B.</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 64 64"
              >
                <path
                  fill="#83bf4f"
                  d="M48.5 38.4c-8 0-10.1-6.6-10.1-6.6s2.1-8.3 10.1-8.3C54 23.5 63 31 63 31s-9 7.4-14.5 7.4zM18 6.7c6.3 6.4 2.6 13.6 2.6 13.6s-7.7 4.4-14-2C2.3 13.9 1 1 1 1s12.7 1.3 17 5.7z"
                />
                <g fill="#75a843">
                  <path d="M63 31c-5-1-10.1-1.6-15.1-1c-4.9.5-9.9 2.3-13.2 5.7c-1.7 1.7-2.9 3.7-3.5 5.9c-.1.5-.2 1.1-.3 1.6c-.1.6 0 1 0 1.7l.2 3.8l.7 15.3h-5l.8-15.3l.2-3.8c0-.6.1-1.4.2-2.1c.1-.7.3-1.4.5-2.1c.9-2.7 2.6-5 4.7-6.7c2.1-1.8 4.5-3 7-3.9c2.5-.8 5.1-1.2 7.7-1.3c5.1-.2 10.2.8 15.1 2.2" />
                  <path d="M1 1c5.2 3.2 10 7.2 14.2 11.7c4.2 4.5 8 9.4 11.1 14.8c1.5 2.7 3 5.5 3.9 8.7c.2.8.4 1.6.5 2.5l.1 2.4l.2 4.6l.8 18.3h-5l.8-18.4l.2-4.6l.1-1.1v-1.1c0-.6-.1-1.3-.3-2c-.6-2.8-1.8-5.6-3.2-8.3c-2.7-5.4-6.2-10.4-10.1-15.1C10.5 8.7 6.1 4.5 1 1" />
                </g>
              </svg>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 64 64"
              >
                <path
                  fill="#ffce31"
                  d="m44.5 2l-9 2.5L29.4 2l-9.9 34.4h10.4L20.8 62l22.4-34.4H29.7z"
                />
              </svg>
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <ul className="nav-ul">
          <li>
            <a href="https://github.com/alexb017">GitHub</a>
          </li>
          <li>
            <button type="button"></button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
