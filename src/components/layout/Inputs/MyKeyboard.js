import React from "react";
import PropTypes from "prop-types";

const MyKeyboard = ({ layout }) => {
  return (
    <React.Fragment>
      <div class="hg-row">
        {layout.map((key) => {
          <div
            class="hg-button hg-standardBtn green"
            data-skbtn="q"
            data-skbtnuid="default-r0b0"
          >
            <span>q</span>
          </div>;
        })}
      </div>
    </React.Fragment>
  );
};

export default MyKeyboard;
