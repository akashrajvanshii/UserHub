import './App.css';
import Home from "./components/Home";
import AnimatedCursor from "react-animated-cursor";


function App() {
  return (
    <div className="App">

        <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            hasBlendMode={true}
            innerStyle={{
                backgroundColor: '#F59E0B'
            }}
            outerStyle={{
                border: '3px solid #F59E0B'
            }}
        />

        <Home/>

      {/*<UserTable />*/}
    </div>
  );
}

export default App;
