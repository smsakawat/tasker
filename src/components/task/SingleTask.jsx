import { useMemo } from 'react';
import { FaStar } from 'react-icons/fa';

// Getting random color for tags
const getRandomColor = () => {
  const colors = [
    '#1C92FFB0',
    '#FE1A1AB5',
    '#BD560BB2',
    '#00B2D9CC',
    '#8407E6A8',
    '#07AC67D6',
    '#2F43F8BF',
    '#AE6D0BDB',
    '#10FBEDB2',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const SingleTask = ({ task, onDeleteTask, onEditTask, onFavoriteClick }) => {
  // Assigning random colors
  const tagColors = useMemo(() => {
    return task.tags.reduce((colors, tag) => {
      colors[tag] = getRandomColor();
      return colors;
    }, {});
  }, [task.tags]);

  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td>
        <button
          className="cursor-pointer"
          onClick={() => onFavoriteClick(task.id)}
        >
          {task.isFavorite ? (
            <FaStar color="orange" size="1.15em" />
          ) : (
            <FaStar color="gray" />
          )}
        </button>
      </td>
      <td className="text-center">{task.title}</td>
      <td>
        <div>{task.description}</div>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          {task.tags.map(tag => (
            <li key={tag}>
              <span
                className="inline-block h-5 whitespace-nowrap rounded-[45px]  px-2.5 text-sm capitalize text-[#F4F5F6]"
                style={{ backgroundColor: tagColors[tag] }}
              >
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </td>
      <td className="text-center">{task.priority}</td>
      <td>
        <div className="flex items-center justify-center gap-8">
          <button
            onClick={() => onDeleteTask(task.id)}
            className="text-slate-200 px-1.5 py-1 bg-red-600/[60%] hover:bg-red-500/[60%] rounded-md text-sm transition"
          >
            Delete
          </button>
          <button
            className="text-slate-200 px-1.5 py-1 bg-blue-600/[60%] hover:bg-blue-500/[60%] rounded-md text-sm transition"
            onClick={() => {
              onEditTask(task);
            }}
          >
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
};
export default SingleTask;
