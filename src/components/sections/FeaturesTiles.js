import React from 'react';
import classNames from 'classnames';
import ScrollableAnchor from 'react-scrollable-anchor';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'About Us',
    paragraph: "Behind Iris, there is a team of five international students with a Computer Science Engineering background." + 
	" We decided to combine innovative and powerful tools in order to overcome modern problems." + 
	" In today's society, we are concerned by this era of fake-news and want to value the access to information." + 
	" We are determined, motivated and we strongly believe that we can make a difference."
  };

  return (
    <section
      {...props}
      id={'about_us'}
      className={outerClasses}
      >
          <div className="container">
              <div className={innerClasses}>
                  <ScrollableAnchor id={'about_us'}>
                      <SectionHeader data={sectionHeader} className="center-content" />
                  </ScrollableAnchor>
              </div>
          </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;