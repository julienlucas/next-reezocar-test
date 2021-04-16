import React, { useState } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import Select from 'react-select'
import { SectionBComp, Filters } from '../../styles/pages/home-style'

export default function SectionB({ carsData }) {
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

  const settings = {
    className: 'cars-slider',
    centerMode: false,
    adaptiveHeight: true,
    slidesToScroll: 1,
    focusOnSelect: true,
    infinite: true,
    variableWidth: true,
    nextArrow: <NextShadow />,
    prevArrow: <PrevShadow />
  }

  const mostViewedCars = [
    { value: 'BMW M3', label: 'BMW M3' },
    { value: 'Renault Megane', label: 'Renault Megane' },
    { value: 'Mercedes Class A', label: 'Mercedes Class A' }
  ]

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
    <SectionBComp>
      <div className="container">
        <div className="row">
          <div className="col col-left">
            <h2>Les dernières annonces <span className="green">publiées</span></h2>
            <p>Ils nous font confiance, nous avons <strong>inspecté</strong> leur véhicule avant de vous proposer ces annonces, acheter une voiture d'occasion à un particulier <strong>en toute sécurité</strong> contrôle technique OK, carnet d'entretient et révisions à jour, Mécanique et carrosserie en bon état</p>
          </div>
          <div className="col col-right">
            <Select
              instanceId={String}
              placeholder="Les modèles les plus vus"
              options={mostViewedCars}
              styles={customStyles}
              components={{ DropdownIndicator:() => null, IndicatorSeparator }}
            />
          </div>
        </div>
      </div>

      <Slider {...settings}>
        {carsData && carsData.map((car, i) =>
          <Card car={car} key={i} />
        )}
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
    </SectionBComp>
  )
}

function Card({ car }) {
  return (
    <div className="item">
      <Image
        src={car.picture ? car.picture : null}
        alt={car.name + car.description}
        width={215}
        height={120}
        layout="responsive"
      />
      <div className="box">
        <div className="name"><strong>{car.name}</strong></div>
        <p className="description">{car.description}</p>
        <p className="city">{car.city}</p>
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

// Custom styles for react select
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