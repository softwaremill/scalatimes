import Head from "next/head";
import NavBar from "./NavBar";
import Title from "./Title";
import Subscribe from "./Subscribe";

export default ({ children }) => {
  return (
    <div>
      <Head>
        <title>ScalaTimes</title>
        <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/static/css/index.css" />
      </Head>
      <header>
        <Title/>
        <Subscribe/>
        <NavBar />
      </header>
      <div>{children}</div>
    </div>
  );
};
