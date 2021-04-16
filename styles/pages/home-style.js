import styled from 'styled-components'
import { theme } from '../global-styles'

export const SectionAComp = styled.section`
  padding: 110px 0 30px;
  background: ${theme.blue50};
  height: 420px;
  h2 {
    color: #353535;
  }
  .testimonials-slider {
    position: absolute;
    margin: 0 auto;
    display: table;
    width: 1180px;
    .next-shadow,
    .prev-shadow {
      position: absolute;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: white;
      top: 95px;
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
      left: 1160px;
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
      height: 205px;
      width: 230px;
    }
    .item {
      max-width: 213px;
      height: 185px;
      margin: 0;
      padding: 10px 20px 50px;
      background: white;
      border-radius: 6px;
      filter: drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.1));
      img {
        margin: 0 0 40px;
        border-radius: 50%;
      }
      .box {
        margin-top: 10px;
        float: right;
        width: 100%;
        div {
          top: -33px;
        }
      }
      p:first-child {
        margin-bottom: 0;
      }
      p:not(:first-child), strong {
        font-size: 12px;
        line-height: 1.5;
        padding: 0;
        margin: 0 0 0 50px;
      }
      p {
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
  @media (min-width: 990px) {
    padding: 120px 0 30px;
    height: 560px;
    .testimonials-slider {
      .slick-slide {
        height: 380px;
        width: 400px;
      }
      .item {
        max-width: 380px;
        height: auto;
        padding: 25px 32px 70px;
        .box {
          margin-top: 0;
          div {
            top: -43px;
          }
        }
        p:first-child {
          margin-bottom: 35px;
        }
        p:not(:first-child), strong {
          font-size: 14px;
          line-height: 1.8;
        }
        p {
          font-size: 16px;
          line-height: 26px;
        }
      }
    }
  }
`

export const SectionBComp = styled.section`
  padding: 25px 0 70px;
  width: 100vw;
  overflow-x: hidden;
  .col-left {
    float: left;
    width: 100%;
  }
  .col-right {
    float: right;
    display: none;
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
    width: 100%;
  }
  .cars-slider {
    margin-top: 40px;
    .next-shadow,
    .prev-shadow {
      position: absolute;
      width: 64px;
      height: 64px;
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
      width: 260px;
    }
    .item {
      height: 320px;
      width: 240px;
      margin-bottom: 190px;
      margin: 0 20px;
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
  @media (min-width: 990px) {
    padding: 50px 0 80px;
    .col-left {
      width: 65%;
    }
    .col-right {
      display: block;
    }
    .btn-primary {
      width: auto;
    }
    .cars-slider {
      .slick-slide {
        width: 255px;
      }
      .item {
        margin: 0 -100px;
      }
    }
  }
`

export const SectionCComp = styled.section`
  padding: 30px 0 40px;
  background: ${theme.green50};
  width: 100%;
  h2, p {
    text-align: left;
  }
  h2 {
    margin-bottom: 10px;
  }
  h3 {
    margin-top: -5px;
  }
  * {
    text-decoration: none;
  }
  img {
    border-radius: 12px;
    height: 216px;
    width: 100%;
  }
  p:not(.title):not(.description) {
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    color: ${theme.blue150}
  }
  .title, .description {
    text-align: left;
    font-size: 14px;
    line-height: 1.7;
    color: ${theme.black}
    text-transform: auto;
  }
  .title {
    margin-top: 15px;
    font-weight: 500;
    font-size: 12px;
  }
  .row {
    margin-top: 30px;
    display: table;
    width: 100%;
  }
  .col {
    flex-grow: 4;
  }
  .gutter {
    flex-grow: 1;
    width: 70px;
  }
  .box {
    height: 100%;
  }
  .btn {
    position: relative;
    margin-bottom: 35px;
  }
  @media (min-width: 640px) {
    padding: 40px 0 135px;
    h2, p {
      text-align: center;
    }
    .row {
      display: flex;
      margin-top: 50px;
    }
    .btn {
      position: absolute;
      bottom: -90px;
    }
  }
`

export const Filters = styled.div`
  display: none;
  .col-left, .col-right {
    margin-bottom: 68px;
    width: 50%;
    float: left;
  }
  ul {
    padding: 0;
    margin: 0 0 15px;
    li {
      margin: 0 8px 8px 0;
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
  @media (min-width: 990px) {
    display: block;
  }
`