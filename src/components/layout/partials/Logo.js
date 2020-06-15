import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';
import ScrollableAnchor, { goToTop } from 'react-scrollable-anchor'

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link onClick={goToTop}>
          <Image
            src={require('./../../../assets/images/logo_1000.png')}
            alt="Open"
            width={64}
            height={64} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;