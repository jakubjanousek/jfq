import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

type Props = { title?: string };

const Layout: React.FC<Props> = ({ children, title }) => {
  const backgrounds = ["bg1", "bg2", "bg3", "bg4"];
  const [bg] = useState(backgrounds[Math.floor(Math.random() * 4)]);

  return (
    <>
      <Head>
        <title>{title ? `${title} | ` : ""}Jednofázové kvasenie</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <div className="flex-1">
          <div className="px-6 pt-6 max-w-screen-lg mx-auto">
            <Header bg={bg} />
            <div className="page-body py-12">{children}</div>
          </div>
        </div>
        <div className="px-6 pb-6 max-w-screen-lg mx-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
