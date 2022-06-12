import type { NextPage } from "next";
import { ChangeEventHandler, useState } from "react";
import { ListItem } from "../components/ListItem";

type Todo = { id: number; label: string; isDone: boolean };

const Home: NextPage = () => {
  const [todos, settodos] = useState<Todo[]>([]);

  const [text, setText] = useState<string>("");

  const toggle: ChangeEventHandler<HTMLInputElement> = (e) => {
    settodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === Number(e.target.value)) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  };

  const input: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const addTodo = () => {
    settodos((prevTodos) => {
      return [...prevTodos, { id: Math.random(), label: text, isDone: false }];
    });
    setText("");
  };

  return (
    <div className="w-96 mx-auto p-20">
      <h1 className="text-xl font-bold">Todo</h1>
      <div className="flex gap-x-2">
        <input
          type="text"
          className="border border-black"
          value={text}
          onChange={input}
        />

        <button className="border border-black shrink-0 px-2" onClick={addTodo}>
          追加
        </button>
      </div>

      <ul className="mt-4 space-y-2">
        {todos.map((todo) => (
          <li key={todo.id}>
            <ListItem todo={todo} toggle={toggle} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
