import React from 'react';
import './Home.css';
import profile from '../../assets/images/chipy-profile.svg';
import egg from '../../assets/images/egg.svg';
import alterEgo from '../../assets/images/chipy-alter-ego.svg';
import market from '../../assets/images/market.svg';

const Home: React.FC<{}> = () => {
  return (
  <html lang="en">
  <head>
    <meta charSet="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
    <meta name="author" content="Jiwon Shin" />
    <title>Home Page</title>
  </head>
  <body>
    <section>
      <div className="flex-container flex-padding center">
        <img src={profile} alt="Chipy's profile"></img>
        <div className="text-container top-padding">
          <p className="intro">
            Unlock your inner child with Chipy
          </p>
          <p className="self-intro">
            Chip Chip, My name is Chipy!<br />
            I'm a NFT collection from a village called Oregg.
          </p>
        </div>
      </div>
    </section>
    <section className="black">
      <div className="flex-container flex-padding flex-column">
        <h1>ROADMAP</h1>
        <h2 className="yellow-font">: evolution of Chipy</h2>
        <div className="phase-container">
          <img src={egg} alt="Chipy's egg"></img>
          <div className="text-container">
            <h3 className="green-font">PHASE 1</h3>
            <h2 className="yellow-font">Chipy's Birth</h2>
            <p className="white-font">Once upon a time, in a metaverse so far away, your favorite childhood memory - Chipy - came to life.</p>
          </div>
        </div>
        <div className="phase-container">
          <img className="disappear" src={alterEgo} alt="Chipy's alter ego"></img>
          <div className="text-container">
            <h3 className="green-font">PHASE 2</h3>
            <h2 className="yellow-font">Chipy's Alter Ego</h2>
            <p className="white-font">Chipy's personality is dependent on your imagination and creativity. Explore different capabilites of Chipy.</p>
          </div>
          <img className="show" src={alterEgo} alt="Chipy's alter ego"></img>
        </div>
        <div className="phase-container">
          <img src={market} alt="NFT market"></img>
          <div className="text-container">
            <h3 className="green-font">PHASE 3</h3>
            <h2 className="yellow-font">Enters the NFT market</h2>
            <p className="white-font">Chipy is now available on OpenSea. Collect your childhood memory in the digital market and join our community.</p>
          </div>
        </div>
      </div>
    </section>
  </body>
  </html>
  )
}

export default Home