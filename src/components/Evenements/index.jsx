import React from 'react';
import './evenements.css';

function Evenements() {
  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <h1 className="title_e">
            <b>Evévenements</b>
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
          <img src="" className="img-rate-quality-pico" alt="Responsive_imge" />
        </div>

        <div className="col-md-4">
          <div className="row">
            <div className="col-md-4">
              <img
                src=""
                className="img-fluid img-thumbnail roundedImage"
                alt="Responsive_imge"
              />
              <p>
                <b>Vivement dilanche au faron</b>
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis incidunt quis id ex vel? Iste perferendis excepturi
                porro id illo pariatur in voluptatem sunt, reprehenderit nulla
                dolores? Dignissimos, deleniti culpa!
              </p>
            </div>
            <div className="col-md-4">
              <img
                src=""
                className="img-fluid img-thumbnail roundedImage"
                alt="Responsive_imge"
              />
              <p>
                <b>Feu d&apos;artifice</b>
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis incidunt quis id ex vel? Iste perferendis excepturi
                porro id illo pariatur in voluptatem sunt, reprehenderit nulla
                dolores? Dignissimos, deleniti culpa!
              </p>
            </div>
            <div className="col-md-4">
              <img
                src=""
                className="img-fluid img-thumbnail roundedImage"
                alt="Responsive_imge"
              />
              <p>
                <b>Festival Jazz toulon</b>
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis incidunt quis id ex vel? Iste perferendis excepturi
                porro id illo pariatur in voluptatem sunt, reprehenderit nulla
                dolores? Dignissimos, deleniti culpa!
              </p>
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
