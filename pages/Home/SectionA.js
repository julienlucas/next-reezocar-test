import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import Slider from 'react-slick'
import Image from 'next/image'

const Section = styled.section`
  padding: 120px 0 30px;
  background: ${props => props.theme.blue50};
  h2 {
    color: #353535;
  }
  .testimonials-slider {
    .slick-prev:hover:before,
    .slick-prev:focus:before,
    .slick-next:hover:before,
    .slick-next:focus:before {
      display: none;
    }
    .next-shadow,
    .prev-shadow {
      position: absolute;
      width: 90px;
      height: 100%;
      top: 0;
      -webkit-appearance: none;
      cursor: pointer;
      z-index: 5;
      transition: all 0.5s ease;
      display: none;
    }
    .next-shadow {
      right: 0px;
    }
    .prev-shadow {
      left: -15px;
    }
    .slick-slide {
      height: 380px;
    }
    .item {
      max-width: 380px;
      margin: 0 10px;
      margin-bottom: 190px;
      padding: 25px 32px 70px 32px;
      background: white;
      border-radius: 6px;
      filter: drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.1));
      img {
        margin: 0 0 40px;
        border-radius: 50%;
      }
      div {
        left: -17px;
        float: right;
      }
      p:first-child {
        margin-bottom: 35px;
      }
      p:not(:first-child), strong {
        font-size: 14px;
        line-height: 1.5;
        padding: 0;
        margin: 0;
      }
      p {
        font-size: 16px;
        line-height: 26px;
      }
    }
  }
`

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

export default function SectionA() {
  const theme = useContext(ThemeContext)

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
    <Section theme={theme}>
      <div className="container">
        <h2>Avis clients</h2>
        <Slider {...settings}>
          <Card />
          <Card />
          <Card />
          <Card />
        </Slider>
      </div>
    </Section>
  )
}