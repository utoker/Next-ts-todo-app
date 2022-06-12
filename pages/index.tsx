import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import NewTodo from '../components/NewTodo';
import Todos from '../components/Todos';
import Todo from '../models/todo';

const Home: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prev) => {
      return prev.concat(newTodo);
    });
  };
  const deleteTodoHandler = (todoId: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="Todo App" content="Created with Next.js & TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} deleteTodo={deleteTodoHandler} />
    </>
  );
};

export default Home;
