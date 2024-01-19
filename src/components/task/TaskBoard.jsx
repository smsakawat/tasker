import { useState } from 'react';
import SearchTask from './SearchTask';
import TaskActions from './TaskActions';
import TaskList from './TaskList';
import TaskModal from './TaskModal';

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: 'Master React',
    description:
      'Master react like a pro as much as you can, you have to stand out from too many competitors, so you know better',
    tags: ['web', 'react', 'js'],
    priority: 'High',
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [modalOpen, setModalOpen] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  // Handle add task
  const handleAddTask = () => {
    setModalOpen(true);
  };

  // Handle edit
  const handleEditClick = task => {
    setTaskToUpdate(task);
    setModalOpen(true);
  };

  // Handling add and edit task
  const handleAddEditTask = (newTask, isAdd) => {
    console.log(newTask);
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map(task => {
          if (task.id === newTask.id) return { ...newTask };
          return task;
        })
      );
      setTaskToUpdate(null);
    }
    setModalOpen(false);
  };

  // Handle task delete
  const handleDeleteTask = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Handling delete all task
  const handleDeleteAllTask = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };

  // Handle Modal close
  const handleModalClose = () => {
    setModalOpen(false);
  };
  return (
    <>
      <section className="mb-20" id="tasks">
        {modalOpen && (
          <TaskModal
            onClose={handleModalClose}
            onSave={handleAddEditTask}
            taskToUpdate={taskToUpdate}
          />
        )}
        <div className="container mx-auto">
          <SearchTask />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions
              onAddTask={handleAddTask}
              onDeleteAll={handleDeleteAllTask}
            />
            <TaskList
              tasks={tasks}
              onEditClick={handleEditClick}
              onDeleteTask={handleDeleteTask}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
