import React, { useState } from 'react';
import styles from './layout.module.css';
import TextWithCursor from './textWithCursor.js'

function IconButton({ icon, onClick, backgroundColor, alt }) {
    const style = {
        backgroundColor: backgroundColor || 'transparent',
    };
    const [tooltipText, setTooltipText] = useState('');
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    function handleMouseMove(e) {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }

    return (
    <button
      className={styles.button} 
      style={style}
      onClick={onClick}
      onMouseMove={handleMouseMove}>
            <img 
            className={styles.buttonIcon} 
            src={icon} 
            alt={alt}
            onMouseOver={() => { setTooltipText(alt); }}
            onMouseOut={() => { setTooltipText(''); }}/>
          {tooltipText && (
            <TextWithCursor cursorPosition={cursorPosition} text={tooltipText} />
          )}
    </button>
  );
}

export default IconButton;