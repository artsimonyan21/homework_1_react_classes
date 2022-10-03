import { Component } from "react";
import Counter from "./components/counter";
import Countres from "./components/countres";
import Carts from "./components/carts";
class App extends Component {
  render() {
    return (
      <>
        {/* {<Carts />} */}
        <Counter />
        {/* <Countres /> */}
      </>
    );
  }
}

export default App;
