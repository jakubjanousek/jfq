type Props = { className?: string };

const Divider: React.FC<Props> = ({ className }) => (
  <img
    className={`${className} mx-auto`}
    src="./jfq-flourish-removebg-preview.png"
  />
);

export default Divider;
