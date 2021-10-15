import React from 'react';

export default function Roles() {
  let totalYearsNum = 13;
  return (
        <div className = 'rolesWrapper'> 
          <div className = 'rolesTotalYears'>
            <div className = 'rolesTotalYearsText'>Общий стаж:</div>
            <div className = 'rolesTotalYearsNum'>{totalYearsNum}</div>
          </div>

          <div className = 'rolesByRole'>
            <p>Функция JS, показывающая стаж по ролям ... </p>
          </div>
        </div>
);
}