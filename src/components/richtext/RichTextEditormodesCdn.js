import React, { Component } from "react";
import fromCDN from "from-cdn";

class RichTextEditormodesCdn extends Component {
  constructor(props) {
    super(props);

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

  handleChange(mode) {
    this.richtext.destructor();
    // eslint-disable-next-line no-undef
    this.richtext = new dhx.Richtext("richtext", { mode: mode });
  }

  render() {
    return (
      <div className="dhx-container_inner">
        <section className="dhx_sample-controls">
          <div className="dhx_sample-input__wrapper dhx_sample-input__wrapper--pl-16">
            <label className="dhx_sample-radio__label">
              Classic mode
              <input
                defaultChecked={true}
                name="mode"
                onChange={() => this.handleChange("classic")}
                type="radio"
                className="dhx_sample-radio__input"
              />
            </label>
          </div>
          <div className="dhx_sample-input__wrapper dhx_sample-input__wrapper--pl-16">
            <label className="dhx_sample-radio__label">
              Document mode
              <input
                defaultChecked={false}
                name="mode"
                onChange={() => this.handleChange("document")}
                type="radio"
                className="dhx_sample-radio__input"
              />
            </label>
          </div>
        </section>
        <div className="dhx_sample-container__widget" id="richtext"></div>
      </div>
    );
  }
}

export default RichTextEditormodesCdn;
