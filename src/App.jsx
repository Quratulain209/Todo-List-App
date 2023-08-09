import React, { useState } from 'react';

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
        <h1 className='pt-5 text-center text-danger'>TODO LIST APP</h1>
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