import React from 'react';
import './Home.css';
import profile from '../../assets/images/chipy-profile.svg';
import egg from '../../assets/images/egg.svg';
import alterEgo from '../../assets/images/chipy-alter-ego.svg';

const Home: React.FC<{}> = () => {
  return (
  <html lang="en">
  <head>
    <meta charSet="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
    <meta name="author" content="Jiwon Shin" />
    <title>Document</title>
  </head>
  <body>
    <div className="row">
      <div className="col-12 one-r-two-cc">
        <div className="one-r-two-cc-padding">
          <img src={profile} alt="Chipy's profile"/> 
        </div>
        <div className="one-r-two-cc-padding">
          <h2>
            Chip Chip,<br />
            <br/>
            My name is Chipy!<br />
            <br/>
            I'm a NFT collection from a village called Wonder.
          </h2>
        </div>
      </div>
    </div>
    <section className="intro-section">
      <div className="intro-container">
        <img src={profile} alt="Chipy's profile"></img>
      </div>
      <div className="intro-container">
        <h2 className="dialog">
          Chip Chip,<br />
          My name is Chipy!<br />
          I'm a NFT collection from a village called Wonder.
        </h2>
      </div>
    </section>
    <section className="roadmap-section">
      <h1>ROADMAP 1</h1>
      <h2 className="yellow-font">: evolution of Chipy</h2>
      <div className="roadmap-container">
        <img src={egg} alt="Chipy's egg"></img>
      </div>
      <div className="roadmap-container">
        <img src={alterEgo} alt="Chipy's alter ego"></img>
      </div>
    </section>
    {/* <div className={styles['intro-container']}>
      <div className={styles.columns}>
        <img src={profile} className={styles['profile']} alt="Chipy's profile"></img>
        <div className={styles.dialog}>
          <p>
            Chip Chip,<br />
            My name is Chipy!<br />
            I'm a NFT collection from a village called Wonder.
          </p>
        </div>
      </div>
    </div>
    <div className={styles['roadmap-container']}>
      <h1>ROADMAP</h1>
      <h2>: evolution of Chipy</h2>
      <div className={styles['phases']}>
        <div className={styles.phase}>
          <img src={egg} className={styles['roadmap-img']} alt="Chipy's egg"></img>
          <div className={styles['roadmap-text']}>
            <h3 className={styles['green-font']}>PHASE 1</h3>
            <h2>Chipy's birth</h2>
            <p className={styles['white-font']}>One early morning One early morning One early morning One early morning One early morning One early morning One early morning One early morning One early morning</p>
          </div>
        </div>
        <div className={styles.phase}>
        <div className={styles['roadmap-text']}>
            <h3 className={styles['green-font']}>PHASE 2</h3>
            <h2>Chipy's alter ego</h2>
            <p className={styles['white-font']}>One early morning One early morning One early morning One early morning One early morning One early morning One early morning One early morning One early morning</p>
          </div>
          <img src={alterEgo} className={styles['roadmap-img']} alt="Chipy's alter-ego"></img>
        </div>
      </div>
    </div> */}
    
  </body>
  </html>
  )
}

export default Home