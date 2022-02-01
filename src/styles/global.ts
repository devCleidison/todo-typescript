import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F5F3F4;

    --text-title: #161A1D;
    --text-body: #2d2d2d;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;

    font-size: 1.6rem;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background: rgba(0, 0, 0, 0.5);
  }

  .new-task-modal {
    max-width: 400px;
    width: 80%;
    height: 50%;
    
    border-radius: 0.5rem;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    background: var(--background);

    transition: 0.3s;

    .close-modal {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;

      background: transparent;
      border: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        filter: brightness(0) saturate(100%) invert(12%) sepia(48%) 
          saturate(566%) hue-rotate(200deg) brightness(93%) contrast(94%);
      }
    }

    form {
      width: 70%;
      height: 100%;
      margin: 0 auto;

      text-align: center;
  
      display: flex;
      flex-direction: column;

      h3 {
        font-size: 2rem;
        margin: 7rem 0 6rem;

        color: #22223B;
      }

      input {
        border: 0;
        border-radius: 0.25rem;
        padding: 1rem 2rem;

        width: 100%;

        margin-bottom: 3rem;
      }

      button {
        background: #22223B;
        border: 0;
        color: #FFF;
        padding: 1rem 3rem;
        border-radius: 0.25rem;

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;
