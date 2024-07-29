import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Dharna" />
      <Student age={24} />
      <Student name="Amolsp" age={24} email="amolpatelpaik444@gmail.com" />
      <Student name="Sahil" age={24} email="hackerbhausahil@gmail.com" />
      <Student name="Janhavi" age={24} email="Janhavi454@gmail.com" />
      <Student name="Nikhil" age={24} email="Nikjonse4@gmail.com" />
      <Student />
      <Student />
      <Student />
    </>
  );
}

export default App;
//Props = read only Properties that are shared between components.A parents compoent can send data to a child compoent.

//<Componts key= value>
