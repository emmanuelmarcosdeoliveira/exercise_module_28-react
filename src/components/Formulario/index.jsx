import styles from "./Formulario.module.css";

const Formulario = () => {
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
            ></input>
          </fieldset>
          <fieldset className={styles.field}>
            <legend className={styles.legend}>Peso(ex.: 72.2)</legend>
            <input
              className={styles.input}
              type="number"
              placeholder="Seu Peso"
            ></input>
          </fieldset>
        </div>
        <div className={styles.result}>
          <fieldset className={styles.field}>
            <legend className={styles.legend}>Resultado</legend>
            <p></p>
          </fieldset>
        </div>
      </form>
    </>
  );
};

export default Formulario;
