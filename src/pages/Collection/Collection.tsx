import React from 'react';
import styles from './Collection.module.css';
import MultiLineButton from '../../components/MultiLineButton/MultiLineButton';

const series1Button: String[] = ["Series 1", ": alter ego"];
const series2Button: String[] = ["Series 2", ": winter"];


const Collection: React.FC<{}>  = () => {
  return (
    <div>
      <h1 className={styles.black}>COLLECTION</h1>
      <MultiLineButton text={series1Button}/>
      <MultiLineButton text={series2Button}/>
    </div>
  )
}

export default Collection