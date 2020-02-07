import React, { Component } from "react";
import data from "./data.js";
import XMLParser from "react-xml-parser";

class Input extends Component {
  state = {
    sounds: [],
    words: ""
  };

  change = (e) => {
    this.setState({ words: e.target.value });
  };

  search = () => {
    let phrase = [];
    // filter state for right sound / sounds
    phrase = this.state.sounds.filter((sound) =>
      sound.sound.includes(this.state.words)
    );
    console.log(phrase);
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

  componentDidMount() {
    // Empty state array
    const state = [];

    // convert xml to js object
    const jsonDataFromXml = new XMLParser().parseFromString(data);

    jsonDataFromXml.children[0].children[0].children.map((file) => {
      // Create object
      let sound = {
        path: `${file.attributes.path.split(".")[0]}.ogg`,
        sound: file.children[0].attributes.swac_text
      };

      // add object to the array
      state.push(sound);
    });

    // set state to array
    this.setState({ sounds: state });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <input type="text" name="" id="" onChange={this.change} />
          <input type="submit" value="" onClick={this.search} value="Play" />
        </div>
      </React.Fragment>
    );
  }
}

export default Input;
