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
        <div className="col-md-10 offset-md-1">
          <div className="mt-5">
            <div className="row">
              <div className="col-md-6">
                <RadarHome />
              </div>
              <div className="col-md-6">
                <div className="blockJauneHome mx-auto">
                  <div className="enChiffre">En Chiffres</div>
                  <div className="leSaviezVous">Le saviez-vous ?</div>
                  <div className="row mt-2">
                    <div className="col-md-4">
                      <div className="nombreHab text-right">3</div>
                    </div>
                    <div className="col-md-8 pt-3 leSaviezVous-text">
                      Habitants à <b>Majastres</b>, la ville la moins peuplée de
                      la Région Sud.
                    </div>
                  </div>

                  <div className="row mt-0">
                    <div className="col-md-4">
                      <div className="superficieHome text-right">0,7</div>
                    </div>
                    <div className="col-md-8 pt-3 leSaviezVous-text">
                      Différence de superficie (en km²) entre la Région sud
                      (31,4km²) et la <b>Belgique</b> (30,6km²)
                    </div>
                  </div>

                  <div className="row mt-0">
                    <div className="col-md-4">
                      <div className="superficieHome text-right">7,5</div>
                    </div>
                    <div className="col-md-8 pt-3 leSaviezVous-text">
                      Arles pourrait contenir 7.5 fois la ville de <b>Paris</b>.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="bigTitle">Laissez vous guider</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <BlockRandomCity
                    name="Nice"
                    inseeCode="06088"
                    picture="nice.jpg"
                    text="Nice est une commune du sud-est de la France, préfecture du département des Alpes-Maritimes et deuxième ville de la région."
                  />
                  <BlockRandomCity
                    name="Toulon"
                    inseeCode="83137"
                    picture="toulon.jpg"
                    text="Toulon est une commune du Sud-Est de la France, chef-lieu du département du Var et siège de sa préfecture. "
                  />
                </div>
                <div className="col-md-6 mrg-home-decalage">
                  <BlockRandomCity
                    name="Forcalquier"
                    inseeCode="04088"
                    picture="forcalquier.jpg"
                    text="Forcalquier en occitan provençal Forcauquièr selon la graphie classique, Fourcauquié selon la graphie mistralienne"
                  />
                  <BlockRandomCity
                    name="Bargème"
                    inseeCode="83010"
                    picture="bargeme.jpg"
                    text="Bargème fait partie de la communauté de Dracénie Provence Verdon agglomération (ex-Communauté d'Agglomération Dracénoise) de 110 014 habitants en 2017"
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
      </div>
    );
  };
}

/**
 * @class BlockRandomCity
 * @description Gere les block random des villes
 */
const BlockRandomCity = (props) => {
  const { name, inseeCode, picture, text } = props;
  const pictureUrl = `/images/communes/${picture}`;
  return (
    <div>
      <div className="row mb-3">
        <div className="col-md-4">
          <img src={pictureUrl} className="img-fluid" alt={name} />
        </div>
        <div className=" col-md-8">
          <Link to={`/commune/${inseeCode}`} className="home-title-city">
            {name}
          </Link>
          {text}
        </div>
      </div>
    </div>
  );
};

BlockRandomCity.propTypes = {
  picture: PropTypes.string.isRequired,
  inseeCode: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Home;
