import "./styles.css";

import { getData } from "./data";
import RichtextView from "./Richtext";

function App() {
  const initText = getData();
  return <RichtextView initText={initText} />;
}

export default App;
