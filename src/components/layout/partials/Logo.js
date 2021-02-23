import React from 'react';
import classNames from 'classnames';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Image from '../../elements/Image';
import { goToTop } from 'react-scrollable-anchor'

import image1 from './../../../assets/images/logo_1000.png';

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
        <AnchorLink href="#top">
          <Image
            src={image1}
            alt="Open"
            width={64}
            height={64} />
        </AnchorLink>
      </h1>
    </div>
  );
}

export default Logo;