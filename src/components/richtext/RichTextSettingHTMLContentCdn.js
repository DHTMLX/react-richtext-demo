import React, { Component } from "react";
import fromCDN from "from-cdn";

class RichTextSettingHTMLContentCdn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: `
        <h1>Meet DHTMLX Rich Text Editor!</h1>
        <p>
          This JavaScript rich text editor is highly customizable.
          It makes text editing quick and comfortable due to the inbuilt set of handy formatting tools.
        </p>
        <p>
          Besides, it will convert your text into HTML or Markdown in the blink of an eye.
          Another bonus of DHTMLX Rich Text is its flexible configuration settings
          which allow you to fine-tune the look and feel of the editor without effort.
        </p>
        <p>
          To learn more, read our
          <a href="https://docs.dhtmlx.com/richtext/index.html" title="documentation">documentation</a>
          and check the
          <a href="https://docs.dhtmlx.com/richtext/samples/" title="samples">samples</a>.
        </p>
      `,
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

  handleSetValue() {
    let contentToParse = this.state.value;
    contentToParse && this.richtext.setValue(contentToParse, "html");
  }

  render() {
    return (
      <div className="dhx-container_inner">
        <section className="dhx_sample-controls">
          <button className="dhx_sample-btn dhx_sample-btn--flat" onClick={() => this.handleSetValue()}>
            Set HTML Value
          </button>
        </section>
        <div className="dhx-container_setting">
          <div className="dhx_sample-container__widget setting" id="richtext"></div>
          <div className="dhx_sample-container__sidebar setting">
            <textarea placeholder="Paste here HTML" className="dhx_textarea" value={this.state.value} readOnly={true}></textarea>
          </div>
        </div>
      </div>
    );
  }
}

export default RichTextSettingHTMLContentCdn;
