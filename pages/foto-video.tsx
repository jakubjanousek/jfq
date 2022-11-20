import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import PageSubHeading from "../components/PageSubHeading";
import PagesManifestPlugin from "next/dist/build/webpack/plugins/pages-manifest-plugin";
import Link from "next/link";
import VideoEmbed from "../components/VideoEmbed";
import React from "react";
import Head from "next/head";
import getPageTitle from "../utils/getPageTitle";
import Image, { StaticImageData } from "next/legacy/image";

import mainFoto from "../public/foto/DSC_1006.jpg";

import foto1 from "../public/foto/DSC_0060.jpg";
import foto2 from "../public/foto/JFQ v Divadle a_ha_2.jpg";
import foto3 from "../public/foto/DSC_1820.jpg";
import foto4 from "../public/foto/ERA0241.jpg";
import foto5 from "../public/foto/DSC_1854.jpg";
import foto6 from "../public/foto/DSC_1894.jpg";

const Foto: React.FC<{ img: StaticImageData }> = ({ img }) => (
  (<Link href={img.src} target="blank">

    <div className="mb-8">
      <Image className="block mb-8" src={img} placeholder="blur" />
    </div>

  </Link>)
);

const FotoVideoPage: React.FC = () => (
  <Layout>
    <Head>
      <title>{getPageTitle("Foto/Video")}</title>
    </Head>
    <div className="-m-4 flex flex-wrap">
      <div className="p-4 w-full sm:w-1/2 md:w-1/3">
        <PageSubHeading>Video</PageSubHeading>
        <VideoEmbed
          className="mb-8"
          src="https://www.youtube.com/embed/ZHbKyAijx-s"
        />
        <VideoEmbed
          className="mb-8"
          src="https://www.youtube.com/embed/tXHEdVEzwLk"
        />
        <VideoEmbed
          className="mb-8"
          src="https://www.youtube.com/embed/NhOm6SB94pQ"
        />
        <VideoEmbed
          className="mb-8"
          src="https://www.youtube.com/embed/B_Go91RAWOo"
        />
        <VideoEmbed
          className="mb-8"
          src="https://www.youtube.com/embed/Qk5IzBVHUZM"
        />
        <VideoEmbed
          className="mb-8"
          src="https://www.youtube.com/embed/OddZ7w3T5cI"
        />
      </div>
      <div className="p-4 w-full sm:w-1/2 md:w-2/3">
        <PageSubHeading>Foto</PageSubHeading>
        <div className="-m-4 flex flex-wrap">
          <div className="p-4 -mb-8 w-full">
            <Foto img={mainFoto} />
          </div>
          <div className="p-4 w-full md:w-1/3">
            <Foto img={foto1} />
            <Foto img={foto2} />
            <Foto img={foto3} />
          </div>
          <div className="p-4 w-full md:w-2/3">
            <Foto img={foto4} />
            <Foto img={foto5} />
            <Foto img={foto6} />
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default FotoVideoPage;
