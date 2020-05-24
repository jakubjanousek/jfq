import Layout from "../components/Layout";
import { getAllPostsForHome, getFutureConcerts } from "../lib/api";
import Date from "../components/Date";
import SanityBlock from "../components/SanityBlock";

type Props = {
  posts: any[];
  shows: any[];
  preview: boolean;
};

const Home: React.FC<Props> = ({ posts, shows, preview }) => {
  return (
    <Layout>
      <div className="mb-12 mx-auto max-w-2xl text-center font-serif font-bold italic text-2xl">
        V hudbe skupiny Jednofázové kvasenie sa mieša folk s rockom, džez s
        vážnou hudbou, country s ľudovkou a naopak – ľudovka s country, vážna
        hudba s džezom, rock s folkom a naopak...
      </div>

      <div className="flex flex-wrap -m-4">
        <div className="p-4 w-full lg:w-1/2">
          <div className="mb-4 text-2xl font-serif font-black">Novinky:</div>
          {posts.map((post: any, index) => (
            <div className="mb-4" key={index}>
              <div className="font-serif  text-m">
                <Date dateString={post.date} />
              </div>
              <SanityBlock blocks={post.content} />
            </div>
          ))}
        </div>
        <div className="p-4 w-full lg:w-1/2">
          <div className="mb-4 text-2xl font-serif font-black">Koncerty:</div>
          {shows.length
            ? shows.map((show: any, index) => (
                <div className="mb-4" key={index}>
                  <div className="font-serif  text-m">
                    <Date dateString={show.date} displayTime />
                  </div>
                  <SanityBlock blocks={show.content} />
                </div>
              ))
            : "V najbližšej dobe žiaľ nemáme nič naplánované"}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ preview = false }) {
  const posts = await getAllPostsForHome(preview);
  const shows = await getFutureConcerts(preview);
  return {
    props: { posts, shows, preview },
  };
}

export default Home;
