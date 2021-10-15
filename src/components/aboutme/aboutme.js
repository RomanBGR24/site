import React from 'react';
import './aboutme.css';
import myFoto from './myfoto.jpg';

export default function Me() {
  return (
        <div className='meWrapper'> 
            <div className='meFoto'>
                <img src={myFoto} alt='Это моя фотография' width='100' height='100' />
            </div>
            <div className='meText'>
                <p>Всем привет. Вы находитесь на сайте обо мне</p>
            </div>
        </div>
);
}
