import React from 'react'
import Createtask from '../modals/Createtask'
import { useState } from 'react'

export const TodoList = () => {

    const [modal,setModal]=useState(false)
    const toggle=()=>{
        setModal(!modal)
    }
    return (
        <>

        <div className='header text-center'> 
            <h3> TodoList</h3>
            <button className="btn btn-primary mt-2" onClick={()=>setModal(true)}>Create task</button>
        </div>

        <div className="task-container">

        </div>
        <Createtask toggle={toggle} modal={modal}/>
        </>
    )
}
