import "./App.css";
import { FormikForm } from "./components/FormikForm";
import { ReactHookForm } from "./components/ReactHookForm";
import { VanillaForm } from "./components/VanillaForm";

function App() {
  return (
    <div className="App">
      <VanillaForm />
      <ReactHookForm />
      <FormikForm />
    </div>
  );
}

export default App;
