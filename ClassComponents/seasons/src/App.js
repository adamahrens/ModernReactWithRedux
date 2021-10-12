import SeasonDisplay from "./SeasonDisplay";
import Divider from "./Divider";

function App() {
  return (
    <div className="App ui text container">

      <div className="row">
        <div className="column">
          <SeasonDisplay />
        </div>
      </div>

      <Divider text="Hello" />

      <div className="row">
        <div className="column">
          <SeasonDisplay />
        </div>
      </div>

      <Divider text="World" />

      <div className="row">
        <div className="column">
          <SeasonDisplay />
        </div>
      </div>

    </div>
  );
}

export default App;
