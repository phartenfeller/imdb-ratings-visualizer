import React from 'react';

/**
 * Gets a JSX Link from a movie
 * @param {String} text
 * @return {JSX}
 */
function getSpanWithTooltip(text) {
  return (
    <div
      style={{
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        cursor: 'text',
      }}
    >
      <span title={text}>{text}</span>
    </div>
  );
}

export default getSpanWithTooltip;
