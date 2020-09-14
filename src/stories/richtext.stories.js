import React from "react";
import { storiesOf } from "@storybook/react";
import RichTextInitCdn from "../components/richtext/RichTextInitCdn";
import RichTextEventsCdn from "../components/richtext/RichTextEventsCdn";
import RichTextSettingHTMLContentCdn from "../components/richtext/RichTextSettingHTMLContentCdn";
import RichTextGettingContentCdn from "../components/richtext/RichTextGettingContentCdn";
import RichTextEditorModesCdn from "../components/richtext/RichTextEditorModesCdn";
import RichTextToolbarBlocksCdn from "../components/richtext/RichTextToolbarBlocksCdn";
import RichTextLocalizationCdn from "../components/richtext/RichTextLocalizationCdn";
import RichTextGetStatsCdn from "../components/richtext/RichTextGetStatsCdn";

import "../index.css";

storiesOf("RichText", module)
  .add("Initialization", () => {
    return (
      <section className="dhx-container">
        <div className="dhx-container_header">
          <h3>Basic Initialization. </h3>
          <a
            className="source-link"
            href="https://github.com/DHTMLX/react-richtext-demo/blob/master/src/components/richtext/RichTextInitCdn.js"
            target="_blank"
          >
            Source code
          </a>
          <div>
            Check documentation: &nbsp;
            <a href="https://docs.dhtmlx.com/richtext/initialization.html" target="_blank">
              Initialization.
            </a>
          </div>
        </div>
        <RichTextInitCdn></RichTextInitCdn>
      </section>
    );
  })
  .add("Events", () => {
    return (
      <section className="dhx-container">
        <div className="dhx-container_header">
          <h3>RichText Events. </h3>
          <a
            className="source-link"
            href="https://github.com/DHTMLX/react-richtext-demo/blob/master/src/components/richtext/RichTextEventsCdn.js"
            target="_blank"
          >
            Source code
          </a>
          <div>
            Check documentation: &nbsp;
            <a href="https://docs.dhtmlx.com/richtext/event_handling.html" target="_blank">
              Event handling.
            </a>
          </div>
        </div>
        <RichTextEventsCdn></RichTextEventsCdn>
      </section>
    );
  })
  .add("Setting HTML Content", () => {
    return (
      <section className="dhx-container">
        <div className="dhx-container_header">
          <h3>Setting HTML content. </h3>
          <a
            className="source-link"
            href="https://github.com/DHTMLX/react-richtext-demo/blob/master/src/components/richtext/RichTextSettingHTMLContentCdn.js"
            target="_blank"
          >
            Source code
          </a>
          <div>
            Check documentation: &nbsp;
            <a href="https://docs.dhtmlx.com/richtext/loading_data.html#formatofcontent" target="_blank">
              Format of content.
            </a>
            <a href="https://docs.dhtmlx.com/richtext/loading_data.html#addingcontentintoeditor" target="_blank">
              Adding content into editor.
            </a>
          </div>
        </div>
        <RichTextSettingHTMLContentCdn></RichTextSettingHTMLContentCdn>
      </section>
    );
  })
  .add("Getting Content", () => {
    return (
      <section className="dhx-container">
        <div className="dhx-container_header">
          <h3>Getting content. </h3>
          <a
            className="source-link"
            href="https://github.com/DHTMLX/react-richtext-demo/blob/master/src/components/richtext/RichTextGettingContentCdn.js"
            target="_blank"
          >
            Source code
          </a>
          <div>
            Check documentation: &nbsp;
            <a href="https://docs.dhtmlx.com/richtext/working_with_richtext.html#gettingcontentfromeditors" target="_blank">
              Getting content from editor.
            </a>
            <a href="https://docs.dhtmlx.com/richtext/loading_data.html#formatofcontent" target="_blank">
              Format of content.
            </a>
          </div>
        </div>
        <RichTextGettingContentCdn></RichTextGettingContentCdn>
      </section>
    );
  })
  .add("Text editor modes", () => {
    return (
      <section className="dhx-container">
        <div className="dhx-container_header">
          <h3>RichText Editor modes. </h3>
          <a
            className="source-link"
            href="https://github.com/DHTMLX/react-richtext-demo/blob/master/src/components/richtext/RichTextEditormodesCdn.js"
            target="_blank"
          >
            Source code
          </a>
          <div>
            Check documentation: &nbsp;
            <a href="https://docs.dhtmlx.com/richtext/configuration.html#workingmodes" target="_blank">
              Working modes.
            </a>
          </div>
        </div>
        <RichTextEditorModesCdn></RichTextEditorModesCdn>
      </section>
    );
  })
  .add("Toolbar Blocks", () => {
    return (
      <section className="dhx-container">
        <div className="dhx-container_header">
          <h3>Configuration of toolbar blocks. </h3>
          <a
            className="source-link"
            href="https://github.com/DHTMLX/react-richtext-demo/blob/master/src/components/richtext/RichTextToolbarBlocksCdn.js"
            target="_blank"
          >
            Source code
          </a>
          <div>
            Check documentation: &nbsp;
            <a href="https://docs.dhtmlx.com/richtext/configuration.html#toolbar" target="_blank">
              Toolbar.
            </a>
          </div>
        </div>
        <RichTextToolbarBlocksCdn></RichTextToolbarBlocksCdn>
      </section>
    );
  })
  .add("Locale", () => {
    return (
      <section className="dhx-container">
        <div className="dhx-container_header">
          <h3>Localization. </h3>
          <a
            className="source-link"
            href="https://github.com/DHTMLX/react-richtext-demo/blob/master/src/components/richtext/RichTextLocalizationCdn.js"
            target="_blank"
          >
            Source code
          </a>
          <div>
            Check documentation: &nbsp;
            <a href="https://docs.dhtmlx.com/richtext/localization.html" target="_blank">
              Localization.
            </a>
          </div>
        </div>
        <RichTextLocalizationCdn></RichTextLocalizationCdn>
      </section>
    );
  })
  .add("Get stats", () => {
    return (
      <section className="dhx-container">
        <div className="dhx-container_header">
          <h3>Getting statistics. </h3>
          <a
            className="source-link"
            href="https://github.com/DHTMLX/react-richtext-demo/blob/master/src/components/richtext/RichTextGetStatsCdn.js"
            target="_blank"
          >
            Source code
          </a>
          <div>
            Check documentation: &nbsp;
            <a href="https://docs.dhtmlx.com/richtext/working_with_richtext.html#statistics" target="_blank">
              Getting statistics.
            </a>
          </div>
        </div>
        <RichTextGetStatsCdn></RichTextGetStatsCdn>
      </section>
    );
  });
