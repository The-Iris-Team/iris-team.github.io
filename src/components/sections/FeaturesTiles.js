import React from 'react';
import classNames from 'classnames';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
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

    configureAnchors({ offset: 0, scrollDuration: 800 })

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
                          src={require('./../../assets/images/feature-tile-icon-01.svg')}
                          alt="Features tile icon 01"
                          width={64}
                          height={64} />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8">
                        Dani Rogmans
                        </h4>
                      <p className="m-0 text-sm">
					    Dani is Dutch and Lebanese, he lived in many places around the world such as Paris, Dubai and Delft and graduated from an International Baccalaureate.
					    Defined mostly by his internationalism, his musical and social skills and his ability to adapt to various situations, Dani is constantly seeking to learn more. 
					    He is currently studying the data variant of his bachelor.
                        </p>
                    </div>
                  </div>
                </div>

                <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      <div className="features-tiles-item-image mb-16">
                        <Image
                          src={require('./../../assets/images/feature-tile-icon-06.svg')}
                          alt="Features tile icon 06"
                          width={64}
                          height={64} />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8">
                        Marin Duroyon
                        </h4>
                      <p className="m-0 text-sm">
                        Marin is French and American, since his youngest age, he has been dedicating his free time in projects to find solutions to concrete problems.
					    Passionate by cybersecurity, skateboard and programming, Marin never cesses to fight for democracy, freedom and privacy during events such as 'Hack The Hague' in 2019, an annual hackathon.
					    He is currently studying the digital system variant of his bachelor.
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
                          src={require('./../../assets/images/feature-tile-icon-01.svg')}
                          alt="Features tile icon 01"
                          width={64}
                          height={64} />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8">
                        Alexandra Feldman
                        </h4>
                      <p className="m-0 text-sm">
					    Alexandra is originally from Belgium where she lived and studied until she was 16 years old. 
					    She never ceases to evolve throughout her Bachelor with her various activities such as her honor's program, teaching assistant experience and much more. 
					    She his now specializing in data science while doing research related to blockchain and data privacy.
                        </p>
                    </div>
                  </div>
                </div>

                <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      <div className="features-tiles-item-image mb-16">
                        <Image
                          src={require('./../../assets/images/feature-tile-icon-06.svg')}
                          alt="Features tile icon 06"
                          width={64}
                          height={64} />
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