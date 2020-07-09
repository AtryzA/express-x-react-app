import React from 'react';
import { Link } from 'react-router-dom';

export default function Top() {
  return (
    <div>
      <ul>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/signin">Signin</Link></li>
      </ul>
    </div>
  )
}