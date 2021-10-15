import React from 'react';
import { skillsData } from './data';
import SkillItem from '../skillitem/skillitem';

export default function Skills() {
  return (
    <div className="wrapperSkills">
    <h2>Мои навыки</h2>
    <ul className="accordeon">
      {skillsData.map((item, index) => (
        <SkillItem key={index} skill={item} />
      ))}
    </ul>
    </div>
  );
}