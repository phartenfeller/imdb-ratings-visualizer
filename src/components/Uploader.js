import React from 'react';
import PropTypes from 'prop-types';
import { uploadFile } from '../util/fileUpload';
import getUniqueMediaTypes from '../util/getUniqueMediaTypes';

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
    <div className="text-center">
      <h1 className="text-4xl pb-10 text-purple-300">
        Upload IMDb Ratings CSV
      </h1>
      {/* <input type="file" id="fileUpload" onChange={upload} /> */}

      <label className="w-64 m-auto flex flex-col items-center px-4 py-6 bg-gray-800 text-blue rounded-lg shadow-xl tracking-wide uppercase cursor-pointer hover:text-purple-200">
        <i className="material-icons">cloud_upload</i>
        <span className="mt-2 text-base leading-normal">Select a file</span>
        <input
          type="file"
          id="fileUpload"
          className="hidden"
          onChange={upload}
        />
      </label>
    </div>
  );
};

Uploader.propTypes = {
  setLoaded: PropTypes.func,
  setRatings: PropTypes.func,
  setLoadedMediaTypes: PropTypes.func,
};

export default Uploader;
