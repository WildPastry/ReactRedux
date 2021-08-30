/// <reference types="react-scripts" />

// declarations
declare var require: {
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

declare module 'react-scroll-up-button';
declare module 'react-animated-burgers';
declare module 'mdbreact';
declare module 'react-simple-tooltip';
declare module 'styled-components';
declare module 'react-sticky-mouse-tooltip';