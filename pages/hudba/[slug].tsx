import Layout from "../../components/Layout";
import { getAllAlbums, imageBuilder, getAlbum } from "../../lib/api";
import BlockContent from "@sanity/block-content-to-react";

type Props = { album: any };

const Album: React.FC<Props> = ({ album }) => {
  return (
    <Layout>
      <div className="text-4xl leading-none font-serif font-extrabold">
        {album.nazov}
      </div>
      <div className="mb-6 font-italic fontserif">{album.datacia_plna}</div>
      <div className="-m-6 flex flex-wrap">
        <div className="p-6 w-full md:w-1/2 lg:w-1/3">
          <img
            alt={`Obálka ${album.nazov}`}
            className="mb-6 w-full"
            style={{ maxWidth: "450px" }}
            src={imageBuilder.image(album.picture).height(600).width(600).url()}
          />
          <BlockContent className="" blocks={album.data} />
        </div>
        <div className="p-6 w-full md:w-1/2 lg:w-2/3">
          <BlockContent blocks={album.tracklist} />
        </div>
      </div>
      <div className="mb-4 mt-12 text-2xl font-serif font-black">
        O pesničkách:
      </div>
      <BlockContent className="" blocks={album.o_pesnickach} />
    </Layout>
  );
};

export async function getStaticProps({ params, preview = false }) {
  const album = await getAlbum(params.slug, preview);
  return {
    props: { album, preview },
  };
}

export async function getStaticPaths() {
  const allAlbums = await getAllAlbums();
  return {
    paths:
      allAlbums?.map((album: any) => ({
        params: {
          slug: album.slug,
        },
      })) || [],
    fallback: false,
  };
}

export default Album;
