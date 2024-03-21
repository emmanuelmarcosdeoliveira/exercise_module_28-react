import { useState, useEffect } from "react";
import styles from "./Formulario.module.css";

const Formulario = () => {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);

  const calcularImc = () => {
    const alturaQuadrado = altura * altura;
    const imc = peso / alturaQuadrado;

    if (imc <= 18.4) {
      return "Magresa ";
    } else if (imc <= 24.9) {
      return "Normal";
    } else if (imc <= 29.9) {
      return "Sobre Peso I";
    } else if (imc <= 39.9) {
      return "Obsidade II";
    } else if (imc > 40.0) {
      return "Obsedidade Grave III";
    } else {
      return "Verifique os valores digitados";
    }
  };

  useEffect(() => {
    console.log("O componente iniciou");

    return () => {
      console.log("O componente Finalizou");
    };
  }, []);

  return (
    <>
      <form className="container">
        <div className={styles.form}>
          <fieldset className={styles.field}>
            <legend className={styles.legend}>Altura (ex.: 1.75 )</legend>
            <input
              className={styles.input}
              type="number"
              placeholder="sua Altura "
              onChange={(evento) =>
                setAltura(parseFloat(evento.target.value).toFixed(2))
              }
            ></input>
          </fieldset>
          <fieldset className={styles.field}>
            <legend className={styles.legend}>Peso(ex.: 72.2)</legend>
            <input
              className={styles.input}
              type="number"
              placeholder="Seu Peso"
              onChange={(evento) => setPeso(parseFloat(evento.target.value))}
            ></input>
          </fieldset>
        </div>
        <div className={styles.result}>
          <fieldset className={styles.field}>
            <legend className={styles.legend}>Resultado</legend>
            <p className={styles.resultado}>Seu IMC: </p>
            <b>{calcularImc()}</b>
          </fieldset>
        </div>
      </form>
    </>
  );
};

export default Formulario;
