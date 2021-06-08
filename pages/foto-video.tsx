import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import PageSubHeading from "../components/PageSubHeading";
import PagesManifestPlugin from "next/dist/build/webpack/plugins/pages-manifest-plugin";
import Link from "next/link";
import VideoEmbed from "../components/VideoEmbed";
import React from "react";
import Head from "next/head";
import getPageTitle from "../utils/getPageTitle";

const SmallFoto: React.FC<{ src: string }> = ({ src }) => (
  <Link href={src}>
    <a target="blank">
      <img className="block mb-8" src={src} />
    </a>
  </Link>
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
          <div className="p-4 w-full">
            <img className="block" src="/foto/DSC_1006.jpg" />
          </div>
          <div className="p-4 w-full md:w-1/3">
            <SmallFoto src="/foto/DSC_0060.jpg" />
            <SmallFoto src="/foto/JFQ v Divadle a_ha_2.jpg" />
            <SmallFoto src="/foto/DSC_1820.jpg" />
          </div>
          <div className="p-4 w-full md:w-2/3">
            <SmallFoto src="/foto/ERA0241.jpg" />
            <SmallFoto src="/foto/DSC_1854.jpg" />
            <SmallFoto src="/foto/DSC_1894.jpg" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default FotoVideoPage;
