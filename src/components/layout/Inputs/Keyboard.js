import React from "react";
import PropTypes from "prop-types";
import SimpleKeyboard from "react-simple-keyboard";

import "react-simple-keyboard/build/css/index.css";

const Keyboard = ({ onKeyPress, layout, display }) => {
  return (
    <React.Fragment>
      <SimpleKeyboard
        onKeyPress={onKeyPress}
        layout={layout}
        display={display}
      />
    </React.Fragment>
  );
};

Keyboard.propTypes = {
  onKeyPress: PropTypes.func,
  layout: PropTypes.object,
  display: PropTypes.object
};

Keyboard.defaultProps = {
  layout: {
    default: [
      "q w e r t y u i o p {bksp}",
      "a s d f g h j k l {enter}",
      "z x c v b n m"
    ]
  },
  display: {
    "{bksp}": "delete",
    "{enter}": "enter"
  }
};

export default Keyboard;
