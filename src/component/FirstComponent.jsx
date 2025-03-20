let FirstComponent = () => {
  let name = "Surya Prakash";
  return (
    <>
      <h1 className="header">This is a custom component</h1>
      <p>This is a paragraph</p>
      <p>The sum of 2 and 5 is {2 + 5}</p>
      <p>{name} is a good boy.</p>
    </>
  );
};

export default FirstComponent;
