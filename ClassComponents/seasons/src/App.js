import SeasonDisplay from "./SeasonDisplay";
import Divider from "./Divider";
import Spinner from "./Spinner";

function App() {
  return (
    <div className="App ui text container">

      <div className="row">
        <div className="column">
          <SeasonDisplay title="Season" />
        </div>
      </div>

      <Divider text="Hello" />

      <div className="row">
        <div className="column">
          <SeasonDisplay title="Seas0n" />
        </div>
      </div>

      <Divider text="World" />

      <div className="row">
        <div className="column">
          <SeasonDisplay title="SeaSUN" />
        </div>
      </div>

      {/* <div className="row">
        <div className="column">
          <Spinner message="Just a spinner" />
        </div>
      </div> */}

    </div>
  );
}

export default App;
