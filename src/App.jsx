import { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
function App() {
  const [formularioEstaVisisvel, setFormularioEstaVisisvel] = useState(true);

  return (
    <>
      <Header />
      <button
        className="container"
        onClick={() => setFormularioEstaVisisvel(!formularioEstaVisisvel)}
        type="button"
      >
        Exibir Formulario
      </button>
      {formularioEstaVisisvel && <Formulario />}
    </>
  );
}

export default App;
