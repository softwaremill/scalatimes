import Head from "next/head";
import NavBar from "./NavBar";

export default ({ children }) => {
  return (
    <div>
      <Head>
        <title>ScalaTimes</title>
        <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
      </Head>
      <header>
        <NavBar />
      </header>
      <div>{children}</div>
    </div>
  );
};
