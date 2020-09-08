import React, { Component } from "react";
import fromCDN from "from-cdn";

class RichTextGetStatsCdn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: "",
      charactersWithoutSpaces: "",
      words: "",
    };

    this.ready = fromCDN(["https://cdn.dhtmlx.com/richtext/pro/edge/richtext.js", "https://cdn.dhtmlx.com/richtext/pro/edge/richtext.css"]);
  }

  componentDidMount() {
    this.ready.then(() => {
      // eslint-disable-next-line no-undef
      this.richtext = new dhx.Richtext("richtext");
    });
  }

  componentWillUnmount() {
    this.richtext && this.richtext.destructor();
  }

  getStats() {
    this.setState({
      characters: this.richtext.getStats().chars,
      charactersWithoutSpaces: this.richtext.getStats().charsExlSpace,
      words: this.richtext.getStats().words,
    });
  }

  render() {
    return (
      <div className="dhx-container_inner">
        <section className="dhx_sample-controls">
          <button className="dhx_sample-btn dhx_sample-btn--flat" onClick={() => this.getStats()}>
            Get Statistics
          </button>
        </section>
        <div className="dhx-container_setting">
          <div className="dhx_sample-container__widget setting" id="richtext"></div>
          <div className="dhx_sample-container__sidebar setting">
            <ul>
              <li>
                Characters: <span>{this.state.characters}</span>
                <br />
              </li>
              <li>
                Characters without spaces: <span>{this.state.charactersWithoutSpaces}</span>
                <br />
              </li>
              <li>
                Words: <span>{this.state.words}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default RichTextGetStatsCdn;
