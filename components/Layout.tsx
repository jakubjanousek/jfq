import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { getRandomPandulak } from "./Pandulak/utils";
import Image from "next/image";

type Props = { title?: string; sideImg?: StaticImageData };

const Layout: React.FC<Props> = ({ children, title, sideImg }) => {
  const [bg] = useState(getRandomPandulak());

  return (
    <>
      <Head>
        <title>{title ? `${title} | ` : ""}Jednofázové kvasenie</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <div className="flex-1">
          <div className="px-6 pt-6 max-w-screen-lg mx-auto">
            <Header bg={bg} />
            <div className="page-body py-12">
              {sideImg ? (
                <div className="-m-4 flex flex-wrap">
                  <div className="p-4 hidden w-full md:block md:w-1/4">
                    <Image src={sideImg} />
                  </div>
                  <div className="p-4 w-full md:w-3/4">{children}</div>
                </div>
              ) : (
                <>{children}</>
              )}
            </div>
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
