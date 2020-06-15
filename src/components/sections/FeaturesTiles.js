import React from 'react';
import classNames from 'classnames';
import ScrollableAnchor from 'react-scrollable-anchor'
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

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
    paragraph: "We are a team of four international bachelor students in Computer Science Engineering at TU Delft." + 
	" Our technical background allows us to use innovative and powerfull tools in order to solve our problem." + 
	" In today's society, we are ones of the most concerned by this era of news media and fake news." + 
	" We are determined, motivated, open-minded and we strongly believe that we can make a difference."
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
              <div className={tilesClasses}>

                <div className="tiles-item reveal-from-bottom">
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      <div className="features-tiles-item-image mb-16">
                        <Image
                          src={require('./../../assets/images/dani-pic.png')}
                          alt="Dani Rogmans"
                          width={86}
                          height={86} />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8">
                        Dani Rogmans
                        </h4>
                      <p className="m-0 text-sm">
					    Dani is Dutch and Lebanese, he lived in many places around the world such as Paris, Dubai and Delft and graduated with an International Baccalaureate.
					    Defined mostly by his internationalism, his musical and social skills and his ability to adapt to various situations, Dani is constantly seeking to learn more. 
                        </p>
                    </div>
                  </div>
                </div>

                <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      <div className="features-tiles-item-image mb-16">
                        <Image
                          src={require('./../../assets/images/marin-pic.png')}
                          alt="Features tile icon 06"
                          width={86}
                          height={86} />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8">
                        Marin Duroyon
                        </h4>
                      <p className="m-0 text-sm">
              Marin is French and American, since his youngest age, he has been dedicating his free time in projects to find solutions to concrete problems.
					    Passionated by cybersecurity, skateboard and programming, Marin never ceases to fight for democracy, freedom and privacy.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
		  
		      <div className={tilesClasses}>

                <div className="tiles-item reveal-from-bottom">
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      <div className="features-tiles-item-image mb-16">
                        <Image
                          src={require('./../../assets/images/alex-pic.png')}
                          alt="Features tile icon 01"
                          width={86}
                          height={86} />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8">
                        Alexandra Feldman
                        </h4>
                      <p className="m-0 text-sm">
					    Alexandra is originally from Belgium where she studied until she was 16 years old. 
					    She is deeply involved in academic activities, conducting research related to blockchain and data privacy.
              Starting at an early age, she has been leading projects aiming to solve ecology and societal-related issues.
                        </p>
                    </div>
                  </div>
                </div>

                <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      <div className="features-tiles-item-image mb-16">
                        <Image
                          src={require('./../../assets/images/jean-pic.png')}
                          alt="Features tile icon 06"
                          width={86}
                          height={86} />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8">
                        Jean Gal
                        </h4>
                      <p className="m-0 text-sm">
                        Jean comes from France but he grew up abroad in countries such as India, Thailand and Morocco immersed in various cultures. 
					    Impassioned by sports, Jean is driven by his open-mindedness, determination and team-spirit acquired during international sport competitions and while organizing charity events.
					    He his now specializing in data science.
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;