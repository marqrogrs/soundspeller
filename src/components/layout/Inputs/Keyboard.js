import React, { useRef } from "react";
import PropTypes from "prop-types";
import Keyboard from "react-simple-keyboard";

import "react-simple-keyboard/build/css/index.css";

const Layout = ({ onKeyPress, layout, display, letters }) => {
  const keyboard = useRef();

  const addClass = () => {
    letters.map((l) => {
      keyboard.current.getButtonElement(l).classList.add("flash");
      console.log(l);
    });
  };

  return (
    <React.Fragment>
      <Keyboard
        keyboardRef={(r) => ((keyboard.current = r), addClass())}
        onKeyPress={onKeyPress}
        layout={layout}
        display={display}
      />
    </React.Fragment>
  );
};

Layout.propTypes = {
  onKeyPress: PropTypes.func,
  layout: PropTypes.object,
  display: PropTypes.object
};

Layout.defaultProps = {
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

export default Layout;
