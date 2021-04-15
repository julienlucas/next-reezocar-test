import React, { useState, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import Slider from 'react-slick'
import Image from 'next/image'
import Link from 'next/link'
import Select from 'react-select'

const Section = styled.section`
  padding: 50px 0 80px;
  .col-left {
    float: left;
    width: 65%;
  }
  .col-right {
    float: right;
    div {
      max-width: 320px;
    }
  }
  select {
    max-width: 320px;
    width: 100%;
  }
  p, h2 {
    max-width: 765px;
    width: 100%;
  }
  p {
    font-size: 18px;
    strong {
      font-weight: 600;
      line-height: 1.2;
    }
  }
  .btn-primary {
    position: relative;
    margin: 0 auto;
    display: table;
  }
  .cars-slider {
    margin-top: 40px;
    .slick-prev:hover:before,
    .slick-prev:focus:before,
    .slick-next:hover:before,
    .slick-next:focus:before {
    }
    .next-shadow,
    .prev-shadow {
      position: absolute;
      width: 64px;
      height: 64px;
      background: red;
      border-radius: 50%;
      background: white;
      top: 130px;
      appearance: none;
      cursor: pointer;
      z-index: 5;
      transition: all 0.5s ease;
      filter: drop-shadow(-3px 4px 4px rgba(5, 102, 141, 0.1));
      &:hover {
        background: ${props => props.theme.grey50};
      }
      div {
        position: absolute;
        top: 30%;
        left: 30%;
      }
    }
    .next-shadow {
      right: calc(50% - 590px);
      div {
        transform: rotate(-90deg);
      }
    }
    .prev-shadow {
      display: none;
      left: calc(50% - 620px);
      div {
        transform: rotate(90deg);
      }
    }
    .slick-slide {
      height: 380px;
    }
    .item {
      height: 320px;
      max-width: 240px;
      width: 100%;
      margin-bottom: 190px;
      margin: 0 -100px;
      background: white;
      box-shadow: 0px 20px 40px rgba(5, 102, 141, 0.1);
      border-radius: 6px;
      cursor: pointer;
      transition: all .03s ease-out;
      &:hover {
        transition: all .03s ease-out;
        box-shadow: 0px 25px 45px rgba(5, 102, 141, 0.15);
      }
      .box {
        padding: 15px 20px;
      }
      img {
        height: 162px;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
      }
      p {
        font-size: 14px;
        line-height: 20px;
      }
      strong {
        line-height: 24px;
        font-size: 16px;
        color: black;
      }
    }
  }
`

const Filters = styled.div`
  .col-left, .col-right {
    margin-bottom: 68px;
    width: 50%;
    float: left;
  }
  ul {
    padding: 0;
    margin: 0 0 15px;
    li {
      margin-right: 8px;
      display: inline-block;
      width: auto;
      padding: 22px 29px;
      border-radius: 100px;
      line-style: none;
      line-height: 0;
      font-weight: 600;
      border: 1px solid ${props => props.theme.blue150};
      color: ${props => props.theme.blue150};
      background: ${props => props.theme.grey50};
      &.active, &:hover, &:focus {
        background: ${props => props.theme.blue150};
        color: white;
        cursor: pointer;
      }
    }
  }
`

function Card({ car }) {
  return (
    <div className="item">
      <Image
        className="logo"
        src={car.picture ? car.picture : null}
        alt="meilleur-reprise"
        width={216}
        height={132}
        layout="responsive"
      />
      <div className="box">
        <strong>{car.name}</strong>
        <p>{car.description}</p>
        <strong>{car.price}</strong>
      </div>
    </div>
  )
}

function NextShadow(props) {
  const { onClick } = props;
  return (
    <div
      aria-label="Next"
      className="next-shadow"
      onClick={onClick}
    >
      <Image
        className="icon"
        src="/icons/down-chevron.svg"
        width={25}
        height={25}
        layout="fixed"
      />
    </div>
  )
}

function PrevShadow(props) {
  const { onClick } = props;
  return (
    <div
      aria-label="Previous"
      className="prev-shadow"
      onClick={onClick}
    >
      <Image
        className="icon"
        src="/icons/down-chevron.svg"
        width={25}
        height={25}
        layout="fixed"
      />
    </div>
  )
}

export default function SectionB({ cars }) {
  const [menuVilles] = useState([
    'Marseille (+300)',
    'Paris (+700)',
    'Nancy'
  ])
  const [menuDépartements] = useState([
    'Loraine (+40)',
    'Rhônes-Alpes (+70)'
  ])
  const [menuVehicules] = useState([
    'Berline (+400)',
    '4 x 4',
    'Citadine',
    'Utilitaires'
  ])
  const [menuMarques] = useState([
    'Bmw',
    'Peugeot',
    'Renault',
    'Mercedes'
  ])
  const [menusSelected, setMenusSelected] = useState({})

  const theme = useContext(ThemeContext)

  const settings = {
    className: 'cars-slider',
    centerMode: false,
    adaptiveHeight: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    focusOnSelect: true,
    infinite: true,
    variableWidth: false,
    nextArrow: <NextShadow />,
    prevArrow: <PrevShadow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          variableWidth: true
        }
      }
    ]
  }

  const options = [
    { value: 'BMW M3', label: 'BMW M3' },
    { value: 'Renault Megane', label: 'Renault Megane' },
    { value: 'Mercedes Class A', label: 'Mercedes Class A' }
  ]

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      fontSize: '16px',
      fontWeight: '600',
      background: state.isSelected ? '#1FC29B' : 'white',
      color: state.isSelected ? 'white' : '#494949',
      cursor: 'pointer'
    }),
    singleValue: (provided) => ({
      ...provided
    }),
    control: base => ({
      ...base,
      marginTop: '40px',
      float: 'right',
      width: '320px',
      padding: '10px',
      fontSize: '16px',
      fontWeight: '600',
      color: '#494949',
      border: '1px solid #494949',
      boxShadow: 'none',
      cursor: 'pointer'
    })
  }

  const IndicatorSeparator = () => {
    return <Image
      className="icon"
      src="/icons/down-chevron.svg"
      width={40}
      height={20}
      layout="fixed"
    />
  };

  return (
    <Section theme={theme}>
      <div className="container">
        <div className="row">
          <div className="col col-left">
            <h2>Les dernières annonces <span className="green">publiées</span></h2>
            <p>Ils nous font confiance, nous avons <strong>inspecté</strong> leur véhicule avant de vous proposer ces annonces, acheter une voiture d'occasion à un particulier <strong>en toute sécurité</strong> contrôle technique OK, carnet d'entretient et révisions à jour, Mécanique et carrosserie en bon état</p>
          </div>
          <div className="col col-right">
            <Select
              placeholder="Les modèles les plus vus"
              options={options}
              styles={customStyles}
              components={{ DropdownIndicator:() => null, IndicatorSeparator }}
            />
          </div>
        </div>
      </div>

      <Slider {...settings}>
        {cars && cars.map((car, i) => (
          <Card car={car} key={i} />
        ))}
      </Slider>

      <div className="container">
        <Filters className="row">
          <div className="col col-left">
            <strong>Par ville</strong>
            <ul>
              {menuVilles.map(ville => <li key={ville} className={menusSelected.villes === ville ? 'active' : null} onClick={(e) => setMenusSelected({ ... menusSelected, villes : ville})}>{ville}</li>)}
            </ul>
            <strong>Par département</strong>
            <ul>
              {menuDépartements.map(departement => <li key={departement} className={menusSelected.departements === departement ? 'active' : null} onClick={(e) => setMenusSelected({ ... menusSelected, departements : departement})}>{departement}</li>)}
            </ul>
          </div>
           <div className="col col-right">
            <strong>Par type de véhicule</strong>
            <ul>
              {menuVehicules.map(vehicule => <li key={vehicule} className={menusSelected.vehicules === vehicule ? 'active' : null} onClick={(e) => setMenusSelected({ ... menusSelected, vehicules : vehicule})}>{vehicule}</li>)}
            </ul>
            <strong>Par marque</strong>
            <ul>
              {menuMarques.map(marque => <li key={marque} className={menusSelected.marques === marque ? 'active' : null} onClick={(e) => setMenusSelected({ ... menusSelected, marques : marque})}>{marque}</li>)}
            </ul>
          </div>
        </Filters>

        <button className="btn btn-primary">Voir toutes les annonces</button>
      </div>
    </Section>
  )
}