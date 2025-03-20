function MyInfo() {
  let bio = {
    name: "Diwakar Rai",
    age: 500,
    marksinMaths: 30,
    marksInScience: 10,
    address: "Shillong",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww",
  };
  // null, boolean, undefined will not be displayed on the UI
  // Only numbers and strings are allowed to be displayed in the UI
  return (
    <div>
      <img src={bio.image} height={200} width={300} />
      <h1 className="text-red-400 font-bold text-[50px]">This is my Bio</h1>
      <p>Full Name: {bio.name}</p>
      <p>Age : {bio.age}</p>
      <p>Math Marks : {bio.marksinMaths}</p>
      <p>Science Marks : {bio.marksInScience}</p>
      <p>English: {bio.englishMarks}</p>
      <p>Social : {null}</p>
      <p>Computer Science: {true}</p>
      <p>Total Marks: {bio.marksinMaths + bio.marksInScience}</p>
    </div>
  );
}

export default MyInfo;
