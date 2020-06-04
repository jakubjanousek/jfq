import Layout from "../../components/Layout";
import { getAllAlbums, imageBuilder, getAlbum } from "../../lib/api";
import { GetStaticProps } from "next";
import SanityBlock from "../../components/SanityBlock";
import PageSubHeading from "../../components/PageSubHeading";
import PageHeading from "../../components/PageHeading";

type Props = { album: any };

const Album: React.FC<Props> = ({ album }) => {
  return (
    <Layout>
      <PageHeading>{album.nazov}</PageHeading>
      <div className="-mt-6 mb-6 font-italic fontserif">
        {album.datacia_plna}
      </div>
      <div className="-m-6 flex flex-wrap">
        <div className="p-6 w-full md:w-1/2 lg:w-1/3">
          <img
            alt={`Obálka ${album.nazov}`}
            className="mb-6 w-full"
            style={{ maxWidth: "450px" }}
            src={
              imageBuilder.image(album.picture).height(600).width(600).url()!
            }
          />
          <SanityBlock blocks={album.data} />
        </div>
        <div className="p-6 w-full md:w-1/2 lg:w-2/3">
          <SanityBlock blocks={album.tracklist} />
        </div>
      </div>
      <PageSubHeading>O pesničkách:</PageSubHeading>
      <SanityBlock blocks={album.o_pesnickach} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  if (!params || !params.slug || Array.isArray(params.slug))
    return { props: {} };

  const album = await getAlbum(params.slug, preview);
  return {
    props: { album, preview },
  };
};

export async function getStaticPaths() {
  const allAlbums = await getAllAlbums();
  return {
    paths:
      allAlbums?.map((album: any) => ({
        params: {
          slug: album.slug.current,
        },
      })) || [],
    fallback: false,
  };
}

export default Album;
