import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import { SectionAComp } from '../../styles/pages/home-style'

export default function SectionA() {
  const settings = {
    className: 'testimonials-slider',
    centerMode: false,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    infinite: true,
    variableWidth: false,
    nextArrow: <NewxShadow />,
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

  return (
    <SectionAComp>
      <div className="container">
        <h2>Avis clients</h2>
        <Slider {...settings}>
          <Card />
          <Card />
          <Card />
          <Card />
        </Slider>
      </div>
    </SectionAComp>
  )
}

function Card() {
  return (
    <div className="item">
      <p>“En déposant mon annonce sur Annonces-auto.meilleure-reprise.com j’ai pu vendre ma voiture d’occasion rapidement et sans risques “</p>
      <div>
        <div>
          <strong>Florence</strong>
          <p>Directrice de sex-shop</p>
        </div>
        <Image
          className="logo"
          src="/images/florence.png"
          alt="meilleur-reprise"
          width={36}
          height={36}
        />
      </div>
    </div>
  )
}

function NewxShadow(props) {
  const { onClick } = props;
  return (
    <div
      aria-label="Next"
      className="next-shadow"
      onClick={onClick}
    >
      <img alt="" />
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
      <img alt="" />
    </div>
  )
}