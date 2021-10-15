import React from 'react';
import './skillitem.css';

export default function Skills(skill) {
    return (
        <li className="accordion_item">
            <button className="accordion_button">
                {skill.domain}
                <span className="accordion_control">—</span>
            </button>
            <div className="skillArray">
                <ul className="skillArray_list">
                    {skill.skills.map((item, index) => (
                        <li key={index}>{item.name} ... {item.text} </li>
                     ))}
                </ul>
            </div>
        </li>
    );
};