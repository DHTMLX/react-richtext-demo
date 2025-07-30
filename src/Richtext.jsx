import { useEffect, useRef } from "react";
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default function RichTextComponent(props) {
  let richtext_container = useRef();

  const baseURL = "https://docs.dhtmlx.com/richtext-backend";
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
