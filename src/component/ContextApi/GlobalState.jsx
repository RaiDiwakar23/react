import { createContext } from "react";

export let GlobalState = createContext();
//Step 1: create a globalState and export it
//Step 2: Create a wrapper component
//Step 3: return the Provider from the wrapper component
//Step 4: Use the value attribute to provide the necessary data
//step 5: User th children from props object, so that the wrapper component can wrap the entire project
//step 6: User the wrapper component to wrap the entire project in the App.jsx
//step 7: Use the useContext hook in the component where you want to use the data. Inside useContext provide the global state

function WrapperComponent(props) {
  let user = { name: "Balaya", age: 1000, address: "KILPAUK" };
  return (
    <GlobalState.Provider value={user}>{props.children}</GlobalState.Provider>
  );
}

export default WrapperComponent;
