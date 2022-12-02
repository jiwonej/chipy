import React from 'react';
import './Collection.css';
import MultiLineButton from '../../components/MultiLineButton/MultiLineButton';

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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,128L60,133.3C120,139,240,149,360,133.3C480,117,600,75,720,74.7C840,75,960,117,1080,128C1200,139,1320,117,1380,106.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
  </body>
  </html>
  )
}

export default Collection