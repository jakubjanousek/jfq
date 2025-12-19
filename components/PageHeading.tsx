type Props = { className?: string; children: React.ReactNode };
const PageHeading: React.FC<Props> = ({ children, className }) => (
  <h1
    className={`${className} mb-6 text-4xl leading-none font-serif font-extrabold`}
  >
    {children}
  </h1>
);

export default PageHeading;
