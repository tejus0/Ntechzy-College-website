import "./App.css";
import Header from "./components/Header/Header";
import Carousal from "./components/Carousal/Carousal";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <body>
        <main className="main-content">
          <h1 className="heading">Dynamic Navigation</h1>
          </main>
        </body> */}
      <Carousal />
    </div>
  );
}

export default App;
