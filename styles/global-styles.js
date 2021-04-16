import { createGlobalStyle } from "styled-components"

export const theme = {
  black: '#494949',
  grey150: '#f9f5f5',
  grey100: '#C6C6C6',
  grey50: '#F9F6F6',
  blue150: '#05668D',
  blue100: '#10678B',
  blue50: '#e6f0f4',
  green100: '#1FC29B'
}

export const GlobalStyles = createGlobalStyle`
  ::selection {background-color: ${theme.green100}; color: white}
  html,
    body {
      scroll-behavior: smooth;
      padding: 0;
      margin: 0;
      color: ${theme.black}
    }
    * {
      font-family: Montserrat, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
        sans-serif;
      box-sizing: border-box;
      transition: all .03s ease-out;
    }
    .container {
      position: relative;
      margin: 0 auto;
      max-width: 1180px;
      width: 100%;
      display: table;
      padding: 0 20px;
    }
    h1, h2, h3, h4, h5, h6 {
      position: relative;
      margin: 0,
      padding: 0,
      font-weight: 700;
    }
    h1 {
      font-size: 32px;
      line-height: 39px;
      letter-spacing: -0.01em;
    }
    h2 {
      font-size: 28px;
      line-height: 32px;
    }
    p {
      font-size: 20px;
      line-height: 30px;
    }
    strong {
      font-weight: 700;
      font-size: 20px;
      line-height: 358.4%;
      color: ${theme.black}
    }
    span {
      &.blue {
        color: ${theme.blue100}
      }
      &.green {
        color: ${theme.green100}
      }
    }
    .btn {
      cursor: pointer;
      font-size: 18px;
      font-weight: 800;
      max-width: 990px;
      width: auto;
      border: 0;
      border-radius: 6px;
      outline: 0;
      user-select: none;
      &:hover, &:focus {
        filter: brightness(108%);
      }
    }
    &.btn-primary {
      padding: 20px;
      color: white;
      background: ${theme.blue100};
    }
    &.btn-secondary {
      padding: 10px 50px;
      color: white;
      background: ${theme.green100};
    }
    &.btn-green {
      background: ${theme.green100};
    }
    @media (min-width: 990px) {
      .container {
        padding: 0 40px;
      }
      .btn {
        &.btn-primary {
          padding-left: 70px;
          padding-right: 70px;
        }
      }
      h1 {
        font-size: 54px;
        line-height: 80px;
      }
      h2 {
        font-size: 40px;
        line-height: 49px;
      }
    }
  }
`