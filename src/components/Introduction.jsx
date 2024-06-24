import React, { Component } from "react";

const textArray = [
  "a technology enthousiast",
  "a homelabber",
  "a nerd",
  "a person",
  "a student",
  "a teacher",
  "a blogger",
  "a shitposter",
  "ƃuoɹʍ ʎlqɐqoɹd",
];

class Home extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 3000);
  }

  componentWillUnmount() {
    // Corrected method name
    clearInterval(this.timeout);
  }

  render() {
    let introductionText = textArray[this.state.textIdx % textArray.length];

    return <span>{introductionText}</span>;
  }
}

export default Home;
