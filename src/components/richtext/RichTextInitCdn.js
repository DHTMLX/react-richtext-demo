import React, { Component } from "react";
import fromCDN from "from-cdn";

class RichTextInitCdn extends Component {
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

  render() {
    return <div className="dhx_sample-container__widget" id="richtext"></div>;
  }
}

export default RichTextInitCdn;
