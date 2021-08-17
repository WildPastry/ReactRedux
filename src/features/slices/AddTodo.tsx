import React from 'react'
import  { useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { setProjects } from './projectSlice';

import projectData from '../../data/projects.json';

export default function AddTodo(): JSX.Element {

    function resizeData(dataArray: any[], size: number)  {
        const resizedData = [].concat(dataArray).slice(0, size);
        // const resizedData = resizedData.slice(0, size);
        console.log(resizedData, size)

        handleSubmit(resizedData)
        // handleSubmit(resizedData[0].desc)
        // console.log(resizedData)
    }

   function sortData(dataArray: any[], size: number)  {
    // dataArray = [].concat(dataArray).sort(function (a, b) {  return a - b;  });
    // const sortedData = [].concat(dataArray).sort((a, b) => (a.id - b.id));
        const sortedData = [].concat(dataArray).sort((a, b) => (a.id > b.id ? 1 : -1));
        resizeData(sortedData, size)
        // handleSubmit(sortedData)
        // console.log(sortedData)
    }
    
    useEffect(() => {
        sortData(projectData, 9)
        // console.log(projectData)
        // resizeData(projectData, 9)
        // Your code here
      }, []);
      
    const dispatch = useDispatch();

    // const [projects, setProjects] = React.useState('');

    // function handleChange(e: { target: HTMLInputElement; }) {
    //     setProjects(e.target.value);
    // }

    function handleSubmit(projects: any[]) {
        // e.preventDefault()

        // if (!projects.trim()) {
        //     return
        // }
        // console.log(projects)
        dispatch(setProjects(projects))

        // setProjects('');
    }

    return (
        <div>
            {/* <input value={projects} onChange={handleChange} /> */}
            <button onClick={() => sortData(projectData, 18)}>SHOW MORE PROJECTS</button>
            <button onClick={() => sortData(projectData, 9)}>SHOW LESS PROJECTS</button>
        </div>
    )
}