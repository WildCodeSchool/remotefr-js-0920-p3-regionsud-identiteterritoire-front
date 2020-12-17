import React from 'react';
import Card from './Card';
import Thematiques from './Thematiques';
import Partenaires from './Partenaires';
import inspirer from '../assets/inspirer.png';
import carte from '../assets/carte.png';
import accompagner from '../assets/accompagner.png';
import vivre from '../assets/vivre.png';
import decouvrir from '../assets/decouvrir.png';
import installer from '../assets/installer.png';
import Datasud from '../assets/Home_LogoDataSud.png';
import Apidae from '../assets/Home_LogoApidae.png';
import Arsud from '../assets/Home_LogoArSud.png';
import Parc from '../assets/Home_LogoPNR.png';
import Culture from '../assets/Home_LogoMinistereCulture.png';
import './Article.css';

const Article = () => {
  return (
    <div className='article-container'>
      <section className='section-container'>
        <Card text='Se laisser inspirer' src={inspirer} />
        <Card text='Choisir sur une carte' src={carte} />
        <Card text='Se faire accompagner' src={accompagner} />
      </section>
      <div>
        <Thematiques />
      </div>
      <hr className='hr-full' />
      <section className='section-container'>
        <Card text='Y vivre' src={vivre} />
        <Card text='Découvrir' src={decouvrir} />
        <Card text="S'y installer" src={installer} />
      </section>
      <hr className='hr-full' />
      <section className='section-container logos'>
        <Partenaires src={Datasud} alt='lorem ipsum' title='lorem ipsum' />
        <Partenaires src={Apidae} alt='lorem ipsum' title='lorem ipsum' />
        <Partenaires src={Arsud} alt='lorem ipsum' title='lorem ipsum' />
        <Partenaires src={Parc} alt='lorem ipsum' title='lorem ipsum' />
        <Partenaires src={Culture} alt='lorem ipsum' title='lorem ipsum' />
      </section>
    </div>
  );
};

export default Article;
