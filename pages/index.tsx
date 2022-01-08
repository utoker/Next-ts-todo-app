import type { NextPage } from "next";
import Head from "next/head";
import Todos from "../components/Todos";
import Todo from "../models/todo";

const Home: NextPage = () => {
  const todos = [new Todo("start tutorial channel")];

  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="Todo App" content="Created with Next.js & typescript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Todos items={todos} />
    </>
  );
};

export default Home;
