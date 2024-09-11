import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        className="border-slate-300 border outline-slate-400 px-4 py-2"
        type="text"
        name=""
        id=""
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Digite o texto da tarefa"
      />
      <input
        className="border border-slate-400 outline-slate-400 px-4 py-2"
        type="text"
        name=""
        id=""
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Digite a descricao da tarefa"
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha os campos");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
