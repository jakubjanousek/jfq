import Layout from "../components/Layout";
import { getAllPostsForHome, getFutureConcerts } from "../lib/api";
import Date from "../components/Date";
import SanityBlock from "../components/SanityBlock";
import PageSubHeading from "../components/PageSubHeading";

type Props = {
  posts: any[];
  shows: any[];
  preview: boolean;
};

const Home: React.FC<Props> = ({ posts, shows, preview }) => {
  return (
    <Layout>
      <img className="mx-auto mb-2" src="./jfq-flourish.png" />
      <div className="mb-2 mx-auto max-w-2xl text-center font-serif font-bold italic text-2xl">
        V hudbe skupiny Jednofázové kvasenie sa mieša folk s rockom, džez s
        vážnou hudbou, country s ľudovkou a naopak – ľudovka s country, vážna
        hudba s džezom, rock s folkom a naopak...
      </div>
      <img className="mx-auto mb-12" src="./jfq-flourish.png" />

      <div className="flex flex-wrap -m-4">
        <div className="p-4 w-full lg:w-1/2">
          <PageSubHeading>Novinky:</PageSubHeading>
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
          <PageSubHeading>Koncerty:</PageSubHeading>
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
