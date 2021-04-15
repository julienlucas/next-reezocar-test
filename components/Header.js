import React, { useState, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const Nav = styled.nav`
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
        color: ${props => props.theme.black};
        &:hover, &:focus {
          color: ${props => props.theme.green100};
        }
      }
    }
  }
`;

const Hero = styled.div`
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
    border: 1px solid ${props => props.theme.grey100};
    outline: 0;
    user-select: none;
    width: 100%;
    color: ${props => props.theme.grey100};
    &:focus {
      border: 1px solid ${props => props.theme.black};
      color: ${props => props.theme.black};
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

const NavComp = () => {
  return (
    <Nav>
      <div className="container">
        {/* <Image
          className="logo"
          src="/images/MeilleureReprise-logo.png"
          alt="meilleur-reprise"
          width={98}
          height={40}
        /> */}

        <button className="btn btn-secondary">Vendre ma voiture</button>

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
          <h1>Concessionnaire en ligne spécialiste<br/> de <span className="blue">l'achat</span> et la <span className="green">vente</span> de voitures d'occasion</h1>
          <p>Trouver une petite annonce de annonce de voiture d'occasion près de chez vous ou partout en France :</p>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="row">
              <div className="col col-1">
                <label>Quel véhicule recherchez vous ?</label>
                <input
                  name="car"
                  type="text"
                  placeholder="Peugeot 308 Gti"
                  value={form.car}
                  onChange={onChange}
                />
              </div>
              <div className="gutter"/>
              <div className="col col-2">
                <label>Ville, département</label>
                <input type="text"
                  name="location"
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
  const theme = useContext(ThemeContext)

  return (
    <header>
      <NavComp theme={theme}/>
      <HeroComp/>
    </header>
  )
}

export default Header
