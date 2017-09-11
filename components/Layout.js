import Head from "next/head";
import NavBar from "./NavBar";
import Title from "./Title";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

export default ({ children }) => {
    return (
    <div>
      <Head>
        <title>ScalaTimes</title>
        <script src="/static/js/jquery-3.2.1.min.js" />
        <script src="/static/js/bootstrap.min.js" />
        <link href="/static/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/static/css/font-awesome.min.css" rel="stylesheet" />
        <link href="/static/css/index.css" rel="stylesheet" />
      </Head>
      <header>
        <NavBar extraStyle="visible-xs"/>
        <Title/>
        <Subscribe/>
        <NavBar extraStyle="hidden-xs"/>
      </header>
      <div className="body mb-1">{children}</div>
      <Footer/>
    </div>
  );
};
