import Layout from "../../components/Layout";
import { getBlogPosts, getArticles } from "../../lib/api";
import Link from "next/link";
import PageHeading from "../../components/PageHeading";
import Date from "../../components/Date";

type Props = { articles: any[] };

const Articles: React.FC<Props> = ({ articles }) => {
  return (
    <Layout>
      <div className="-m-4 flex">
        <div className="p-4 hidden md:block">
          <img src="/jfq-bg-sneh-together.png" />
        </div>
        <div className="p-4">
          <PageHeading>Články</PageHeading>
          {articles.map((article) => {
            const linkContent = (
              <>
                <div className="underline hover:no-underline">
                  <strong>
                    {article.title} ({article.datacia})
                  </strong>
                </div>
                <div className="no-underline">{article.excerpt}</div>
              </>
            );

            return article.link ? (
              <a
                href={article.link}
                rel="noopener noreferrer"
                target="_blank"
                className="block mb-4"
              >
                {linkContent}
              </a>
            ) : (
              <Link
                href="/clanky/[slug]"
                as={`/clanky/${article.slug.current}`}
              >
                <a className="block mb-4">{linkContent}</a>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ preview = false }) {
  const articles = await getArticles();
  return {
    props: { articles, preview },
  };
}

export default Articles;
