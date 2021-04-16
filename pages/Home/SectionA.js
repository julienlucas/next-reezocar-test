import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import { SectionAComp } from '../../styles/pages/home-style'

export default function SectionA({ testimonialsData }) {
  const settings = {
    className: 'testimonials-slider',
    centerMode: false,
    adaptiveHeight: true,
    slidesToScroll: 1,
    focusOnSelect: true,
    infinite: true,
    variableWidth: true,
    nextArrow: <NewxShadow />,
    prevArrow: <PrevShadow />
  }

  return (
    <SectionAComp>
      <div className="container">
        <h2>Avis clients</h2>
        <Slider {...settings}>
          {testimonialsData && testimonialsData.map((testimonial, i) =>
            <Card testimonial={testimonial} key={i} />
          )}
        </Slider>
      </div>
    </SectionAComp>
  )
}

function Card({ testimonial }) {
  return (
    <div className="item">
      <p>{testimonial.quote}</p>
      <div className="box">
        <div>
          <strong>{testimonial.name}</strong>
          <p>{testimonial.job}</p>
        </div>
        <Image
          className="logo"
          src={testimonial.picture}
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