import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: var(--primary-font);    
  }

  @font-face {
    font-family: 'Lato';
    src: url('/assets/fonts/Lato-Regular.ttf') format('truetype');
  }

  :root {
    --primary-font: 'Lato';
    --primary-color: #121212;
    --secondary-color: #BFA37E;
    --tertiary-color: #F5F5F5;
  }

  body {
    font-size: 62.5%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: 1.6rem;
    font-weight: 400;
  }

  html, body, #root {
    height: 100vh;
}

  #root {
    display: flex;
    flex-direction: column;
  }

  main {
    flex-grow: 1;
  }
`;
