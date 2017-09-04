import Link from "next/link";

export default () => {
  return (
    <div className="row no-gutters justify-content-center mt-3">
      <nav className="navbar navbar-expand-lg mt-5">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li>
              <Link href="/">
                <a className="nav-link mx-4">Latest news</a>
              </Link>
            </li>
            <li>
              <Link href="/all" prefetch>
                <a className="nav-link mx-4">All news</a>
              </Link>
            </li>
            <li>
              <Link href="/promote" prefetch>
                <a className="nav-link mx-4">Promote your event</a>
              </Link>
            </li>
            <li>
              <Link href="/banners" prefetch>
                <a className="nav-link mx-4">Get banner</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" prefetch>
                <a className="nav-link mx-4">Contact</a>
              </Link>
            </li>
            <li>
              <Link href="http://www.softwaremill.com" prefetch>
                <a className="nav-link mx-4">HIRING</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
