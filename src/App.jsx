import { useState } from "react";

import Gallory from "./components/Gallory/Gallory";
import Topbar from "./components/Topbar/Topbar";
// import Counter from "./components/Counter";

const App = () => {
  const [photos, setPhotos] = useState([]);

  return (
    <div>
      <Topbar setPhotos={setPhotos} />
      {/* <Counter /> */}
      <Gallory />
    </div>
  );
};

export default App;
