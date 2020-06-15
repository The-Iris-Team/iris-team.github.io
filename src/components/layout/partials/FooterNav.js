import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

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
          <AnchorLink href="#contact">Contact</AnchorLink>
        </li>
        <li>
         <AnchorLink href='#about_us'> About us </AnchorLink>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;