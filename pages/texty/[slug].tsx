import Layout from "../../components/Layout";
import {
  getAlbum,
  AlbumDetail,
  AlbumTrack,
  getAlbumsWithLyrics,
} from "../../lib/api";
import { GetStaticProps } from "next";
import SanityBlock from "../../components/SanityBlock";
import PageSubHeading from "../../components/PageSubHeading";
import PageHeading from "../../components/PageHeading";

type Props = { album: AlbumDetail; lyrics: AlbumTrack[] };

const Album: React.FC<Props> = ({ album, lyrics }) => {
  return (
    <Layout sideImg="/jfq-bg-sneh-together.png">
      <PageHeading>{album.nazov}</PageHeading>
      <div className="-mt-6 mb-6 font-italic fontserif">
        {album.datacia_plna}
      </div>
      {lyrics.map((track) => (
        <div className="mb-12" id={track.slug.current} key={track.slug.current}>
          <PageSubHeading>{track.title}</PageSubHeading>
          {track.text && <SanityBlock blocks={track.text} />}
        </div>
      ))}
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
  const lyrics =
    album.disky
      ?.reduce(
        (acc, disk) => acc.concat(disk.tracklist || []),
        [] as AlbumTrack[]
      )
      .filter((track) => track.text) || [];
  return {
    props: { album, preview, lyrics },
  };
};

export async function getStaticPaths() {
  const allAlbums = await getAlbumsWithLyrics();
  return {
    paths:
      allAlbums?.map((album) => ({
        params: {
          slug: album.slug,
        },
      })) || [],
    fallback: false,
  };
}

export default Album;
