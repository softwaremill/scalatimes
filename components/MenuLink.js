import React from 'react';
import Link from 'next/link';
import {withRouter} from 'next/router';

const MenuLink = ({router, href, children}) => {
  const linkHref = href.pathname || `/${href}`;
  const isActive = router.pathname === linkHref;
  return (
    <Link href={href}>
      <a className={isActive ? 'active' : ''}>{children}</a>
    </Link>
  )
};

export default withRouter(MenuLink);