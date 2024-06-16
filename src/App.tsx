import "./App.css";
import Logo from "./Components/Logo";
import MenuBar from "./Components/MenuBar";
import HomePage from "./Page/Homepage";
import { OneColum, TwoColum } from "./Style/divColum";

import { GentySan } from "./Style/theme";

("./Data");

function App() {
  return (
    <>
      <div
        style={{
          background: "#FDFEF4",
          display: "flex",
          justifyContent: "center",
          marginTop: "-20px",
          marginLeft: "-20px",
          marginRight: "-20px",
          borderBottom: 0.5,
          borderStyle: "solid",
          borderColor: "#9B93D9",
        }}
      >
        <Logo />
      </div>
      <MenuBar />
      <div style={TwoColum}>
        <p>hello</p>
      </div>
      <HomePage />
    </>
  );
}

export default App;
