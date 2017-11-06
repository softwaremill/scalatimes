import React from "react"
import Head from "next/head"
import Link from "next/link";

const handleSubmit = () => {};

export default ({ children }) => {
  return (
    <div className="app">
      <Head>
          <meta name="viewport" content="initial-scale=1"/>
          <title>ScalaTimes</title>
          <link href="/static/css/normalize.css" rel="stylesheet" />
          <link href="/static/css/font-awesome.min.css" rel="stylesheet" />
          <link href="/static/css/index2.css" rel="stylesheet" />
      </Head>
      <header>
        <img src="/static/img/st_250px.png"/>
        <p>
          A free, once-weekly Scala news flash. Easy to unsubscribe.
          <br/>
          Goes out every Thursday.
        </p>
      </header>
      <section className="subscribe">
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="E-mail address" />
          <input type="submit" value="Subscribe"/>
        </form>
      </section>
      <nav className="nav-horizontal main-nav">
        <Link href={{pathname: '/', query: {issue: 'latest'}}}>
          <a className="active">Latest news</a>
        </Link>
        <Link href={{pathname: '/', query: {issue: 'latest'}}}>
          <a>Promote your event</a>
        </Link>
        <Link href={{pathname: '/', query: {issue: 'latest'}}}>
          <a>Get banner</a>
        </Link>
        <Link href={{pathname: '/', query: {issue: 'latest'}}}>
          <a>Contact</a>
        </Link>
        <Link href={{pathname: '/', query: {issue: 'latest'}}}>
          <a>HIRING</a>
        </Link>
      </nav>
      <section className="content">
        content here
      </section>
      <footer>
        <div className="logo">
          <img src="/static/img/sml_logo_grey.png"/>
        </div>
        <nav className="nav-horizontal">
          <a href="https://softwaremill.com/portfolio/"><i className="fa fa-code footer-icon"/>Our projects</a>
          <a href="https://softwaremill.com/join-us/"><i className="fa fa-handshake-o footer-icon"/>We are hiring</a>
          <a href="https://twitter.com/softwaremill"><i className="fa fa-twitter footer-icon"/>Follow us!</a>
        </nav>
      </footer>
    </div>
  );
};