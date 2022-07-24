import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthentication } from '../hooks/useAuthentication';

export default function Navbar() {
  const { signout } = useAuthentication();
  return (
    <nav>
      <h1>My Reading List</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li onClick={signout}>Logout</li>
      </ul>
    </nav>
  );
}
