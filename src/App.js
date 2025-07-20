import RichText from "./Richtext";
import { getData } from "./data";

function App() {
  const { value } = getData();
  return <RichText value={value} />;
}

export default App;
