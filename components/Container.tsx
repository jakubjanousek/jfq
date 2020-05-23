type Props = { className?: string };

const Container: React.FC<Props> = ({ children, className }) => (
  <div className={`max-w-screen-lg mx-auto ${className}`}>{children}</div>
);

export default Container;
