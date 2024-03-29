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
    display: none;
  }
  div:not(.container) {
    position: relative;
    top: 8px;
    float: left;
    cursor: pointer;
  }
  ul {
    float: right;
    display: none;
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
  .mobile-menu {
    cursor: pointer;
    display: block;
    width: calc(100% - 100px);
    .cross {
      float: right;
      width: 25px; height: 25px;
      display: block;
    }
    span {
      position: absolute;
      width: 29px; height: 3px;
      background: ${theme.black};
      border-radius: 1px;
      &:nth-child(1) {top: 0px}
      &:nth-child(2) {top: 8px}
      &:nth-child(3) {top: 16px}
    }
  }
  @media (min-width: 990px) {
    .mobile-menu {
      display: none;
    }
    .btn {
      display: block;
    }
    ul {
      display: block;
    }
  }
`;

export const Hero = styled.div`
  position: relative;
  top: 72px;
  width: 100%;
  height: 770px;
  display: table;
  background: url('/images/header-home.png') no-repeat;
  background-position: 70% 100%;
  background-size: cover;
  z-index: 1;
  p {
    margin-top: 50px;
    font-size: 14px;
    line-height: 22px;
  }
  .container {
    position: absolute;
    top: calc(50% - 30px);
    left: 0;
    right: 0;
    margin: 0 auto;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    div {
      width: 100%;
    }
  }
  .btn {
    position: relative;
    margin: 0 auto;
    display: table;
    top: 36px;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
  input[type="text"] {
    position: relative;
    margin: 12px 0 0 0;
    padding: 0 17px;
    font-size: 16px;
    font-weight: 600;
    height: 64px;
    border-radius: 6px;
    border: 1px solid ${theme.grey100};
    outline: 0;
    user-select: none;
    width: 100%;
    color: ${theme.grey100};
    &.search {
      background: white url('/icons/search.png') no-repeat;
      background-position: calc(100% - 20px) 50%;
    }
    &.active, &:focus, &:hover {
      border: 1px solid ${theme.black};
      color: ${theme.black};
      &::placeholder {
        color: ${theme.black};
      }
    }
  }
  label {
    width: 100%;
    display: inline-block;
    font-weight: 600;
    font-size: 16px;
    color: ${theme.black};
  }
  .row {
    margin-top: 50px;
    display: table;
    width: 100%;
  }
  .col-2 {
    margin-top: 25px;
    &::before {
      position: absolute;
      margin-top: 59px;
      right: 49px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      border: 1px solid ${theme.grey100};
      content: '';
      z-index: 9;
    }
    &::after {
      position: absolute;
      margin-top: 28px;
      margin-left: -65px;
      width: 1px;
      height: 33px;
      background: ${theme.grey100};
      content: ''
    }
  }
  @media (min-width: 990px) {
    height: 660px;
    .container {
      top: calc(50% - 30px);
      div {
        width: auto;
      }
    }
    p {
      margin-top: 0;
      font-size: 20px;
    }
    input[type="text"] {
      margin: 16px 0 0 0;
      padding: 0 24px;
      font-size: 20px;
    }
    .row {
      display: flex;
      width: auto;
    }
    .col {
      min-width: calc(50% - 125px);
      width: calc(50% - 125px);
      max-width: calc(50% - 125px);
    }
    .col-2 {
      margin-top: 0;
      &::before {
        margin-top: 63px;
        right: 309px;
      }
      &::after {
        margin-top: 32px;
      }
    }
    .col-3 {
      min-width: 230px;
      width: 230px;
      max-width: 230px;
    }
    .gutter {
      flex-grow: 1;
      width: 20px;
    }
  }
`;