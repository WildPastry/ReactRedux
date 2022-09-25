// Declarations
declare let require: {
  <T>(path: string): T;
  (paths: string[], callback: (...modules) => void): void;
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

declare module 'react-scroll-up-button';
declare module 'react-animated-burgers';
declare module 'mdbreact';
declare module 'react-simple-tooltip';
declare module 'styled-components';
