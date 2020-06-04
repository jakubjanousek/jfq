import styles from "./index.module.css";

type Props = { bg: string };

const Pandulak: React.FC<Props> = ({ bg }) => {
  return (
    <div className={styles.pandulak}>
      <div className={styles[bg]}></div>
    </div>
  );
};

export default Pandulak;
