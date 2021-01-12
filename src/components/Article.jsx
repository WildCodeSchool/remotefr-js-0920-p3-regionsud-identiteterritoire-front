import React from 'react';
import Card from './Card';
import Partenaires from './Partenaires';
import inspirer from '../assets/inspirer.png';
import carte from '../assets/carte.png';
import Datasud from '../assets/Home_LogoDataSud.png';
import Apidae from '../assets/Home_LogoApidae.png';
import Arsud from '../assets/Home_LogoArSud.png';
import Parc from '../assets/Home_LogoPNR.png';
import Culture from '../assets/Home_LogoMinistereCulture.png';
import './Article.css';

const Article = () => {
  return (
    <main>
      <div className='article-container'>
        <section className='section-container'>
          <h2>Laissez vous guider</h2>
          <div className='left-side'>
            <Card text='Marseille' src={inspirer} />
            <Card text='Nice' src={inspirer} />
          </div>
          <div className='right-side'>
            <Card text='Toulon' src={inspirer} />
            <Card text='Aix-en-provence' src={inspirer} />
          </div>
        </section>
      </div>

      <div className='article-container'>
        <section className='section-container'>
          <Card text='Choisir sur une carte' src={carte} />
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
    </main>
  );
};

export default Article;
