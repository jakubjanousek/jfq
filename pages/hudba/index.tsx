import Layout from "../../components/Layout";
import { getAllAlbums, imageBuilder } from "../../lib/api";
import Link from "next/link";
import { format, parseISO } from "date-fns";

type Props = { albums: any[] };

const Category: React.FC<{ albums: any[]; title: string }> = ({
  albums,
  title,
}) => (
  <div className="mb-8">
    <div className="mb-4 text-2xl font-serif font-black">{title}:</div>
    {albums.map((album) => (
      <Link href={`/hudba/${album.slug}`} key={album.slug}>
        <a className="hover:underline">
          <img
            height={200}
            width={200}
            alt={`Obálka ${album.nazov}`}
            className="mb-1 block"
            src={imageBuilder.image(album.picture).height(200).width(200).url()}
          />
          {album.nazov}, {format(parseISO(album.datacia_rok), "yyyy")}
        </a>
      </Link>
    ))}
  </div>
);

const Hudba: React.FC<Props> = ({ albums }) => {
  return (
    <Layout>
      <Category
        albums={albums.filter((album) => album.kategoria === "album")}
        title="Albumy"
      />
      <Category
        albums={albums.filter((album) => album.kategoria === "slnovrat")}
        title="Slnovrat"
      />
      <Category
        albums={albums.filter((album) => album.kategoria === "sampler")}
        title="Samplery"
      />
    </Layout>
  );
};

export async function getStaticProps({ preview = false }) {
  const albums = await getAllAlbums(preview);
  return {
    props: { albums, preview },
  };
}

export default Hudba;
