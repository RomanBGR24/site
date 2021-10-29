import React from 'react';
import ProjectItem from '../project/project';




/*
const projectElements = [
  {
    'id':1,
    'year':2021,
    'name':'Проектирование отказоустойчивого ЦОД на базе гиперконвергентной технологии',
    'description':'Щелкни меня и я открою полное описание',
    'fullText':'Много чего сделал',
  },
  {
    'id':2,
    'year':2020,
    'name':'Миграция ЦОД заказчика в новую инфраструктуру и платформу',
    'description':'Щелкни меня и я открою полное описание',
    'fullText':'Много чего сделал',
  },
  {
    'id':3,
    'year':2019,
    'name':'Создание архитектуры образовательного приложения',
    'description':'Щелкни меня и я открою полное описание',
    'fullText':'Много чего сделал',
  },
];
*/
export default function Projects() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [projectElements, setItems] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3333/api/projects")
      .then(res => res.json())
      .then((res) => {
        setIsLoaded(true);
        setItems(res);
      }, (error) => {
        setIsLoaded(true);
        setError(error);
      }
      )
  } 
  ,[]);
  
  if(error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className='projectsWrapper'>
      <div className = 'projects'>
        {projectElements.map((item,index) => 
          <div key={projectElements[index].id}><ProjectItem project={item}/> </div> )}
      
      </div>
    </div>
  );
}