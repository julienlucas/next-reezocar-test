import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const FooterComp = styled.footer`
  padding: 47px 0 67px;
  background: ${props => props.theme.grey150};
  .row {
    margin: 70px 0;
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
      color: ${props => props.theme.grey100};
      a {
        cursor: pointer;
        &:hover {
          color: ${props => props.theme.black};
        }
      }
      &:nth-of-type(1) {
        text-decoration: none;
        font-weight: 800;
        font-size: 16px;
        color: ${props => props.theme.black};
      }
    }
  }
`;

const Footer = () => {
  const theme = useContext(ThemeContext)

  return (
    <FooterComp theme={theme}>
      <div className="container">
        <div className="row">
          <div className="col col-1">
            <ul>
              <li><a>Annonces auto</a></li>
              <li><a>Toute la france</a></li>
              <li><a>Par département</a></li>
              <li><a>Par ville</a></li>
              <li><a>Par marque</a></li>
            </ul>
          </div>
          <div className="gutter"/>
          <div className="col col-2">
            <ul>
              <li><a>Déposer une annonce</a></li>
              <li><a>à Paris</a></li>
              <li><a>à Bordeaux</a></li>
              <li><a>à Marseille</a></li>
              <li><a>à Lille</a></li>
            </ul>
          </div>
          <div className="gutter"/>
          <div className="col col-3">
            <ul>
              <li><a>Reprise Auto</a></li>
              <li><a>Obtenir un prix de reprise</a></li>
              <li><a>Côter mon véhicule</a></li>
            </ul>
          </div>
          <div className="gutter"/>
          <div className="col col-4">
            <ul>
              <li><a>Informations et démarques</a></li>
              <li><a>Guide d'achat</a></li>
              <li><a>Guide de vente</a></li>
              <li><a>Foire aux questions</a></li>
              <li><a>Infos pratiques</a></li>
            </ul>
          </div>
        </div>

        <Link href="/acheter">
          <Image
            className="logo"
            src="/images/MeilleureReprise-logo.png"
            alt="meilleur-reprise"
            width={98}
            height={40}
          />
        </Link>
      </div>
    </FooterComp>
  )
}

export default Footer
