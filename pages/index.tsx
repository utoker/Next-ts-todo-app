import type { NextPage } from "next";
import Head from "next/head";
import Todos from "./components/Todos";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="Todo App" content="Created with Next.js & typescript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Todos />
    </>
  );
};

export default Home;
