import React from 'react';
import './prject.css';

export default function Project() {
    return (
        <div className='wrapperProjectItem'>
            <div className = 'projectItemName'><p>{project.name}</p></div>
            <div className = 'projectItemYear'><p>{project.year}</p></div>
            <div className = 'projectItemDescription'><p>{project.description}</p></div>      
        </div>
    );
  }