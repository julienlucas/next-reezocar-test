import styled from 'styled-components'
import { theme } from '../global-styles'

export const Nav = styled.nav`
  position: fixed;
  width: 100vw;
  height: 72px;
  background: white;
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.1));
  z-index: 2;
  .container {
    top: 10px;
  }
  .btn {
    position: relative;
    top: 5px;
    float: right;
  }
  div:not(.container) {
    position: relative;
    top: 8px;
    float: left;
    cursor: pointer;
  }
  ul {
    float: right;
    li {
      list-style: none;
      display: inline-block;
      margin-right: 35px;
      a {
        text-decoration: none;
        font-weight: 600;
        color: ${theme.black};
        &:hover, &:focus {
          color: ${theme.green100};
        }
      }
    }
  }
`;

export const Hero = styled.div`
  position: relative;
  top: 72px;
  width: 100%;
  height: 660px;
  display: table;
  background: url('/images/header-home.png') no-repeat;
  background-position: 0 100%;
  background-size: cover;
  z-index: 1;
  .container {
    top: calc(50% - 30px);
    transform: translateY(-50%);
    display: flex;
    align-items: center;
  }
  .btn {
    position: relative;
    top: 36px;
  }
  input[type="text"] {
    position: relative;
    margin-top: 16px;
    padding: 0 24px;
    font-size: 20px;
    font-weight: 600;
    height: 64px;
    border-radius: 6px;
    border: 1px solid ${theme.grey100};
    outline: 0;
    user-select: none;
    width: 100%;
    color: ${theme.grey100};
    &:focus {
      border: 1px solid ${theme.black};
      color: ${theme.black};
    }
  }
  label {
    width: 100%;
    display: inlien-block;
    font-weight: 600;
    font-size: 16px;
  }
  .row {
    margin-top: 50px;
    display: flex;
  }
  .col {
    flex-grow: 4;
  }
  .gutter {
	  flex-grow: 1;
    width: 10px;
  }
`;