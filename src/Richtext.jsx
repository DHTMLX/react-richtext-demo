import { useEffect, useRef } from "react";
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/codebase/richtext.min.css";

export default function RichTextComponent(props) {
  let richtext_container = useRef();

  const baseURL = "https://master--richtext-go--dev.webix.io";
  const imageUploadUrl = `${baseURL}/images`;

  useEffect(() => {
    const editor = new Richtext(richtext_container.current, {
      value: props.value,
      imageUploadUrl,
      menubar: true
    });

    return () => {
      editor.destructor();
    };
  }, []);

  return (
    <div className="component_container">
      <div ref={richtext_container} className="widget"></div>
    </div>
  );
}
