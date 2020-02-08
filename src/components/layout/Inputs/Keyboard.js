import React, { Component } from "react";
import PropTypes from "prop-types";
import Keyboard from "react-simple-keyboard";

import "react-simple-keyboard/build/css/index.css";

class Layout extends Component {
  render() {
    const { onKeyPress, layout, display, buttonTheme } = this.props;

    return (
      <React.Fragment>
        <Keyboard
          keyboardRef={(r) => (this.keyboard = r)}
          onKeyPress={onKeyPress}
          layout={layout}
          display={display}
          buttonTheme={buttonTheme}
        />
      </React.Fragment>
    );
  }
}

Layout.propTypes = {
  onKeyPress: PropTypes.func,
  layout: PropTypes.object,
  display: PropTypes.object
};

Layout.defaultProps = {
  layout: {
    default: ["q w e r t y u i o p", "a s d f g h j k l ;", "z x c v b n m , ."]
  },
  display: {
    "{bksp}": "delete",
    "{enter}": "enter"
  },

  buttonTheme: [
    {
      class: "green",
      buttons: "Q A Z P ; q a z p "
    }
  ]
};

export default Layout;
