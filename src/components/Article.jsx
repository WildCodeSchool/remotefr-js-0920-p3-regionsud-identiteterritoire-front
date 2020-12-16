import React from 'react';
import Card from './Card';
import Thematiques from './Thematiques';
import inspirer from '../assets/inspirer.png';
import carte from '../assets/carte.png';
import accompagner from '../assets/accompagner.png';
import vivre from '../assets/vivre.png';
import decouvrir from '../assets/decouvrir.png';
import installer from '../assets/installer.png';
import './Article.css';

const Article = () => {
  return (
    <div className='article-container'>
      <section className='section-container'>
        <Card text='Se laisser inspirer' src={inspirer} />
        <Card text='Choisir sur une carte' src={carte} />
        <Card text='Se faire accompagner' src={accompagner} />
      </section>
      <Thematiques />
      <section className='section-container'>
        <Card text='Y vivre' src={vivre} />
        <Card text='Découvrir' src={decouvrir} />
        <Card text="S'y installer" src={installer} />
      </section>
    </div>
  );
};

export default Article;
