import { useState } from 'react';
import SearchTask from './SearchTask';
import TaskActions from './TaskActions';
import TaskList from './TaskList';

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: 'Master React',
    description:
      'Master react like a pro as much as you can, you have to stand out from too many competitors, so you know better',
    tags: ['web', 'react', 'js'],
    priority: 'High',
    isFavourite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  return (
    <>
      <section className="mb-20" id="tasks">
        <div className="container mx-auto">
          <SearchTask />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions />
            <TaskList tasks={tasks} />
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
