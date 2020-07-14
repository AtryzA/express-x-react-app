import React from 'react';
import { Link } from 'react-router-dom';

export default function Service() {
  return (
    <div className="Service">
      <ul>
        <li><Link to="/">MyProfile</Link></li>
        <li><Link to="/">EditProfile</Link></li>
        <li><Link to="/">DeleteAccount</Link></li>
        <li><Link to="/signout">Signout</Link></li>
      </ul>
    </div>
  );
}