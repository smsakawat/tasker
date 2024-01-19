import SingleTask from './SingleTask';

const TaskList = ({ tasks, onEditTask, onDeleteTask, onFavoriteClick }) => {
  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[260px]">
              Title
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
              Description
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[320px]">
              Tags
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              Priority
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[200px]">
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => {
            return (
              <SingleTask
                key={task.id}
                task={task}
                onEditTask={onEditTask}
                onDeleteTask={onDeleteTask}
                onFavoriteClick={onFavoriteClick}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
