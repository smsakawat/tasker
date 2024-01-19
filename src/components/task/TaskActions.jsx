const TaskActions = ({ onAddTask, onDeleteAll, tasks }) => {
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <button
          onClick={onAddTask}
          className="rounded-md bg-emerald-700 px-3.5 py-2.5 text-sm font-semibold hover:bg-emerald-600 transition"
        >
          Add Task
        </button>
        {tasks.length > 0 && (
          <button
            onClick={onDeleteAll}
            className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold hover:bg-red-500 transition"
          >
            Delete All
          </button>
        )}
      </div>
    </div>
  );
};
export default TaskActions;
