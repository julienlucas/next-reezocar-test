import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Nav, Hero } from '../styles/base/header-style'

const NavComp = () => {
  return (
    <Nav>
      <div className="container">
        <Image
          className="logo"
          src="/images/MeilleureReprise-logo.png"
          alt="meilleur-reprise"
          width={98}
          height={40}
        />

        <button className="btn btn-secondary">Vendre ma voiture</button>

        <div className="mobile-menu">
          <div className="cross">
            <span/>
            <span/>
            <span/>
          </div>
        </div>

        <ul>
          <li><Link href="/acheter"><a>Acheter</a></Link></li>
          <li><Link href="/conseils"><a>Conseils</a></Link></li>
          <li><Link href="/a-propos"><a>Qui sommes-nous ?</a></Link></li>
        </ul>
      </div>
    </Nav>
  )
}

const HeroComp = () => {
  const [form, setForm] = useState('')

  const onChange = e => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    alert('Recherche envoyée : ' + form.location + form.car)
  }

  return (
    <Hero>
      <div className="container">
        <div>
          <h1>Concessionnaire en ligne spécialiste de <span className="blue">l'achat</span> et la <span className="green">vente</span> de voitures d'occasion</h1>
          <p>Trouver une petite annonce de annonce de voiture d'occasion près de chez vous ou partout en France :</p>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="row">
              <div className="col col-1">
                <label>Quel véhicule recherchez vous ?</label>
                <input
                  name="car"
                  type="text"
                  className={form.car ? 'active' : null}
                  placeholder="Ex. Peugeot 308 Gti"
                  value={form.car}
                  onChange={onChange}
                />
              </div>
              <div className="gutter"/>
              <div className="col col-2">
                <label>Ville, département</label>
                <div className="pseudo-element"/>
                <input
                  type="text"
                  name="location"
                  className={`search ${form.location ? 'active' : null}`}
                  placeholder="Ex. Paris (75)"
                  value={form.location}
                  onChange={onChange}
                />
              </div>
              <div className="gutter"/>
              <div className="col col-3">
                <input type="submit" className="btn btn-primary btn-green" value="Rechercher"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Hero>
  )
}

const Header = () => {
  return (
    <header>
      <NavComp/>
      <HeroComp/>
    </header>
  )
}

export default Header
