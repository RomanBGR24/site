import React from 'react';
import './postitems.css';


export default function PostItems(item) {
    return (
          <div className='wrapper'>
              <p>{item.name}</p> ... <p>item.company_field</p> <br />
          </div>
  );
  }