import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SearchTask from './SearchTask';
import TaskActions from './TaskActions';
import TaskList from './TaskList';
import TaskModal from './TaskModal';

const TaskBoard = () => {
  const initialTasks = [
    {
      id: uuidv4(),
      title: 'Hydration Reminder',
      description: 'Drink a glass of water right now to stay hydrated.',
      tags: ['Hydration', 'Wellness', 'Health'],
      priority: 'High',
      isFavorite: true,
    },
    {
      id: uuidv4(),
      title: 'Digital Detox',
      description: 'Take a 30-minute break from screens for mindfulness.',
      tags: ['Detox', 'Rest', 'SelfCare'],
      priority: 'High',
      isFavorite: false,
    },
  ];
  const [tasks, setTasks] = useState(initialTasks);
  const [modalOpen, setModalOpen] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  // Handle Modal close
  const handleModalClose = () => {
    setTaskToUpdate(null);
    setModalOpen(false);
  };

  // Handle add task
  const handleAddTask = () => {
    setModalOpen(true);
  };

  // Handle edit
  const handleEditTask = task => {
    setTaskToUpdate(task);
    setModalOpen(true);
  };

  // Handling add and edit task
  const handleAddEditTask = (newTask, isAdd) => {
    if (isAdd) {
      newTask.isFavorite = false;
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map(task => {
          if (task.id === newTask.id) return newTask;
          return task;
        })
      );
    }
    handleModalClose();
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

  // Handling favorite task
  const handleFavoriteTask = taskId => {
    setTasks(
      tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, isFavorite: !task.isFavorite };
        }
        return task;
      })
    );
  };

  // Search tasks
  const handleTaskSearch = value => {
    setTasks(
      tasks.filter(task =>
        task.title.toLowerCase().includes(value.trim().toLowerCase())
      )
    );
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
          <SearchTask onSearch={handleTaskSearch} />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions
              tasks={tasks}
              onAddTask={handleAddTask}
              onDeleteAll={handleDeleteAllTask}
            />
            {tasks.length > 0 ? (
              <TaskList
                tasks={tasks}
                onEditTask={handleEditTask}
                onDeleteTask={handleDeleteTask}
                onFavoriteClick={handleFavoriteTask}
              />
            ) : (
              <div className="w-full">
                <h2 className="text-4xl font-semibold text-slate-300 text-center">
                  No Task Found. Please Add one.
                </h2>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
