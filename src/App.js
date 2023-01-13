import "./App.css";
import Header from "./components/Header";
import Meme from "./components/Meme";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Meme />
      </div>
    </div>
  );
}

export default App;
