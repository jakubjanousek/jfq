import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

type Props = { title?: string };

const Layout: React.FC<Props> = ({ children, title }) => (
  <>
    <Head>
      <title>{title ? `${title} | ` : ""}Jednofázové kvasenie</title>
    </Head>
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="px-6 pt-6 max-w-screen-lg mx-auto">
          <Header />
          <div className="py-12">{children}</div>
        </div>
      </div>
      <div className="px-6 pb-6 max-w-screen-lg mx-auto">
        <Footer />
      </div>
    </div>
  </>
);

export default Layout;
