import Head from "next/head";
import NavBar from "./NavBar";
import Title from "./Title";
import Subscribe from "./Subscribe";

export default ({ children }) => {
    return (
    <div>
      <Head>
        <title>ScalaTimes</title>
        <script src="/static/js/jquery-3.2.1.min.js"></script>
        <script src="/static/js/bootstrap.min.js"></script>
        <link href="/static/css/bootstrap.min.css" rel="stylesheet"/>
        <link rel="stylesheet" href="/static/css/index.css" />
      </Head>
      <header>
        <Title/>
        <Subscribe/>
        <NavBar />
      </header>
      <div className="body">{children}</div>
    </div>
  );
};
