import PropType from "prop-types";
function Student(props) {
  return (
    <div className="student">
      <p>Name:{props.name}</p>
      <p>Age:{props.age}</p>
      <p>Email:{props.email}</p>
    </div>
  );
}

Student.propType = {
  name: PropType.string,
  age: PropType.number,
  Email: PropType.string,
};

Student.defaultProps = {
  name: "Guest",
  age: 0,
  Email: "",
};
export default Student;

//In React, components often need to receive data (called "props") from their parent components. prop-types is a tool that helps you check that these props are the correct type (like string, number, boolean, etc.) and that they are being passed correctly. It's like a safety net to catch mistakes.

//Why use prop-types?
//Catch Mistakes Early: It helps you catch mistakes where the wrong type of data is passed to a component.
//Make Code Clearer: It makes your code easier to understand because it clearly states what kind of data each component expects.
//Improve Debugging: When something goes wrong, it's easier to figure out why if you know what kind of data was supposed to be there.
