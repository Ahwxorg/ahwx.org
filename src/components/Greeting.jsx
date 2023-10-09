import React, { Component } from 'react';

const greetingArray = [
  "Hai",
  "Hey",
  "Salut",
  "¿Qué tal?",
  "Nǐ hǎo",
  "Ciao",
  "Yā, Yō",
  "Guten Tag",
  "Oi",
  "Anyoung",
  "Ahlan",
  "Halløj",
  "Hujambo",
  "Hallo",
  "Yassou",
  "Cześć",
  "Selamat siang",
  "Namaskar",
  "Hei",
  "Selam",
  "Shalom",
  "Tjena",
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

  componentWillUnmount() { // Corrected method name
    clearInterval(this.timeout);
  }

  render() {
    let greetingText = greetingArray[this.state.textIdx % greetingArray.length];

    return (
      <span>{greetingText}</span>
    );
  }
}

export default Home;
