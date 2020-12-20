import React from 'react';
import classNames from 'classnames';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Image from '../../elements/Image';
import { goToTop } from 'react-scrollable-anchor'

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
            src={require('./../../../assets/images/logo_1000.png')}
            alt="Open"
            width={64}
            height={64} />
        </AnchorLink>
      </h1>
    </div>
  );
}

export default Logo;