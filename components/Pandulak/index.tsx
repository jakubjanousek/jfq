import styles from "./index.module.css";

type Props = { bg: string; transition?: boolean };

const Pandulak: React.FC<Props> = ({ bg, transition }) => {
  return (
    <div
      className={`${styles.pandulak} ${transition ? styles.transition : ""}`}
    >
      <div className={`${styles.bg} ${styles[bg]}`}></div>
    </div>
  );
};

export default Pandulak;
