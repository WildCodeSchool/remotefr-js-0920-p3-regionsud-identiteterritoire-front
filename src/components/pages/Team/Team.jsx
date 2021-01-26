import React from 'react';
import './css/style.css';

function Team() {
  return (
    <main className="team-main">
      <article className="team-history">
        <div className="team-presentation">
          <h1>Présentation de l'équipe</h1>
        </div>
      </article>

      <article className="team-content">
        <img
          src="https://avatars0.githubusercontent.com/u/43884584?s=400&u=bbba901f0fa0cd299a051b09a9a416d1ae28622c&v=4"
          alt="Cédric Priouret"
          title="Cédric Priouret"
        />
        <h2>Cédric Priouret</h2>
        <p className="left-text">J'ai bossé tout seul sur ce projet.</p>
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
      <article className="team-content">
        <img
          src="http://cedricpriouret.fr/images/matisse.png"
          alt="Matisse Famularo"
          title="Matisse Famularo"
        />
        <h2>Mathias Famularo</h2>
        <p className="right-text">Expert comptable backend.</p>
        <div className="social-icons-team">
          <li>
            <a href="https://github.com/MatisseFMLR">
              <i className="fab fa-github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/matisse-famularo/">
              <i className="fab fa-linkedin" />
            </a>
          </li>
        </div>
      </article>
      <article className="team-content">
        <img
          src="https://avatars3.githubusercontent.com/u/69692885?s=400&u=0dbddc8ee11014caec923ac20214d25ac258d58d&v=4"
          alt="Justine Pain"
          title="Justine Pain"
        />
        <h2>Justine Pain</h2>
        <p className="left-text">
          J'aime manger des sandwichs sur l'autoroute et dans les aéroports.
        </p>
        <div className="social-icons-team">
          <li>
            <a href="https://github.com/PainJustine">
              <i className="fab fa-github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/painjustine/">
              <i className="fab fa-linkedin" />
            </a>
          </li>
        </div>
      </article>
      <article className="team-content">
        <img
          src="https://avatars0.githubusercontent.com/u/58628260?s=400&u=99e744fb2817df5e35345d876f2f3fb6f6df6eb3&v=4"
          alt="Cyrille Fabre"
          title="Cyrille Fabre"
        />
        <h2>Cyrille Fabre</h2>
        <p className="right-text">
          Je fais presque toujours des blagues nulles.
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
    </main>
  );
}

export default Team;
