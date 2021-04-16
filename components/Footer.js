import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FooterComp } from '../styles/base/footer-style'

const Footer = () => {
  const [open, setOpen] = useState({});

  const openMenu = (i) => {
    setOpen({
      ...open,
      [i]: !open[i]
    });
  };

  return (
    <FooterComp>
      <div className="container">
        <div className="row">
          <div className="col col-1">
            <ul
              onClick={() => openMenu('menu1')}
              className={open.menu1 && 'open'}
            >
              <li><a>Annonces auto</a></li>
              <li><a>Toute la france</a></li>
              <li><a>Par département</a></li>
              <li><a>Par ville</a></li>
              <li><a>Par marque</a></li>
            </ul>
          </div>
          <div className="gutter"/>
          <div className="col col-2">
            <ul
              onClick={() => openMenu('menu2')}
              className={open.menu2 && 'open'}
            >
              <li><a>Déposer une annonce</a></li>
              <li><a>à Paris</a></li>
              <li><a>à Bordeaux</a></li>
              <li><a>à Marseille</a></li>
              <li><a>à Lille</a></li>
            </ul>
          </div>
          <div className="gutter"/>
          <div className="col col-3">
            <ul
              onClick={() => openMenu('menu3')}
              className={open.menu3 && 'open'}
            >
              <li><a>Reprise Auto</a></li>
              <li><a>Obtenir un prix de reprise</a></li>
              <li><a>Côter mon véhicule</a></li>
            </ul>
          </div>
          <div className="gutter"/>
          <div className="col col-4">
            <ul
              onClick={() => openMenu('menu4')}
              className={open.menu4 && 'open'}
            >
              <li><a>Informations et démarques</a></li>
              <li><a>Guide d'achat</a></li>
              <li><a>Guide de vente</a></li>
              <li><a>Foire aux questions</a></li>
              <li><a>Infos pratiques</a></li>
            </ul>
          </div>
        </div>

        <div className="logo">
          <Link href="/">
            <a>
              <Image
                src="/images/MeilleureReprise-logo.png"
                alt="meilleur-reprise"
                width={98}
                height={40}
              />
            </a>
          </Link>
        </div>

        <p className="copyright">© {new Date().getFullYear()} tous droits réservés<br/> meilleure-reprise.com</p>
      </div>
    </FooterComp>
  )
}

export default Footer
