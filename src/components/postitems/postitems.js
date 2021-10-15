import React from 'react';
import './postitems.css';


export default function PostItems({post}) {
    return (
          <div className='wrapperPostItems'>
              <p>{post.name}</p> ... <p>{post.company_field}</p> <br />
              <p>{post.year}></p>        
          </div>
  );
  }
