import React from 'react';
import classNames from 'classnames';
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
    paragraph: "We are a team of four international students in Computer Science Engineering." + 
	" Our technical background allows us to use innovative and powerful tools in order to solve modern problems." + 
	" In today's society, we are concerned by this era of news media and fake news." + 
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
                      <SectionHeader id='about_us' data={sectionHeader} className="center-content" />
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
                        
                        <a href="https://www.linkedin.com/in/marin-duroyon-585003195/" display="inline">
                          <svg
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="rgba(0, 0, 0, 0)"
                              xmlns="http://www.w3.org/2000/svg">
                              <title>Linkedin</title>
                              <path
                                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="#626262" />
                          </svg>
                          </a>
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
                        <a href="https://www.linkedin.com/in/alexandra-feldman-88ab1051/">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="rgba(0, 0, 0, 0)"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>Linkedin</title>
                            <path
                              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="#626262" />
                        </svg>
                        </a>
                      <p className="m-0 text-sm">
                      Alexandra comes from Belgium and is deeply involved in academic activities, conducting research related to blockchain and data privacy. Starting at an early age, she has been leading projects aiming to solve ecology and societal-related issues. </p>
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
                        <a href="https://www.linkedin.com/in/jean-gal-b1280b155/">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="rgba(0, 0, 0, 0)"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>Linkedin</title>
                            <path
                              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="#626262" />
                        </svg>
                        </a>
                        <p className="m-0 text-sm">
                        Jean comes from France, and has been living abroad his whole life. Being immersed in various cultures, from a young age, Jean is driven by his open-mindedness, determination and team-spirit acquired during international sport competitions. Throughout his life he organized several charity events and was seeking for a way to change our world. He now focuses on improving Iris to attain that goal.                        </p>
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