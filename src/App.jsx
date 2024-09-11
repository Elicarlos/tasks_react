import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 as uuidv4 } from "uuid";

function App() {
  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     title: "Estudar Programação",
  //     description: "Estudar programação comendo rapadura",
  //     isCompleted: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Estudar Finanças",
  //     description: "Estudar finanças para o futuro",
  //     isCompleted: false,
  //   },
  //   {
  //     id: 3,
  //     title: "Estudar Matemática",
  //     description: "Resolver problemas de matemática",
  //     isCompleted: false,
  //   },
  // ]);

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    // console.log("alterado");
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Quando usamos useEffect com lista vazia ele só vai execultar na primeira vez
  useEffect(() => {
    async function fetchTasks() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );

      const data = await response.json();

      // console.log(data);
      setTasks(data);
    }
    //Se voce quiser pode chamar a api
    // fetchTasks();
  }, []);

  function onTaskClick(taksId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taksId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTasks = {
      id: uuidv4(),
      title: title,
      description: description,
      isCompleted: false,
    };

    setTasks([...tasks, newTasks]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
