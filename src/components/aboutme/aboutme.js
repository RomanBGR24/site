import React from 'react';
import './aboutme.css';

export default function Me() {
  return (
        <div className='meWrapper'> 
            <div className='meFoto'>
                <img src='myfoto.jpg'></img>
            </div>
            <div className='meText'>
                <p>Всем привет. Вы находитесь на сайте обо мне</p>
            </div>
        </div>
);
}