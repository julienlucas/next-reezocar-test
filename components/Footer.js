import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FooterComp } from '../styles/base/footer-style'

const Footer = () => {
  return (
    <FooterComp>
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
