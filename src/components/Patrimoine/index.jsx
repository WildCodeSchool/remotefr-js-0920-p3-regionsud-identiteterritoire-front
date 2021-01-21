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
            <br /> l&apos;institut de France, figurent dans ce recensement.
          </p>
          <img
            src={logoMinistere}
            className="img-rate-quality-picto logoMinister "
            alt="Responsive_imge"
          />
        </div>
        <div className="Row">
          <div className="col-md-6">
            <img
              src={logoMusee}
              className="img-rate-quality-picto  roundedImage"
              alt="Responsive_imge"
            />
          </div>
          <div className="col-md-6">
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
      </div>
    </div>
  );
}

export default Patrimoine;
