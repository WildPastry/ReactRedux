import React from 'react'
import  { useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { setProjects } from './slices/projectSlice';

import projectData from '../data/projects.json';

export default function SetProjects(): JSX.Element {

    function resizeData(dataArray: any[], size: number)  {
        const resizedData = [].concat(dataArray).slice(0, size);
        handleSubmit(resizedData)
    }

   function sortData(dataArray: any[], size: number)  {
        const sortedData = [].concat(dataArray).sort((a, b) => (a.id > b.id ? 1 : -1));
        resizeData(sortedData, size)
    }
    
    useEffect(() => {
        sortData(projectData, 9)
      }, []);
      
    const dispatch = useDispatch();

    function handleSubmit(projects: any[]) {
        dispatch(setProjects(projects))
    }

    return (
        <div>
            <button onClick={() => sortData(projectData, 18)}>SHOW MORE PROJECTS</button>
            <button onClick={() => sortData(projectData, 9)}>SHOW LESS PROJECTS</button>
        </div>
    )
}