import React from 'react';

/**
 * Gets a JSX Link from a movie
 * @param {String} text
 * @return {JSX}
 */
function getSpanWithTooltip(text) {
  return (
    <div title={text} className="truncate">
      {text}
    </div>
  );
}

export default getSpanWithTooltip;
