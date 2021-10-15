import React from 'react';
import Me from '../aboutme/aboutme';
import Roles from '../roles/roles';
import Posts from '../posts/posts';

export default function Career() {
  return (
      <div className="wrapper">
              <h2>Моя карьера</h2>;
        <Me />
        <Roles />
        <Posts />
      </div>
);
}