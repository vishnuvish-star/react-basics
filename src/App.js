import Card from "./components/data/card-component/card.component";
import Data from "./components/data/data.components";
import Header from "./components/data/header-component/header.component";
// import Button from "./button";
// import { useState } from "react";

const App = () => {
  const [initialDataValue, setInitialDataValue] = useState(Data);
  const [notSorted, setSorted] = useState(false);
  const initialData = [...initialDataValue];
  function sortedProfiles() {
    setSorted(!notSorted);
    initialData.sort(idOne, idSecond);
    if (setSorted) {
      idOne.id - idSecond.id;
    } else {
      idSecond.id - idOne.id;
    }
  }

  return (
    <>
      <Header data={Data} />
      <Card data={initialDataValue} />
      {/* <Button click={handleClick} /> */}
    </>
  );
};

export default App;
