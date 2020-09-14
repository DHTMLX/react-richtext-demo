import React, { Component } from "react";
import fromCDN from "from-cdn";

const initialContent = `
  # Meet DHTMLX Rich Text Editor! \nThis JavaScript rich text editor is highly customizable. It makes text editing quick and comfortable due to the inbuilt set of handy formatting tools. \nBesides, it will convert your text into HTML or Markdown in the blink of an eye. Another bonus of DHTMLX Rich Text is its flexible configuration settings which allow you to fine-tune the look and feel of the editor without effort. \nTo learn more, read our [documentation](https://docs.dhtmlx.com/richtext/index.html) and check the [samples](https://docs.dhtmlx.com/richtext/samples/).
`;

class RichTextGettingContentCdn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };

    this.ready = fromCDN(["https://cdn.dhtmlx.com/richtext/pro/edge/richtext.js", "https://cdn.dhtmlx.com/richtext/pro/edge/richtext.css"]);
  }

  componentDidMount() {
    this.ready.then(() => {
      // eslint-disable-next-line no-undef
      this.richtext = new dhx.Richtext("richtext");
      this.richtext.setValue(initialContent, "markdown");
    });
  }

  componentWillUnmount() {
    this.richtext && this.richtext.destructor();
  }

  serialize(value) {
    let result = this.richtext.getValue(value);
    this.setState({ value: `${result}` });
  }

  render() {
    return (
      <div className="dhx-container_inner">
        <section className="dhx_sample-controls">
          <button className="dhx_sample-btn dhx_sample-btn--flat" onClick={() => this.serialize("html")}>
            Serialize HTML
          </button>
          <button className="dhx_sample-btn dhx_sample-btn--flat" onClick={() => this.serialize("markdown")}>
            Serialize Markdown
          </button>
          <button className="dhx_sample-btn dhx_sample-btn--flat" onClick={() => this.serialize("text")}>
            Serialize Plain Text
          </button>
        </section>
        <div className="dhx_container">
          <div className="dhx_sample-container__widget" id="richtext"></div>
          <textarea
            className="dhx_sample-container__textarea"
            placeholder="The result will be here:"
            value={this.state.value}
            readOnly={true}
          ></textarea>
        </div>
      </div>
    );
  }
}

export default RichTextGettingContentCdn;
