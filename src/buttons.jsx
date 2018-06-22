import React from 'react';
import './buttons.css';
import PropTypes from 'prop-types';

const Buttons = ({ handleButtonClick }) => (
            <div className="buttons">
                  <div className="button-row">
                        <button type="button" onClick={handleButtonClick} value="1">
                              1
                        </button>
                        <button type="button" onClick={handleButtonClick} value="2">
                              2
                        </button>
                        <button type="button" onClick={handleButtonClick} value="3">
                              3
                        </button>
                        <button type="button" onClick={handleButtonClick} value="4">
                              4
                        </button>
                        <button type="button" onClick={handleButtonClick} value="+">
                              +
                        </button>
                  </div>
                  <div className="button-row">
                        <button type="button" onClick={handleButtonClick} value="5">
                              5
                        </button>
                        <button type="button" onClick={handleButtonClick} value="6">
                              6
                        </button>
                        <button type="button" onClick={handleButtonClick} value="7">
                              7
                        </button>
                        <button type="button" onClick={handleButtonClick} value="8">
                              8
                        </button>
                        <button type="button" onClick={handleButtonClick} value="-">
                              -
                        </button>
                  </div>
                  <div className="button-row">
                        <button type="button" onClick={handleButtonClick} value="9">
                              9
                        </button>
                        <button type="button" onClick={handleButtonClick} value="0">
                              0
                        </button>
                        <button type="button" onClick={handleButtonClick} value=".">
                              .
                        </button>
                        <button type="button" onClick={handleButtonClick} value="/">
                              /
                        </button>
                        <button type="button" onClick={handleButtonClick} value="*">
                              *
                        </button>
                  </div>
                  <div className="button-row">
                        <button type="button" onClick={handleButtonClick} value="AC">
                              AC
                        </button>
                        <button type="button" onClick={handleButtonClick} value="C">
                              C
                        </button>
                        <button type="button" onClick={handleButtonClick} value="=">
                              =
                        </button>
                  </div>
            </div>
);


Buttons.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};

export default Buttons;
