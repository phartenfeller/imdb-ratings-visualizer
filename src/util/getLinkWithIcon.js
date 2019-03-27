import React from 'react';

/**
 * Gets a JSX Link from a movie
 * @param {String} url
 * @return {JSX}
 */
function getLinkWithIcon(url) {
  return (
    <a
      href={url}
      target="_blank"
      className="material-icons imdb-link"
      rel="noreferrer noopener"
    >
      open_in_new
    </a>
  );
}

export default getLinkWithIcon;
