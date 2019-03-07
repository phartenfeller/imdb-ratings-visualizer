import React from 'react';
import PropTypes from 'prop-types';
import { uploadFile } from './util/fileUpload';

const Uploader = ({ setLoaded }) => {
  const upload = async () => {
    const file = document.getElementById('fileUpload').files[0];
    const json = await uploadFile(file);
    console.log(json);
    setLoaded(true);
  };

  return (
    <div>
      <h1>Upload IMDb Ratings CSV</h1>
      <input type="file" id="fileUpload" onChange={upload} />
    </div>
  );
};

Uploader.propTypes = {
  setLoaded: PropTypes.func,
};

export default Uploader;
