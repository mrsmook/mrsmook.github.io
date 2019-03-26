import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              I love my <span className="highlight">Wife</span> and
              my PC-Setup.
            </p>
            <p>
              When i'm not on the summoner's rift with my friends, i code{' '}
              <span className="highlight"> awesome stuff</span>. I always try to challenge myself to learn{' '}
              <span className="highlight">new technologies</span>.
            </p>
            <p>
              Obtained my Engineering degree in Computer Science from <span className="highlight">ESPRIT</span>.
              I enjoy writing {' '}
              <span className="highlight">clean code</span>{' '}
              Im addicted to computer science, new technologies , {' '}
              <span className="highlight">physics</span>{' '}
               and videos games.
            </p>
            <p>
              As a craftsman i have a lot of tools {' '}
              <span className="highlight">WEB tools</span>{' '}
              (PHP,LARAVEL,JAVASCRIPT,MySQL){' '}
              <span className="highlight">, many High-tech potions</span>{' '}
              (AR/VR,IOT,ANDROID){' '}
              <span className="highlight">Legendary GAME Gear (+∞ HP)</span>{' '}
              (Unity, Construct)
            </p>
            
            <p className="text-emoji" style={{ color: colorPrimary }}>
              \ (•◡•) /
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
