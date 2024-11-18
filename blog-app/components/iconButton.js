import React from 'react';
import styles from './layout.module.css';

function IconButton({ icon, onClick, backgroundColor }) {
    const style = {
        backgroundColor: backgroundColor || 'transparent',
    };
    return (
    <button className={styles.button} style={style} onClick={onClick}>
        <span>
            <img className={styles.buttonIcon} src={icon}/>
        </span>
    </button>
  );
}

export default IconButton;