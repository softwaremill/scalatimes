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
          <link href="/static/css/styles.css" rel="stylesheet" />
      </Head>
      <header>
        <div className="header__logo">
          <img src="/static/img/st_250px.png"/>
        </div>
        <p>
          A free, once-weekly Scala news flash. Easy to unsubscribe.
          <br/>
          Goes out every Thursday.
        </p>
      </header>
      <section>
        <form className="subscribe-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="E-mail address" /><input type="submit" value="Subscribe"/>
        </form>
      </section>
      <section className="main-nav">
        <input type="checkbox" id="menu-toggle" className="menu-toggle"/>
        <label htmlFor="menu-toggle" className="menu-toggle">
          <span className="fa fa-bars active"/>
          <span className="fa fa-times inactive"/>
        </label>
        <nav>
          <Link href={{pathname: '/', query: {issue: 'latest'}}}>
            <a className="active">Latest news</a>
          </Link>
          <Link href="promote">
          <a>Promote your event</a>
          </Link>
          <Link href="banners">
            <a>Get banner</a>
          </Link>
          <Link href="#">
            <a>Contact</a>
          </Link>
          <Link href="#">
            <a>HIRING</a>
          </Link>
        </nav>
      </section>
      <section className="content">
        {children}
      </section>
      <footer>
        <div className="footer-logo">
          <img src="/static/img/sml_logo_grey.png"/>
        </div>
        <nav className="nav-horizontal">
          <a href="https://softwaremill.com/portfolio/"><i className="fa fa-code"/>Our projects</a>
          <a href="https://softwaremill.com/join-us/"><i className="fa fa-handshake-o"/>We are hiring</a>
          <a href="https://twitter.com/softwaremill"><i className="fa fa-twitter"/>Follow us!</a>
        </nav>
      </footer>
    </div>
  );
};