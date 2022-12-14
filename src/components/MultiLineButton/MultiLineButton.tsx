import React from 'react'
import styles from './MultiLineButton.module.css';

// React.MouseEventHandler<HTMLButtonElement>

const MultiLineButton: React.FC<{ text: String[]}> = ({ text }) => {
  return (
    <button className={styles.button}>
      <div className={styles['button-text']}>
        { text[0] } <br />
        { text[1] }
      </div>
    </button>
  )
}

export default MultiLineButton