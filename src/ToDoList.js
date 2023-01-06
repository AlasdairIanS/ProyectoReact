import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <ul class="text-3xl list-disc">
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" style={{margin: '20px'}} onClick={handleFilter}>Limpiar Completadas</button>
        </ul>
    );
};

export default ToDoList;