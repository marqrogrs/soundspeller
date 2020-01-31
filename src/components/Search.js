import React, { Component } from "react";
import Fuse from "fuse.js";
import PropTypes from "prop-types";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      value: ""
    };

    this.fuse = new Fuse(props.list, this.getOptions());
  }

  handleChange = (e) => {
    this.setState({
      results: this.fuse.search(e.target.value),
      value: e.target.value
    });
    console.log(this.fuse.search("fish"));
  };

  getOptions = () => {
    const {
      caseSensitive,
      id,
      include,
      keys,
      shouldSort,
      sortFn,
      tokenize,
      verbose,
      maxPatternLength,
      distance,
      threshold,
      location,
      options
    } = this.props;

    return {
      caseSensitive,
      id,
      include,
      keys,
      shouldSort,
      sortFn,
      tokenize,
      verbose,
      maxPatternLength,
      distance,
      threshold,
      location,
      ...options
    };
  };

  handleAudio = () => {
    // get files paths
    let sources = [];
    phrase.map((s) => {
      let t = require(`./flac/${s.path}`);
      sources.push(t);
    });

    // chain sounds
    let count = 0;
    const onEnd = function() {
      count += 1;

      try {
        // play next sound
        howler[count].play();
      } catch (error) {
        // unload howler
        howler[count - 1].unload();
      }
    };

    // build howler
    const howler = [];
    sources.forEach((s) => {
      howler.push(new Howl({ src: s, onend: onEnd }));
    });
    // play first sound
    howler[0].play();
  };
  render() {
    return (
      <React.Fragment>
        <label htmlFor="Words">
          <input
            type="text"
            name="Words"
            id=""
            onChange={this.handleChange}
            value={this.state.value}
            placeholder={"Search"}
          />
        </label>
      </React.Fragment>
    );
  }
}

Search.propType = {
  keys: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
};

Search.defaultProps = {
  distance: 100,
  location: 0,
  placeholder: "Search",
  shouldSort: true,

  threshold: 0.3
};

export default Search;
