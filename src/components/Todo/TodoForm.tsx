import { Add } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import TodoList from "./TodoList";
export default function TodoForm() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (todo) {
      setTodos((prevTodos) => [...prevTodos, todo]);
      setTodo("");
    }
  };
  const handleDelete = (index: number) => {
    const updateTodos = todos.filter((_, i) => i !== index);
    setTodos(updateTodos);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Todo"
          variant="outlined"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          startIcon={<Add />}
          onClick={handleSubmit}
        >
          增加
        </Button>
      </form>
      <TodoList todos={todos} onDelete={handleDelete} />
    </>
  );
}
