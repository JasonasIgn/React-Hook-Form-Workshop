import "./App.css";
import { FormikForm } from "./components/FormikForm";
import { MaterialUiForm } from "./components/MaterialUiForm";
import { ReactHookForm } from "./components/ReactHookForm";
import { VanillaForm } from "./components/VanillaForm";

function App() {
  return (
    <div className="App">
      {/* <VanillaForm /> */}
      {/* <ReactHookForm /> */}
      {/* <FormikForm /> */}
      <MaterialUiForm />
    </div>
  );
}

export default App;
