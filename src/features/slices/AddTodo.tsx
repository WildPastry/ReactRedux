import React from 'react'
import  { useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice';

import projectData from '../../data/projects.json';

export default function AddTodo(): JSX.Element {

    useEffect(() => {
        console.log(projectData)
        // projects = projectData
        handleSubmit(projectData[0].desc)
        // Your code here
      }, []);
      
    const dispatch = useDispatch();

    // const [projects, setProjects] = React.useState('');

    // function handleChange(e: { target: HTMLInputElement; }) {
    //     setProjects(e.target.value);
    // }

    function handleSubmit(projects: any) {
        // e.preventDefault()

        // if (!projects.trim()) {
        //     return
        // }

        dispatch(addTodo(projects))

        // setProjects('');
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* <input value={projects} onChange={handleChange} /> */}
            <button type="submit">Add Todo</button>
        </form>
    )
}