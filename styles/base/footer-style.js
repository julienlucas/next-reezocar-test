import styled from 'styled-components'
import { theme } from '../global-styles'

export const FooterComp = styled.footer`
  padding: 47px 0 67px;
  background: ${theme.grey150};
  .row {
    margin: 71px 0;
    display: flex;
  }
  .col {
    flex-grow: 4;
  }
  .gutter {
	  flex-grow: 1;
    width: 10px;
  }
  .logo {
    cursor: pointer;
  }
  ul {
    padding: 0;
    margin: 0;
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
        font-size: 16px;
        color: ${theme.black};
      }
    }
  }
`;