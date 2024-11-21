import React, { useState, useEffect } from 'react';
import styles from './layout.module.css';

function TextWithCursor({ cursorPosition, text }) {
  const [position, setTextPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTextPosition(cursorPosition);
  }, [cursorPosition]);

  return (
    <p 
    style={{ position: 'absolute', left: `${position.x}px`, top: `${position.y}px` }}
    className={styles.tooltip}>
        {text}
    </p>
  );
}

export default TextWithCursor;