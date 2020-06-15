import React from 'react';
import classNames from 'classnames';
import ScrollableAnchor from 'react-scrollable-anchor'
import { Link } from 'react-router-dom';
import { goToAnchor } from 'react-scrollable-anchor'

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#0">Contact</Link>
        </li>
        <li>
         <a href='#about_us' onClick="goToAnchor('about_us')"> About us </a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;