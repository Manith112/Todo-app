import React from "react";

const Listing = ({ tasks, onDelete, onUpdate}) => {
    return (
        <div className="grid">
             {tasks.map((task) => (
        <div key={task.id} className="card">
          <div className="button">
          <button onClick={() => onDelete(task.id)}>Delete</button>
          <button onClick={() => onUpdate(task.id)}>Update</button>
          </div>
          <div className="task-title">
            <h3>{task.title}</h3>
           <span>{task.description}</span>
           </div>
        </div>
      ))}
        </div>
    )
    
}
export default Listing;