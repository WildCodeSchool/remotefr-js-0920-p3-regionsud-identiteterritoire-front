/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './css/style.css';
import RandomCommuneBottom from './randomCommuneBottom';
import RadarHome from '../../elements/Charts/RadarHome';
import SliderTop from '../../elements/SliderTop';
import LogoPartenaire from './LogoPartenaire';

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
      <div>
        <SliderTop pictures="home-slide.jpg" />

        <div className="row mt-5">
          <div className="col-md-6">
            <RadarHome />
          </div>
        </div>
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
                  name="Nice"
                  inseeCode="06088"
                  picture="nice.jpg"
                />
                <BlockRandomCity
                  name="Toulon"
                  inseeCode="83137"
                  picture="toulon.jpg"
                />
              </div>
              <div className="col-md-6 mrg-home-decalage">
                <BlockRandomCity
                  name="Forcalquier"
                  inseeCode="04088"
                  picture="forcalquier.jpg"
                />
                <BlockRandomCity
                  name="Bargème"
                  inseeCode="83010"
                  picture="bargeme.jpg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <RandomCommuneBottom />
        </div>
        <LogoPartenaire />
      </div>
    );
  };
}

/**
 * @class BlockRandomCity
 * @description Gere les block random des villes
 */
const BlockRandomCity = (props) => {
  const { name, inseeCode, picture } = props;
  const pictureUrl = `/images/communes/${picture}`;
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <img src={pictureUrl} className="img-fluid" alt={name} />
        </div>
        <div className=" col-md-8">
          <Link to={`/commune/${inseeCode}`} className="home-title-city">
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
};

export default Home;
