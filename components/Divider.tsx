type Props = { className?: string };

const Divider: React.FC<Props> = ({ className }) => (
  <img className={`${className} mx-auto`} src="./jfq-flourish.png" />
);

export default Divider;
