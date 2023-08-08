import React, { useState } from 'react';
// import './App.css'

export default function App() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);
  const [editedIndex, setEditedIndex] = useState(-1);
  const [updateTask, setUpdateTask] = useState('');

  const ADDList = () => {
    if (task !== '') {
      setList([...list, task]);
      setTask('');
    }
  }

  const deleteTask = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  }

  const Edit = (key, updates) => {
    setEditedIndex(key);
    setUpdateTask(updates);
  }

  const saveEdit = (key) => {
    const updatedList = [...list];
    updatedList[key] = updateTask;
    setList(updatedList);
    setEditedIndex(-1);
  }

  return (
    <>
      <div className="container" >
        <h1 className='pt-5 text-center'>To-Do List</h1>
        <div className="input-group mt-3 ">
          <input
            type="text"
            className="form-control py-2"
            placeholder="Enter a new Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="btn btn-dark px-4" type="submit" onClick={ADDList}>ADD TODO</button>
        </div>

        <ul className='list-unstyled'>

          {list.map((val, key) => (

            <li key={key} className='mt-3 border d-flex align-items-center justify-content-between p-1 px-3 '>

              {editedIndex === key ? (
                <>
                  <input className='border-0 flex-grow-1 me-2'
                    type="text"
                    value={updateTask}
                    onChange={(e) => setUpdateTask(e.target.value)}
                    // onClick={}
                  />
                  <div className=''>
                    <button className='btn btn-success' onClick={() => saveEdit(key)}>Save</button>
                  </div>
                </>
              ) : (
                <>
                  {val}
                  <div className=' '>
                    <button className='btn btn-success' onClick={() => Edit(key, val)}>Edit</button>
                    <button className='btn btn-danger ms-2' onClick={() => deleteTask(key)}>Delete</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');

//   const handleInputChange = (event) => {
//     setNewTask(event.target.value);
//   };

//   const handleAddTask = () => {
//     if (newTask.trim() !== '') {
//       setTasks([...tasks, newTask]);
//       setNewTask('');
//     }
//   };

//   const handleDeleteTask = (index) => {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="App">
//       <h1>To-Do List</h1>
//       <div className="task-input">
//         <input
//           type="text"
//           value={newTask}
//           onChange={handleInputChange}
//           placeholder="Enter a new task"
//         />
//         <button onClick={handleAddTask}>Add</button>
//       </div>
//       <ul className="task-list">
//         {tasks.map((task, index) => (
//           <li key={index}>
//             {task}
//             <button onClick={() => handleDeleteTask(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
