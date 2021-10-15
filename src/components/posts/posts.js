import React from 'react';
import PostItems from '../postitems/postitems';
import './posts.css';

let postElements = [
    {
        'id':1,
        'year':2008,
        'name':'Программист IBM Lotus Notes',
        'company_field': 'Разработка ПО для банков',
    },
    {
        'id':2,
        'year':2009,
        'name':'Программист C#',
        'company_field': 'Государственное учреждение',
    },
    {
        'id':3,
        'year':2010,
        'name':'Системный инженер',
        'company_field': 'Аутсорсинг',
    },
    {
        'id':4,
        'year':2012,
        'name':'ИТ менеджер',
        'company_field': 'Дистрибьютор высокотехнологического оборудования',
    },
    {
        'id':5,
        'year':2015,
        'name':'Руководитель ИТ инфраструктуры',
        'company_field': 'Оптовая торговая компания',
    },
    {
        'id':6,
        'year':2016,
        'name':'CIO',
        'company_field': 'Частное образовательное учреждение',
    },
    {
        'id':7,
        'year':2019,
        'name':'Архитектор ИТ проектов',
        'company_field': 'Интегратор',
    },
    
];

export default function Posts() {
  return (
        <div className='postsWrapper'>
            <div className = 'posts'>
                {postElements.map((item,index) => 
                    <div key={postElements[index].id}><PostItems post={item}/> </div> )}
                
            </div>

            <div className = 'postDetail'>

            </div>
        </div>
);
}
