import Child from "./Child";

function Parent() {
  return (
    <>
      <h1>Details of my cousins</h1>
      <Child name="Virat Kohli" age={35} />
      <Child name="Rohit Sharma" age={37} />
      <Child name="Jasprith Bumrah" age={34} />
    </>
  );
}

export default Parent;
