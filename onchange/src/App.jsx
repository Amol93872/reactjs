import "./App.css";
import Textarea from "./Textarea";
import NumberInput from "./NumberInput";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import RadioButtonInput from "./RadioButtonInput";

function App() {
  return (
    <>
      <TextInput />
      <NumberInput />
      <Textarea />
      <SelectInput />
      <RadioButtonInput />
    </>
  );
}

export default App;
//n React, the onChange event is used to handle changes to the value of form elements like <input>, <textarea>, and <select>. This event occurs whenever the value of the form element is changed by the user. The onChange event is typically used to update the state in response to user input, enabling dynamic and responsive UIs
