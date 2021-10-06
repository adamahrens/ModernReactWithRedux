import Home from './Home'
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
import Comments from './Comments';

function App() {
  return (
    <div className="App">
      <Home />
      <FunctionalComponent greeting="Hello there! " />
      <ClassComponent />
      <Comments />
    </div>
  );
}

export default App;
