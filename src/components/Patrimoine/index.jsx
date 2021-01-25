import React from 'react';
import './patrimoine.css';
import logoMinistere from './images/logoMinistere.jpg';
import logoMusee from './images/logoMusee.jpg';

function Patrimoine() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
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
            <br /> l&apos;institut de France, figurent dans ce <br />
            recensement.
          </p>
          <img
            src={logoMinistere}
            className="img-rate-quality-pico logoMinister"
            alt="Responsive_imge"
          />
        </div>

        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={logoMusee}
                    className="rounded-circle roundedImage"
                    alt="Responsive_imge"
                  />
                </div>
                <div className="col-md-8">
                  <p>
                    <b>Musée d&apos;art</b>
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis incidunt quis id ex vel? Iste perferendis
                    excepturi porro id illo pariatur in voluptatem sunt,
                    reprehenderit nulla dolores? Dignissimos, deleniti culpa!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={logoMusee}
                    className="rounded-circle roundedImage"
                    alt="Responsive_imge"
                  />
                </div>
                <div className="col-md-8">
                  <p>
                    <b>Musée d&apos;art</b>
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis incidunt quis id ex vel? Iste perferendis
                    excepturi porro id illo pariatur in voluptatem sunt,
                    reprehenderit nulla dolores? Dignissimos, deleniti culpa!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={logoMusee}
                    className="rounded-circle roundedImage"
                    alt="Responsive_imge"
                  />
                </div>
                <div className="col-md-8">
                  <p>
                    <b>Musée d&apos;art</b>
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis incidunt quis id ex vel? Iste perferendis
                    excepturi porro id illo pariatur in voluptatem sunt,
                    reprehenderit nulla dolores? Dignissimos, deleniti culpa!
                  </p>
                </div>
              </div>
            </div>
          </div>
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
