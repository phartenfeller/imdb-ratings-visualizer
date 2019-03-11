import React from 'react';
import PropTypes from 'prop-types';
import { uploadFile } from '../util/fileUpload';
import getUniqueMediaTypes from '../util/getUniqueMediaTypes';
import './Uploader.scss';

const Uploader = ({ setLoaded, setRatings, setLoadedMediaTypes }) => {
  const upload = async () => {
    const file = document.getElementById('fileUpload').files[0];
    const json = await uploadFile(file);
    const mediaTypes = getUniqueMediaTypes(json);
    console.log(mediaTypes);
    setRatings(json);
    setLoadedMediaTypes(mediaTypes);
    setLoaded(true);
    sessionStorage.setItem('ratings', JSON.stringify(json));
    sessionStorage.setItem('mediaTypes', mediaTypes);
  };

  return (
    <div className="uploader">
      <h1>Upload IMDb Ratings CSV</h1>
      <input type="file" id="fileUpload" onChange={upload} />
    </div>
  );
};

Uploader.propTypes = {
  setLoaded: PropTypes.func,
  setRatings: PropTypes.func,
  setLoadedMediaTypes: PropTypes.func,
};

export default Uploader;
