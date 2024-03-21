import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className="container">
        <h2 className={styles.title}>Cálculo de IMC</h2>
        <p className={styles.parag}>
          <strong>IMC</strong> é a sigla para Índice de Massa Corpórea,
          parâmetro adotado pela Organização Mundial de Saúde para calcular o
          peso ideal de cada pessoa.
        </p>
        <p className={styles.parag}>
          O índice é calculado da seguinte maneira: divide-se o peso do paciente
          pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso
          <strong>
            {" "}
            normal quando o resultado do IMC está entre 18.5 e 24.9.
          </strong>
        </p>
        <img className={styles.img} src="/tabelaimc.png"></img>

        <span className={styles.span}>IMPORTANTE!</span>
        <p className={styles.parag}>
          Ao fazer a inclusão dos valores dentro dos campos de altura e peso
          vamos colocar ( . )<strong> "ponto" </strong>ao invés de virgula.
        </p>
      </div>
    </>
  );
};

export default Header;
