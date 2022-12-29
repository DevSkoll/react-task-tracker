import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

const App = () => {

const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Finish project proposal",
        day: "01.03.2022",
        reminder: true
    },
    {
        id: 2,
        text: "Attend team meeting at 10am",
        day: "01.04.2022",
        reminder: true
    },
    {
        id: 3,
        text: "Buy groceries",
        day: "01.05.2022",
        reminder: false
    },
    {
        id: 4,
        text: "Go for a run",
        day: "01.06.2022",
        reminder: true
    },
    {
        id: 5,
        text: "Meet with clients at 2pm",
        day: "01.07.2022",
        reminder: true
    },
    {
        id: 6,
        text: "Watch a movie",
        day: "01.08.2022",
        reminder: false
    },
    {
        id: 7,
        text: "Attend church service",
        day: "01.09.2022",
        reminder: false
    }
])

  // Delete Task
  const deleteTask = (id) => {
    console.log('Deleted', id);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Add Task
  const addTask = (newTask) => {
    console.log('Added', newTask);
    setTasks( ...tasks, newTask);
  }

  // Toggle Reminder
  const reminder = (id) => {
    console.log('Reminder', id)
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className='container'>
      <Header addTesk={addTask} text='The Great Task Tracker 9000'/>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={reminder} />
        ) : (
        <h3>No More Tasks!</h3>
        )}
    </div>
  );
}

export default App;
