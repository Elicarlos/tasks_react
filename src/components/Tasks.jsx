import {
  ChevronRightIcon,
  ChevronsRightIcon,
  DeleteIcon,
  TrashIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onDeleteTaskClick, onSeeDetailsClick, onTaskClick }) {
  // console.log(props);
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);

    // navigate(`/task?title=${task.title}&description=${task.description}`);
    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {/* <h1>{tasks[0].title}</h1>
      <h1>{tasks[1].title}</h1> */}
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left text-white p-2 rounded-md  w-full ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
            {/* {task.isCompleted ? "Complete" : "Incloplete"} */}
          </button>
          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <ChevronRightIcon />
          </button>

          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
