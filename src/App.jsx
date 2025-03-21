import WrapperComponent from "./component/ContextAPi/GlobalState";
import Count from "./component/Count";
import Form from "./component/Form";
import Friend from "./component/Friend";
import GrandFather from "./component/GrandFather";
import Guest from "./component/Guest";
import House from "./component/House";
import ListAndKey from "./component/ListAndKey";
import Login from "./component/Login";
import Parent from "./component/Parent";
import Products from "./component/Products";
import Register from "./component/Register";

function App() {
  return (
    <WrapperComponent>
      <div>
        {/* <GrandFather /> */}

        <Products />
      </div>
    </WrapperComponent>
  );
}

export default App;
