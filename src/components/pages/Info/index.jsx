import React from 'react';
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
          citoyens, etc.). La plateforme de données ouvertes, géographiques et
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
    </div>
  );
}
