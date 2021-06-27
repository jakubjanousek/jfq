type Props = { className?: string };

const Divider: React.FC<Props> = ({ className }) => (
  <img
    className={`${className} mx-auto`}
    src="./flourish.png"
    width={215}
    height={30}
    style={{ width: 215 }}
    // src="./jfq-flourish-removebg-preview.png"
  />
);

export default Divider;
