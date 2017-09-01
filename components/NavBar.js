import Link from "next/link";

export default () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Latest news</a>
            </Link>
          </li>
          <li>
            <Link href="/all" prefetch>
              <a className="nav-link">All news</a>
            </Link>
          </li>
          <li>
            <Link href="/promote" prefetch>
              <a className="nav-link">Promote your event</a>
            </Link>
          </li>
          <li>
            <Link href="/banners" prefetch>
              <a className="nav-link">Get banner</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" prefetch>
              <a className="nav-link">Contact</a>
            </Link>
          </li>
          <li>
            <Link href="http://www.softwaremill.com" prefetch>
              <a className="nav-link">Hiring</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
