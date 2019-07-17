/// <reference types="react-scripts" />

// DECLARATIONS
declare var require: {
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

// SCROLL BUTTON
declare module 'react-scroll-up-button';

// ANIMATED BURGER
declare module 'react-animated-burgers';

// MDB ANIMATIONS
declare module 'mdbreact';

// TOOLTIPS
declare module 'react-simple-tooltip';

// STYLES
declare module 'styled-components';