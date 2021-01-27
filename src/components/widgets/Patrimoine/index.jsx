import React from 'react';
import './css/styles.css';
import logoMinistere from './images/logoMinistere.jpg';
import logoMusee from './images/logoMusee.jpg';

function Patrimoine() {
  return (
    <section className="row">
      <div className="col-md-10 offset-md-1">
        <div className="row">
          <div className="col-md-6">
            <h3 className="titlePatrimoine">Patrimoine</h3>
            <h4>
              <b>Musées</b>
            </h4>

            <p>
              Nombre de musées recensés
              <br /> sur la commune :<b className="number"> 10 </b>
            </p>
            <p className="patrimoine-text">
              La base Muséofile permet de consulter les présentation des musées
              agréés par l&apos;Etat.Quelques instituitions, non porteuses de
              l&apos;appellation musée de France, comme celles relavant de
              l&apos;institut de France, figurent dans ce recensement.
            </p>
            <img
              src={logoMinistere}
              className="logoMinister"
              alt="Logo du ministère de la culture"
            />
          </div>
          <div className="col-md-6">
            <BlockEvents
              title="Musée d'art"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          incidunt quis id ex vel? Iste perferendis excepturi porro id illo
          pariatur in voluptatem sunt, reprehenderit nulla dolores? Dignissimos,
          deleniti culpa!"
              image={logoMusee}
            />

            <BlockEvents
              title="Musée d'art"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          incidunt quis id ex vel? Iste perferendis excepturi porro id illo
          pariatur in voluptatem sunt, reprehenderit nulla dolores? Dignissimos,
          deleniti culpa!"
              image={logoMusee}
            />

            <BlockEvents
              title="Musée d'art"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          incidunt quis id ex vel? Iste perferendis excepturi porro id illo
          pariatur in voluptatem sunt, reprehenderit nulla dolores? Dignissimos,
          deleniti culpa!"
              image={logoMusee}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BlockEvents(props) {
  const { title, description, image } = props;
  return (
    <div className="row">
      <div className="col-md-3">
        <img
          src={image}
          className="rounded-circle roundedImage"
          alt="Responsive_imge"
        />
      </div>
      <div className="col-md-9">
        <p>
          <b>{title}</b>
          <br />
          {description}
        </p>
      </div>
    </div>
  );
}

export default Patrimoine;
