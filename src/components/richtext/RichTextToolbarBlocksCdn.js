import React, { Component } from "react";
import fromCDN from "from-cdn";

const initialValue = `
  <p style="font-size: 18px; text-align: center;">
    Note that newly set blocks are added to the end of the toolbar.
  </p>
  <p style="font-size: 18px; text-align: center;">
    Use the checkboxes to hide/show related toolbar blocks.
  </p>
`;
let toolbarBlocks = ["undo", "style", "decoration", "colors", "align", "link"];

class RichTextToolbarBlocksCdn extends Component {
  constructor(props) {
    super(props);
    this.handleEvent = this.handleEvent.bind(this);

    this.ready = fromCDN(["https://cdn.dhtmlx.com/richtext/pro/edge/richtext.js", "https://cdn.dhtmlx.com/richtext/pro/edge/richtext.css"]);
  }

  componentDidMount() {
    this.ready.then(() => {
      // eslint-disable-next-line no-undef
      this.richtext = new dhx.Richtext("richtext");
      this.richtext.setValue(initialValue, "html");
    });
  }

  componentWillUnmount() {
    this.richtext && this.richtext.destructor();
  }

  handleEvent(e) {
    if (e.target.checked) {
      toolbarBlocks.push(e.target.id);
    } else {
      let filtered = [];
      for (let i = 0; i < toolbarBlocks.length; i++) {
        if (toolbarBlocks[i] !== e.target.id) {
          filtered.push(toolbarBlocks[i]);
        }
      }
      toolbarBlocks = filtered;
    }
    let value = this.richtext.getValue();
    this.richtext.destructor();
    // eslint-disable-next-line no-undef
    this.richtext = new dhx.Richtext("richtext", {
      toolbarBlocks: toolbarBlocks,
    });
    this.richtext.setValue(value, "html");
  }

  render() {
    return (
      <div className="dhx-container_inner">
        <section className="dhx_sample-controls">
          <form className="dhx_sample-toolbar-blocks" onChange={this.handleEvent}>
            <label className="dhx_form-group dhx_checkbox dhx_checkbox--inline">
              <input type="checkbox" defaultChecked={true} id="undo" className="dhx_checkbox__input" />
              <span className="dhx_checkbox__visual-input"></span>
              <span className="dhx_label">undo</span>
            </label>
            <label className="dhx_form-group dhx_checkbox dhx_checkbox--inline">
              <input type="checkbox" defaultChecked={true} id="style" className="dhx_checkbox__input" />
              <span className="dhx_checkbox__visual-input"></span>
              <span className="dhx_label">style</span>
            </label>
            <label className="dhx_form-group dhx_checkbox dhx_checkbox--inline">
              <input type="checkbox" defaultChecked={true} id="decoration" className="dhx_checkbox__input" />
              <span className="dhx_checkbox__visual-input"></span>
              <span className="dhx_label">decoration</span>
            </label>
            <label className="dhx_form-group dhx_checkbox dhx_checkbox--inline">
              <input type="checkbox" defaultChecked={true} id="decoration" className="dhx_checkbox__input" />
              <span className="dhx_checkbox__visual-input"></span>
              <span className="dhx_label">colors</span>
            </label>
            <label className="dhx_form-group dhx_checkbox dhx_checkbox--inline">
              <input type="checkbox" defaultChecked={true} id="colors" className="dhx_checkbox__input" />
              <span className="dhx_checkbox__visual-input"></span>
              <span className="dhx_label">align</span>
            </label>
            <label className="dhx_form-group dhx_checkbox dhx_checkbox--inline">
              <input type="checkbox" defaultChecked={true} id="link" className="dhx_checkbox__input" />
              <span className="dhx_checkbox__visual-input"></span>
              <span className="dhx_label">link</span>
            </label>
            <label className="dhx_form-group dhx_checkbox dhx_checkbox--inline">
              <input type="checkbox" defaultChecked={false} id="clear" className="dhx_checkbox__input" />
              <span className="dhx_checkbox__visual-input"></span>
              <span className="dhx_label">clear</span>
            </label>
            <label className="dhx_form-group dhx_checkbox dhx_checkbox--inline">
              <input type="checkbox" defaultChecked={false} id="fullscreen" className="dhx_checkbox__input" />
              <span className="dhx_checkbox__visual-input"></span>
              <span className="dhx_label">fullscreen</span>
            </label>
            <label className="dhx_form-group dhx_checkbox dhx_checkbox--inline">
              <input type="checkbox" defaultChecked={false} id="stats" className="dhx_checkbox__input" />
              <span className="dhx_checkbox__visual-input"></span>
              <span className="dhx_label">stats</span>
            </label>
          </form>
        </section>
        <div className="dhx_sample-container__widget" id="richtext"></div>
      </div>
    );
  }
}

export default RichTextToolbarBlocksCdn;
