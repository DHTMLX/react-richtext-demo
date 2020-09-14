import React, { Component } from "react";
import fromCDN from "from-cdn";

const locale = {
  de: {
    apply: "Anwenden",
    undo: "Rückgängig machen",
    redo: "Wiederholen",
    selectFontFamily: "Schriftfamilie",
    selectFontSize: "Schriftgröße",
    selectFormat: "Textstil",
    selectTextColor: "Textfarbe",
    selectTextBackground: "Texthintergrund",
    markBold: "Fett",
    markItalic: "Kursiv",
    markStrike: "Durchgestrichen",
    markUnderline: "Unterstrichen",
    alignLeft: "Links ausrichten",
    alignCenter: "Mittens ausrichten",
    alignRight: "Rechts ausrichten",
    addLink: "Einen Link hinzufügen",
    clearFormat: "Format entfernen",
    fullscreen: "Vollbildschirm",
    unlink: "Einen Link löschen",
    edit: "Redigieren",
    h1: "Überschrift 1",
    h2: "Überschrift 2",
    h3: "Überschrift 3",
    h4: "Überschrift 4",
    h5: "Überschrift 5",
    h6: "Überschrift 6",
    p: "Normaler Text",
    blockquote: "Blockzitat",
    stats: "Statistiken",
    chars: "Zeichen",
    charsExlSpace: "Zeichen ohne Leerzeichen",
    words: "Wörter",
  },
  en: {
    apply: "Apply",
    undo: "Undo",
    redo: "Redo",
    selectFontFamily: "Font",
    selectFontSize: "Font size",
    selectFormat: "Style",
    selectTextColor: "Text color",
    selectTextBackground: "Background color",
    markBold: "Bold",
    markItalic: "Italic",
    markStrike: "Strike",
    markUnderline: "Underline",
    alignLeft: "Align left",
    alignCenter: "Align center",
    alignRight: "Align right",
    addLink: "Add link",
    clearFormat: "Clear formatting",
    fullscreen: "Fullscreen",
    removeLink: "Remove link",
    edit: "Edit",
    h1: "Heading 1",
    h2: "Heading 2",
    h3: "Heading 3",
    h4: "Heading 4",
    h5: "Heading 5",
    h6: "Heading 6",
    p: "Normal text",
    blockquote: "Block quote",
    stats: "Statistics",
    chars: "chars",
    charsExlSpace: "Characters without spaces ",
    words: "words",
  },
};

class RichTextLocalizationCdn extends Component {
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

  handleChange(prefix) {
    this.ready.then(() => {
      // eslint-disable-next-line no-undef
      dhx.i18n.setLocale("richtext", locale[prefix]);
      this.richtext.destructor();
      // eslint-disable-next-line no-undef
      this.richtext = new dhx.Richtext("richtext");
    });
  }

  render() {
    return (
      <div className="dhx-container_inner">
        <section className="dhx_sample-controls">
          <label className="dhx_form-group dhx_radiobutton dhx_form-group--inline dhx_form-group--no-message-holder dhx_sample-input__wrapper--pl-16">
            <input type="radio" name="locale" className="dhx_radiobutton__input" onChange={() => this.handleChange("en")} defaultChecked={true}/>
            <span className="dhx_radiobutton__visual-input"></span>
            <span className="dhx_label">English</span>
          </label>
          <label className="dhx_form-group dhx_radiobutton dhx_form-group--inline dhx_form-group--no-message-holder dhx_sample-input__wrapper--pl-16">
            <input type="radio" name="locale" className="dhx_radiobutton__input" onChange={() => this.handleChange("de")} defaultChecked={false} />
            <span className="dhx_radiobutton__visual-input"></span>
            <span className="dhx_label">Deutsch</span>
          </label>
        </section>
        <div className="dhx_sample-container__widget" id="richtext"></div>
      </div>
    );
  }
}

export default RichTextLocalizationCdn;
