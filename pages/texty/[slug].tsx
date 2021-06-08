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
import { useRouter } from "next/router";
import { useEffect } from "react";

type Props = { album: AlbumDetail; lyrics: AlbumTrack[] };

const Album: React.FC<Props> = ({ album, lyrics }) => {
  const router = useRouter();

  useEffect(() => {
    let id = router.asPath.split("#")[1];
    // wait for transition to end
    setTimeout(() => {
      if (id) {
        const text = document.getElementById(id);
        text?.scrollIntoView();
      }
    }, 300);
  }, []);

  return (
    <Layout sideImg="/sidebg4.png">
      <PageHeading>{album.nazov}</PageHeading>
      <div className="-mt-6 mb-6 font-italic fontserif">
        {album.datacia_plna}
      </div>
      {lyrics.map((track) => (
        <div className="mb-12" id={track.slug.current} key={track.slug.current}>
          <PageSubHeading>{track.title}</PageSubHeading>
          {track.autor && (
            <div className="mb-4 -mt-2 italic">({track.autor})</div>
          )}
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
