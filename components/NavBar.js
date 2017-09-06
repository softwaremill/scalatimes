import Link from "next/link";

export default () => {
  return (
    <nav className="navbar navbar-default hidden-xs">
      <div className="container-fluid">
          <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                      data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
                <li>
                  <Link href="/">
                    <a className="navbar-link mx-4">Latest news</a>
                  </Link>
                </li>
                <li>
                  <Link href="/all" prefetch>
                    <a className="navbar-link mx-4">All news</a>
                  </Link>
                </li>
                <li>
                  <Link href="/promote" prefetch>
                    <a className="navbar-link mx-4">Promote your event</a>
                  </Link>
                </li>
                <li>
                  <Link href="/banners" prefetch>
                    <a className="navbar-link mx-4">Get banner</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" prefetch>
                    <a className="navbar-link mx-4">Contact</a>
                  </Link>
                </li>
                <li>
                  <Link href="http://www.softwaremill.com" prefetch>
                    <a className="navbar-link mx-4">HIRING</a>
                  </Link>
                </li>
              </ul>
          </div>
      </div>
    </nav>
  );
};
