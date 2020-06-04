type Props = { className?: string };

const PageSubHeading: React.FC<Props> = ({ children, className }) => (
  <h2 className={`${className} mb-4 text-2xl font-serif font-black`}>
    {children}
  </h2>
);

export default PageSubHeading;
