import Layout from "../../components/Layout";
import { getAllBlogPosts, getAllArticles } from "../../lib/api";
import Link from "next/link";
import PageHeading from "../../components/PageHeading";
import Date from "../../components/Date";

type Props = { articles: any[] };

const Articles: React.FC<Props> = ({ articles }) => {
  return (
    <Layout>
      <PageHeading>Články</PageHeading>
      {articles.map((article) => (
        <Link href="/clanky/[slug]" as={`/clanky/${article.slug.current}`}>
          <a className="block mb-4">
            <div className="underline hover:no-underline">
              <strong>
                {article.title} ({article.datacia})
              </strong>
            </div>
            <div className="no-underline">{article.excerpt}</div>
          </a>
        </Link>
      ))}
    </Layout>
  );
};

export async function getStaticProps({ preview = false }) {
  const articles = await getAllArticles();
  return {
    props: { articles, preview },
  };
}

export default Articles;
