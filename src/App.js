import { Details } from "../src/components/data/data.components";

const App = () => {
  const Data = [...Details];
  console.log(Data);

  return (
    <>
      <ul>
        <li>{Data.id}</li>
        <li>{Data.name}</li>
        <li>{Data.designation}</li>
      </ul>
    </>
  );
};

export default App;
