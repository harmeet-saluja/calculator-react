import React from 'react';
import './output-box.css';
import PropTypes from 'prop-types';

const OutputBox = ({data}) => (
    <div className="output-box">
      <input className="output-box input-field" type="text" value={data} />
    </div>
);

OutputBox.protoTypes = {
  data: PropTypes.string.isRequired,
};

export default OutputBox;
