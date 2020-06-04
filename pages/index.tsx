import Layout from "../components/Layout";
import { getAllPostsForHome, getFutureConcerts } from "../lib/api";
import Date from "../components/Date";
import SanityBlock from "../components/SanityBlock";
import PageSubHeading from "../components/PageSubHeading";
import Pandulak from "../components/Pandulak";
import Divider from "../components/Divider";

type Props = {
  posts: any[];
  shows: any[];
  preview: boolean;
};

const Section: React.FC<{ title: string; bg: string }> = ({
  title,
  bg,
  children,
}) => (
  <div className="p-4 w-full lg:w-1/3">
    <Pandulak bg={bg} />
    <PageSubHeading className="text-center">{title}</PageSubHeading>
    <Divider className="-mt-2 mb-6" />
    {children}
  </div>
);

const Home: React.FC<Props> = ({ posts, shows, preview }) => {
  return (
    <Layout>
      <Divider className="mb-2" />
      <div className="mb-2 mx-auto max-w-2xl text-center font-serif font-bold italic text-2xl">
        V hudbe skupiny Jednofázové kvasenie sa mieša folk s rockom, džez s
        vážnou hudbou, country s ľudovkou a naopak – ľudovka s country, vážna
        hudba s džezom, rock s folkom a naopak...
      </div>
      <Divider className="mb-12" />

      <div className="flex flex-wrap -m-4">
        <Section bg="bg1" title="Novinky">
          {posts.map((post: any, index) => (
            <div className="mb-4" key={index}>
              <div className="font-serif  text-m">
                <Date dateString={post.date} />
              </div>
              <SanityBlock blocks={post.content} />
            </div>
          ))}
        </Section>
        <Section bg="bg2" title="Články a blogy">
          {posts.map((post: any, index) => (
            <div className="mb-4" key={index}>
              <div className="font-serif  text-m">
                <Date dateString={post.date} />
              </div>
              <SanityBlock blocks={post.content} />
            </div>
          ))}
        </Section>
        <Section bg="bg3" title="Koncerty">
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
        </Section>
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
