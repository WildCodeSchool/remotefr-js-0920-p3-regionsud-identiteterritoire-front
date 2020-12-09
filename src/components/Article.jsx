import React from 'react';
import Card from './Card';
import Thematiques from './Thematiques';

const Article = () => {
  return (
    <div className='article-container'>
      <section className='section-container'>
        <Card text='Se laisser inspirer' />
        <Card text='Choisir sur une carte' />
        <Card text='Se faire accompagner' />
      </section>

      <section className='section-container'>
        <Thematiques />
      </section>

      <section className='section-container'>
        <Card text='Y vivre' />
        <Card text='Découvrir' />
        <Card text="S'y installer" />
      </section>
    </div>
  );
};

export default Article;
