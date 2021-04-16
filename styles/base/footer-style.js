import styled from 'styled-components'
import { theme } from '../global-styles'

export const FooterComp = styled.footer`
  padding: 0 0 67px;
  background: ${theme.grey150};
  .copyright {
    position: relative;
    margin: 40px auto 0;
    display: table;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: ${theme.grey100};
    max-width: 260px;
  }
  .row {
    margin: 71px 0;
    display: block;
  }
  .col {
    flex-grow: 4;
    width: 100%;
    float: left;
  }
  .gutter {
	  flex-grow: 1;
    width: 10px;
  }
  .logo {
    padding-top: 100px;
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  ul {
    padding: 0;
    margin: 0;
    max-height: 60px;
    overflow: hidden;
    transition: all ease 0.5s;
    &.open {
      outline: none;
      max-height: 400px;
      &::before {
        transform: matrix(0, -1, 1, 0, 0, 0), rotate(180deg);
      }
    }
    &::before {
      position: absolute;
      display: block;
      margin-top: -15px;
      right: 20px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: white url('/icons/down-chevron.svg') no-repeat;
      background-position: 50% 50%;
      background-size: 17px;
      box-shadow: 0px 20px 40px rgba(5, 102, 141, 0.1);
      transform: matrix(0, -1, -1, 0, 0, 0), rotate(-90deg);
      content: ''
    }
    li {
      margin-bottom: 40px;
      list-style: none;
      font-size: 14px;
      font-weight: 600;
      text-decoration: underline;
      color: ${theme.grey100};
      a {
        cursor: pointer;
        &:hover {
          color: ${theme.black};
        }
      }
      &:nth-of-type(1) {
        text-decoration: none;
        font-weight: 800;
        font-size: 18px;
        color: ${theme.black};
      }
      &:last-child {
        margin-bottom: 65px;
      }
    }
  }
  @media (min-width: 990px) {
    padding: 47px 0 67px;
    .copyright {
      display: none;
    }
    .logo {
      padding-top: 0;
      width: auto;
      display: block;
    }
    .row {
      display: flex;
    }
    .col {
      width: 100%;
      float: left;
    }
    ul {
      max-height: 100%;
      li:last-child {
        margin-bottom: 0;
      }
      &::before {
        display: none;
      }
    }
  }
`;