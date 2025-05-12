import { useState, useEffect } from "react";

function TodoList() {
  // 과제1-1: 7-1, 7-2강을 듣고 이곳에 투두리스트 컴포넌트를 작성해주세요.
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const [id, setId] = useState(0);

  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    const newItem = { id: id, todo: toDo };
    const newToDos = [newItem, ...toDos];
    setToDos(newToDos);
    setId(id + 1);

    localStorage.setItem("savedToDos", JSON.stringify(newToDos));
    localStorage.setItem("newId", id + 1);
    setToDo("");
  };

  const deleteToDo = (selectedId) => {
    const newToDos = toDos.filter((item) => item.id !== selectedId);
    setToDos(newToDos);
    localStorage.setItem("savedToDos", JSON.stringify(newToDos));
  };

  useEffect(() => {
    const saved = localStorage.getItem("savedToDos");
    const savedId = localStorage.getItem("newId");
    if (saved) {
      setToDos(JSON.parse(saved));
    }
    if (savedId) {
      setId(parseInt(savedId, 10));
    }
  }, []);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item) => (
          <li key={item.id}>
            {item.todo}
            <button onClick={() => deleteToDo(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
