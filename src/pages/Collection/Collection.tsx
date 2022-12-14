import React from 'react';
import './Collection.css';
import MultiLineButton from '../../components/MultiLineButton/MultiLineButton';
import chipy1 from '../../assets/images/chipy1.png';
import chipy2 from '../../assets/images/chipy2.png';
import chipy3 from '../../assets/images/chipy3.png';
import chipyComingSoon from '../../assets/images/chipy-coming-soon.png';

const series1Button: String[] = ["Series 1", ": alter ego"];
const series2Button: String[] = ["Series 2", ": winter"];

const Collection: React.FC<{}>  = () => {
  return (
  <html lang="en">
  <head>
    <meta charSet="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
    <meta name="author" content="Jiwon Shin" />
    <title>Collection Page</title>
  </head>
  <body>
    <section className="black">
      <div className="flex-container flex-column center collection-header-padding">
        <h1>COLLECTION</h1>
        <div className="collection-button">
          <MultiLineButton text={series1Button}/>
          <MultiLineButton text={series2Button}/>
        </div>
      </div>
    </section>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
      <path fill="#000000" fill-opacity="1" d="M0,128L60,133.3C120,139,240,149,360,133.3C480,117,600,75,720,74.7C840,75,960,117,1080,128C1200,139,1320,117,1380,106.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
    </svg>
    <section>
      <div className="flex-container flex-column series-padding" id='series1'>
       <h3 className="purple-font">SERIES 1</h3>
       <h2>Chipy's alter-ego</h2>
       <div className="series-container">
        <a className="chipy-container" href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/47635161104206786525252357442716521826554114725926828444430921802715402076161">
          <img src={chipy1} alt="Chipy 1"></img>
          <p>Chipy #1</p>
        </a>
        <a className="chipy-container" href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/47635161104206786525252357442716521826554114725926828444430921804914425331713">
          <img src={chipy2} alt="Chipy 2"></img>
          <p>Chipy #2</p>
        </a>
        <a className="chipy-container" href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/47635161104206786525252357442716521826554114725926828444430921806013936959489">
          <img src={chipy3} alt="Chipy 3"></img>
          <p>Chipy #3</p>
        </a>
       </div>
      </div>
      <div className="flex-container flex-column series-padding" id='series2'>
       <h3 className="purple-font">SERIES 2</h3>
       <h2>Chipy's first winter</h2>
       <div className="series-container">
        <a className="chipy-container">
          <img src={chipyComingSoon} alt="Chipy 1"></img>
          <p>coming soon!</p>
        </a>
        <a className="chipy-container">
          <img src={chipyComingSoon} alt="Chipy 2"></img>
          <p>coming soon!</p>
        </a>
        <a className="chipy-container">
          <img src={chipyComingSoon} alt="Chipy 3"></img>
          <p>coming soon!</p>
        </a>
       </div>
      </div>
    </section>
  </body>
  </html>
  )
}

export default Collection