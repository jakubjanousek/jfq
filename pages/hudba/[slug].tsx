import Layout from "../../components/Layout";
import {
  getAllAlbums,
  imageBuilder,
  getAlbum,
  AlbumDetail,
  AlbumTrack,
} from "../../lib/api";
import { GetStaticProps } from "next";
import SanityBlock from "../../components/SanityBlock";
import PageSubHeading from "../../components/PageSubHeading";
import PageHeading from "../../components/PageHeading";
import getPageTitle from "../../utils/getPageTitle";
import React from "react";
import Head from "next/head";

type Props = { album: AlbumDetail; songInfo: AlbumTrack[] };

const Disk: React.FC<{ tracklist?: AlbumTrack[] }> = ({ tracklist }) =>
  tracklist ? (
    <ol className="list-decimal pl-8">
      {tracklist.map((track) => (
        <li key={track.title}>{track.title}</li>
      ))}
    </ol>
  ) : null;

const Album: React.FC<Props> = ({ album, songInfo }) => {
  return (
    <Layout>
      <Head>
        <title>{getPageTitle(album.nazov)}</title>
      </Head>
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
            height={300}
            width={300}
            src={
              imageBuilder.image(album.picture).height(600).width(600).url()!
            }
          />
          {album.data && <SanityBlock blocks={album.data} />}
        </div>
        <div className="p-6 w-full md:w-1/2 lg:w-2/3">
          {album.disky &&
            (album.disky.length > 1 ? (
              album.disky.map((disk, index) => (
                <div className="mb-4" key={index}>
                  CD{index + 1}
                  <br />
                  <Disk tracklist={disk.tracklist} />
                </div>
              ))
            ) : (
              <Disk tracklist={album.disky[0].tracklist} />
            ))}
        </div>
      </div>

      {album.o_albume && (
        <>
          <PageSubHeading className="mt-6">O albume:</PageSubHeading>
          <SanityBlock blocks={album.o_albume} />
        </>
      )}

      {songInfo.length ? (
        <>
          <PageSubHeading className="mt-6">O pesničkách:</PageSubHeading>
          {songInfo.map((song, index) => (
            <p key={index}>
              <strong>{song.title}</strong>
              <br />
              <SanityBlock blocks={song.o_pesnicke!} />
            </p>
          ))}
        </>
      ) : null}
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
  const songInfo =
    album.disky
      ?.reduce(
        (acc, disk) => acc.concat(disk.tracklist || []),
        [] as AlbumTrack[]
      )
      .filter((track) => track.o_pesnicke) || [];
  return {
    props: { album, preview, songInfo },
    revalidate: 60,
  };
};

export async function getStaticPaths() {
  const allAlbums = await getAllAlbums();
  return {
    paths:
      allAlbums?.map((album) => ({
        params: {
          slug: album.slug,
        },
      })) || [],
    fallback: "blocking",
  };
}

export default Album;
