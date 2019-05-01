/// <reference types="react-scripts" />

// DECLARATIONS
declare var require: {
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

// SCROLL BUTTON
declare module 'react-scroll-up-button';

// TRANSITIONS
declare module 'react-transition-group';