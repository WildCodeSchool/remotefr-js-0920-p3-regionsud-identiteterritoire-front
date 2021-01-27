import React from 'react';
import './evenements.css';
import Arsud from './images/Arsud_spectacle.jpg';
import Faron from './images/faron.jpg';
import FeuDartifice from './images/feu_dartifice.jpg';
import JazzToulon from './images/jazz_toulon.jpg';

function Evenements() {
  return (
    <div className=" container container-evenements">
      <div className="row">
        <div className="col-md-8">
          <h1 className="title">
            <b>Evènements</b>
          </h1>
          <h4>
            <b>Culturo</b>
          </h4>
          <p>
            <b>Site web:</b>
            <a href="https://www.culturo.fr"> https://www.culturo.fr</a>
          </p>
          <p>
            Culturo.fr publie l&apos;agenda des manifestations
            <br /> culturelles de la région Provence-Alpes-Côtes
            <br /> d&apos;Azur: Spéctacles, exposition, festivals,
            <br /> concerts, conférrence,saison théatrale etc ...
          </p>
          <img
            src={Arsud}
            className="img-rate-quality-pico logoArsud"
            alt="Responsive_imge"
          />
        </div>

        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={Faron}
                    className="rounded-circle roundedImage"
                    alt="Responsive_imge"
                  />
                </div>
                <div className="col-md-8 padding-text">
                  <p>
                    <b>Vivement dimanche au faron</b>
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
                    src={FeuDartifice}
                    className="rounded-circle roundedImage"
                    alt="Responsive_imge"
                  />
                </div>
                <div className="col-md-8 padding-text">
                  <p>
                    <b>Feu d&apos;artifice</b>
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
                    src={JazzToulon}
                    className="rounded-circle roundedImage"
                    alt="Responsive_imge"
                  />
                </div>
                <div className="col-md-8 padding-text">
                  <p>
                    <b>Festival Jazz Toulon</b>
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

export default Evenements;
