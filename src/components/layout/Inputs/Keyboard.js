import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Keyboard from "react-simple-keyboard";

import "react-simple-keyboard/build/css/index.css";

const Layout = ({
  layout,
  display,
  buttonTheme,
  updateAnswer,
  deleteAnswer
}) => {
  const keyboard = useRef();

  useEffect(() => {
    keyboard.current.getButtonElement("a").classList.remove("green");
  });

  // Keyboard Function
  const onKeyPress = (button) => {
    if (button === "{bksp}") {
      // delete last letter
      deleteAnswer();
    } else if (button === "{enter}") {
      // submit the word
    } else if (button === "{space}") {
      updateAnswer(" ");
    } else {
      // add letter to state
      updateAnswer(button);
    }
  };

  return (
    <React.Fragment>
      <Keyboard
        keyboardRef={(r) => (keyboard.current = r)}
        onKeyPress={onKeyPress}
        layout={layout}
        display={display}
        buttonTheme={buttonTheme}
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
      "q w e r t y u i o p",
      "a s d f g h j k l ;",
      "z x c v b n m , .",
      "{bksp} {space} {enter}"
    ]
  },
  display: {
    "{bksp}": "delete",
    "{enter}": "enter",
    "{space}": "space"
  },

  buttonTheme: [
    {
      class: "green",
      buttons: "Q P A Z ; q p a z"
    },
    {
      class: "light-blue",
      buttons: "W O S L X w o s l x"
    },
    {
      class: "blue",
      buttons: "E I D K C e i d k c ,"
    },
    {
      class: "gold",
      buttons: "R U F J V M r  u f j v m"
    },
    {
      class: "dark-grey",
      buttons: "N B H G Y T n b h y g t"
    }
  ]
};

export default Layout;
