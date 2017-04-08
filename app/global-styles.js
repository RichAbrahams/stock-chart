import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .fade-enter {
    opacity: 0;
    transform: rotateX(180deg);
  }

  .fade-enter-active {
    opacity: 1;
    transform: rotateX(0deg);
    transition: 500ms ease-in all;
  }

  .fade-leave {
    opacity: 1;
    transform: rotateX(0deg);
    transition: 500ms ease-in all;
  }

  .fade-leave-active {
    opacity: 0;
    transform: rotateX(180deg);
  }
`;
