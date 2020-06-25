import Layout from "../../components/Layout";
import { getAllAlbums, imageBuilder, AlbumOverview } from "../../lib/api";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import PageSubHeading from "../../components/PageSubHeading";

type Props = { albums: AlbumOverview[] };

const Category: React.FC<{ albums: AlbumOverview[]; title: string }> = ({
  albums,
  title,
}) => (
  <div className="mb-8">
    <PageSubHeading>{title}:</PageSubHeading>
    <div className="-m-4 flex flex-wrap">
      {albums.map((album) => (
        <div className="p-4 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
          <Link
            href="/hudba/[slug]"
            as={`/hudba/${album.slug}`}
            key={album.slug}
          >
            <a className="hover:underline">
              <img
                height={200}
                width={200}
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
              {album.nazov}, {format(parseISO(album.datacia_rok), "yyyy")}
            </a>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

const Hudba: React.FC<Props> = ({ albums }) => {
  const regularAlbums = albums.filter((album) => album.kategoria === "album");
  const slnovratAlbums = albums.filter(
    (album) => album.kategoria === "slnovrat"
  );
  const samplerAlbums = albums.filter((album) => album.kategoria === "sampler");
  return (
    <Layout>
      {regularAlbums.length ? (
        <Category albums={regularAlbums} title="Albumy" />
      ) : null}
      {slnovratAlbums.length ? (
        <Category albums={slnovratAlbums} title="Slnovrat" />
      ) : null}
      {samplerAlbums.length ? (
        <Category albums={samplerAlbums} title="Samplery" />
      ) : null}
    </Layout>
  );
};

export async function getStaticProps({ preview = false }) {
  const albums = await getAllAlbums();
  return {
    props: { albums, preview },
  };
}

export default Hudba;
