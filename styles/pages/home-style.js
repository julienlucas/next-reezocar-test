import styled from 'styled-components'
import { theme } from '../global-styles'

export const SectionAComp = styled.section`
  padding: 120px 0 30px;
  background: ${theme.blue50};
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

export const SectionBComp = styled.section`
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
        background: ${theme.grey50};
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

export const Filters = styled.div`
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
      border: 1px solid ${theme.blue150};
      color: ${theme.blue150};
      background: ${theme.grey50};
      &.active, &:hover, &:focus {
        background: ${theme.blue150};
        color: white;
        cursor: pointer;
      }
    }
  }
`