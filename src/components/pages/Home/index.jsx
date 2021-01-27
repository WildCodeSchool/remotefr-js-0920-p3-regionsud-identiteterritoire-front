/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './css/style.css';
import HomeMapBox from './mapbox';
import RandomCommuneBottom from './randomCommuneBottom';
import SliderTop from '../../elements/SliderTop';

/**
 * @class Home
 * @description Homepage du site web
 */
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <div className="Global">
        <SliderTop pictures="home-slide.jpg" />
        <div className="row">
          <div className="col-md-12">
            <div className="bigTitle">Laissez vous guider</div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="row">
              <div className="col-md-6">
                <BlockRandomCity
                  name="Avignon"
                  slug="avignon"
                  inseeCode="84007"
                  picture="marseille.jpg"
                />
                <BlockRandomCity
                  name="Toulon"
                  slug="toulon"
                  inseeCode="83137"
                  picture="toulon.jpg"
                />
              </div>
              <div className="col-md-6 mrg-home-decalage">
                <BlockRandomCity
                  name="Nice"
                  inseeCode="06088"
                  slug="nice"
                  picture="nice.jpg"
                />
                <BlockRandomCity
                  name="Forcalquier"
                  slug="forcalquier"
                  inseeCode="04088"
                  picture="forcalquier.jpg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row relative">
          <div className="bigTitle abso-choisir-sur-carte">
            Choisir sur une carte
          </div>
          <HomeMapBox />
        </div>
        <div className="row">
          <div className="col-md-12">
            <RandomCommuneBottom />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, sit
            aspernatur atque alias maiores iure commodi ratione reprehenderit id
            rem ducimus nostrum aut cumque suscipit eos, quod consequatur.
            Repellendus, quibusdam! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ullam, sit aspernatur atque alias maiores iure
            commodi ratione reprehenderit id rem ducimus nostrum aut cumque
            suscipit eos, quod consequatur. Repellendus, quibusdam! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ullam, sit aspernatur
            atque alias maiores iure commodi ratione reprehenderit id rem
            ducimus nostrum aut cumque suscipit eos, quod consequatur.
            Repellendus, quibusdam! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ullam, sit aspernatur atque alias maiores iure
            commodi ratione reprehenderit id rem ducimus nostrum aut cumque
            suscipit eos, quod consequatur. Repellendus, quibusdam! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ullam, sit aspernatur
            atque alias maiores iure commodi ratione reprehenderit id rem
            ducimus nostrum aut cumque suscipit eos, quod consequatur.
          </div>
        </div>
      </div>
    );
  };
}

/**
 * @class BlockRandomCity
 * @description Gere les block random des villes
 */
const BlockRandomCity = (props) => {
  const { name, inseeCode, picture, slug } = props;
  const pictureUrl = `/images/communes/${picture}`;
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <img src={pictureUrl} className="img-fluid" alt={name} />
        </div>
        <div className=" col-md-8">
          <Link
            to={`/commune/${inseeCode}/${slug}`}
            className="home-title-city"
          >
            {name}
          </Link>
          cp Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          alias ipsa aperiam voluptatum! Hic sint accusamus aperiam veritatis
          illo
        </div>
      </div>
    </div>
  );
};

BlockRandomCity.propTypes = {
  picture: PropTypes.string.isRequired,
  inseeCode: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Home;
