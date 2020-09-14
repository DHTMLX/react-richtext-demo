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
          <label className="dhx_form-group dhx_radiobutton dhx_form-group--inline dhx_form-group--no-message-holder dhx_sample-input__wrapper--pl-16">
            <input type="radio" name="mode" className="dhx_radiobutton__input" onChange={() => this.handleChange("classic")} defaultChecked={true}/>
            <span className="dhx_radiobutton__visual-input"></span>
            <span className="dhx_label">Classic mode</span>
          </label>
          <label className="dhx_form-group dhx_radiobutton dhx_form-group--inline dhx_form-group--no-message-holder dhx_sample-input__wrapper--pl-16">
            <input type="radio" name="mode" className="dhx_radiobutton__input" onChange={() => this.handleChange("document")} defaultChecked={false} />
            <span className="dhx_radiobutton__visual-input"></span>
            <span className="dhx_label">Document mode</span>
          </label>
        </section>
        <div className="dhx_sample-container__widget" id="richtext"></div>
      </div>
    );
  }
}

export default RichTextEditormodesCdn;
