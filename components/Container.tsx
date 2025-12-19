type Props = { className?: string; children: React.ReactNode };

const Container: React.FC<Props> = ({ children, className }) => (
  <div className={`max-w-screen-lg mx-auto ${className}`}>{children}</div>
);

export default Container;
