import { useEffect, useRef, useState } from "react";
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/codebase/richtext.min.css";
import { getData } from "./data";

export default function RichtextView(props) {
  let [richtext, setRichtext] = useState();
  let container = useRef();

  useEffect(() => {
    const richtext = new Richtext(container.current, {});
    setRichtext(richtext);

    return () => richtext.destructor();
  }, []);

  useEffect(() => {
    if (!richtext) return;
    richtext.setValue(props.initText, "markdown");
  }, [richtext, props.initText]);

  return <div ref={container} style={{ width: "100%", height: "100%" }}></div>;
}
