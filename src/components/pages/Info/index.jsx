import React from 'react';
import './css/style.css';
import Datapict from './images/3169210.jpg';

export default function Info() {
  return (
    <div className="row">
      <div className="col-md-4">
        <img src={Datapict} alt="La data" className="img-fluid" />
      </div>
      <div className="col-md-8">
        <h1>Informations</h1>
        <p>
          {`La Région Sud Provence-Alpes-Côte d'Azur porte depuis 2016 l'ambition
          de l'ouverture des données publiques pour la production de services
          innovants à destination des territoires (collectivités, entreprises,
          citoyens, etc.).La plateforme de données ouvertes, géographiques et
          intelligentes DataSud (https://www.datasud.fr) constitue le premier
          outil mutualisé mis gratuitement à disposition des producteurs de
          données pour répondre à ces enjeux communs de transformation numérique
          du territoire régional. La Région a également initié plusieurs
          expérimentations de services innovants et souhaité développé
          l'écosystème des acteurs de la donnée en région.`}
        </p>
        <p>
          {`Dans ce contexte, le partenariat noué avec la Wild Code School en
          octobre 2020, a notamment pour objectif de mobiliser des étudiants
          Data Analystes et Web Développeurs sur des cas d'usage du domaine
          public pour prototyper de nouvelles solutions. Le présent projet,
          intitulé "Carte d'identité du territoire" se propose de livrer au
          grand public, sur la seule base de données produites par les acteurs
          du territoire, une information fiable sur chaque commune composant le
          territoire régional de Provence-Alpes-Côte d'Azur : que vous soyez
          résidant ou de passage, vous trouverez dans cette carte d'identité
          tout un tas d'informations thématisées susceptibles de vous éclairer
          sur la vie de nos territoires.`}
        </p>
        <p>
          {`Ce prototype n'ambitionne pas d'être exhaustif mais de démontrer
          l'utilité de l'ouverture des données de qualité pour permettre le
          développement d'applications, et de leur disponibilité en continu pour
          assurer l'industrialisation de tels services. Cette Carte d'Identité
          de territoire a ainsi été conçue dans la perspective d'une "marque
          blanche" à destination des communes, quelle que soit leur taille, pour
          que chacune puisse gratuitement informer de manière fiable les
          usagers. Ce projet a été coaché par le service SMART de la Région et
          mené techniquement par une équipe de jeunes Web développeurs :`}
        </p>
      </div>
      <hr className="orange-bar" />
      <div className="row">
        <div className="col-md-6" id="dev">
          <article className="team-content">
            <img
              src="https://avatars0.githubusercontent.com/u/43884584?s=400&u=bbba901f0fa0cd299a051b09a9a416d1ae28622c&v=4"
              alt="Cédric Priouret"
              title="Cédric Priouret"
            />
            <h2>Cédric Priouret</h2>
            <p className="left-text">
              Une affection particulière pour le Css et le front
            </p>
            <div className="social-icons-team">
              <li>
                <a href="https://github.com/CedricPriouret">
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/cedricpriouret/">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </div>
          </article>
        </div>
        <div className="col-md-6">
          <article className="team-content">
            <img
              src="https://avatars.githubusercontent.com/u/17590755?s=400&u=5dd7478904dbff4e07712e6342a9a5909a079819&v=4"
              alt="Alexandre Chauvin"
              title="Alexandre Chauvin"
            />
            <h2>Alexandre Chauvin</h2>
            <p className="right-text">
              Expert carte et backend. Je code autant que je sors de blagues...
            </p>
            <div className="social-icons-team">
              <li>
                <a href="https://github.com/woozyfr">
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/alexandre-chauvin-12b5a172/">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </div>
          </article>
        </div>
        <div className="col-md-6">
          <article className="team-content">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E03AQEWzpq-Uw_mpw/profile-displayphoto-shrink_800_800/0/1607436442351?e=1617235200&v=beta&t=rkJrDZX5YTOTXcUuDNAcVEbs2zC7Y6zejKDiRHlc_es"
              alt="Miguel Santos"
              title="Miguel Santos"
            />
            <h2>Miguel Santos</h2>
            <p className="left-text">
              Je manie la guitare et le code de la même façon. Avec style.
            </p>
            <div className="social-icons-team">
              <li>
                <a href="https://github.com/MJSantos27">
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/migueljsantos/">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </div>
          </article>
        </div>
        <div className="col-md-6">
          <article className="team-content">
            <img
              src="https://avatars0.githubusercontent.com/u/58628260?s=400&u=99e744fb2817df5e35345d876f2f3fb6f6df6eb3&v=4"
              alt="Cyrille Fabre"
              title="Cyrille Fabre"
            />
            <h2>Cyrille Fabre</h2>
            <p className="right-text">
              Garant de la bonne humeur, et acteur de la cohésion de groupe.
            </p>
            <div className="social-icons-team">
              <li>
                <a href="https://github.com/Cissou13">
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/cyrille-fabre/">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </div>
          </article>
        </div>
      </div>
      <hr className="orange-bar" />
    </div>
  );
}
