import { useState } from 'react';

const TaskModal = ({ onSave, onClose, taskToUpdate }) => {
  const [task, setTask] = useState(
    taskToUpdate || {
      id: crypto.randomUUID(),
      title: '',
      description: '',
      tags: [],
      priority: '',
      isFavorite: false,
    }
  );
  const [isAdd, setIsAdd] = useState(Object.is(taskToUpdate, null));
  const { title, description, tags, priority, isFavorite } = task;

  // Handle form data
  const handleChange = e => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === 'tags') {
      value = value.split(' ');
    }
    setTask({
      ...task,
      [name]: value,
    });
  };
  return (
    <>
      <form className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 absolute  top-0 inset-x-0 z-50">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          Add New Task
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              onChange={handleChange}
              value={title}
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              required
            />
          </div>
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              onChange={handleChange}
              value={description}
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              required
            ></textarea>
          </div>
          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                onChange={handleChange}
                value={tags.join(' ')}
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                required
              />
            </div>
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                onChange={handleChange}
                value={priority}
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                required
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-between items-center lg:mt-20">
          <button
            onClick={e => {
              e.preventDefault();
              onClose();
            }}
            className="rounded bg-red-500 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Close
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              onSave(task, isAdd);
            }}
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Save
          </button>
        </div>
      </form>
      <div className="absolute w-full h-full  inset-0 bg-black/30 backdrop-blur z-20 overflow-hidden"></div>
    </>
  );
};
export default TaskModal;
