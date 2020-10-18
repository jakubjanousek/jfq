import Layout from "../../components/Layout";
import {
  getAllAlbums,
  imageBuilder,
  getAlbumsWithLyrics,
  AlbumWithLyrics,
  AlbumTrack,
} from "../../lib/api";
import Link from "next/link";
import PageSubHeading from "../../components/PageSubHeading";

type Props = { albums: AlbumWithLyrics[] };

// const Track: React.FC<AlbumTrack> = ({ slug }) => <></>;

const Hudba: React.FC<Props> = ({ albums }) => {
  return (
    <Layout>
      <div className="-m-4 flex flex-wrap">
        {albums.map((album) => (
          <>
            <div className="p-4 w-full sm:w-1/2 md:w-1/3">
              <img
                height={400}
                width={400}
                alt={`Obálka ${album.nazov}`}
                className="mb-1 block"
                src={
                  imageBuilder
                    .image(album.picture)
                    .height(200)
                    .width(200)
                    .url()!
                }
              />
            </div>
            <div className="p-4 w-full sm:w-1/2 md:w-2/3">
              {album.disky?.map((disk) => (
                <div className="mb-4">
                  <>
                    {album.disky && album.disky.length > 1 && (
                      <PageSubHeading>{disk.title}</PageSubHeading>
                    )}
                    <ol className="list-decimal pl-8">
                      {disk.tracklist?.map((track, index) => (
                        <li key={index}>
                          {track.text ? (
                            <Link
                              href="/texty/[slug]"
                              as={`/texty/${album.slug}#${track.slug.current}`}
                            >
                              <a className="underline hover:no-underline">
                                {track.title}
                              </a>
                            </Link>
                          ) : (
                            track.title
                          )}
                        </li>
                      ))}
                    </ol>
                  </>
                </div>
              ))}
            </div>
          </>
        ))}
      </div>
    </Layout>
  );
};

export async function getStaticProps({ preview = false }) {
  const albums = await getAlbumsWithLyrics();

  return {
    props: { albums, preview },
  };
}

export default Hudba;
