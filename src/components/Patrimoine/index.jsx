import React from 'react';
import './patrimoine.css';
import logoMinistere from './images/logoMinistere.jpg';
import logoMusee from './images/logoMusee.jpg';

function Patrimoine() {
  return (
    <div>
      <div className="Row">
        <div className="col-md-12">
          <h1 className="title_p">
            <b>Patrimoine</b>
          </h1>
          <div className="col-md-4 rounded  float-right">
            <img
              src={logoMusee}
              className="img-fluid img-thumbnail roundedImage"
              alt="Responsive_imge"
            />
            <p>
              <b>Musée d&apos;art</b>
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              incidunt quis id ex vel? Iste perferendis excepturi porro id illo
              pariatur in voluptatem sunt, reprehenderit nulla dolores?
              Dignissimos, deleniti culpa!
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <h4>
            <b>Musées</b>
          </h4>
          <p>
            Nombre de musées recensés
            <br /> sur la commune :<b className="number"> 10 </b>
          </p>
          <p>
            La base Muséofile permet de consulter
            <br /> les présentation des musées agréés
            <br /> par l&apos;Etat.Quelques instituitions, non
            <br /> porteuses de l&apos;appellation musée de
            <br /> France, comme celles relavant de
            <br /> l&apos;institut de France, figurent dans ce <br />
            recensement.
          </p>
        </div>
        <div className="col-md-3">
          <img
            src={logoMinistere}
            className="img-rate-quality-pico logoMinister"
            alt="Responsive_imge"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <hr className="orange-bar" />
        </div>
      </div>
    </div>
  );
}

export default Patrimoine;
