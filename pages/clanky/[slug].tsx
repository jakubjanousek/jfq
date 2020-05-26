import Layout from "../../components/Layout";
import { getArticle, getAllArticles } from "../../lib/api";
import { GetStaticProps } from "next";
import SanityBlock from "../../components/SanityBlock";
import PageHeading from "../../components/PageHeading";
import Date from "../../components/Date";
import Article from "../../components/Article";

type Props = { article: any };

const ArticleDetail: React.FC<Props> = ({ article }) => {
  return (
    <Layout>
      <Article coverImg={article.cover_img}>
        <PageHeading>{article.title}</PageHeading>
        <div className="-mt-6 mb-6">{article.datacia}</div>
        <SanityBlock blocks={article.content} />
      </Article>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  if (!params || !params.slug || Array.isArray(params.slug))
    return { props: {} };

  const article = await getArticle(params.slug, preview);
  return {
    props: { article, preview },
  };
};

export async function getStaticPaths() {
  const allArticles = await getAllArticles();
  return {
    paths:
      allArticles?.map((article: any) => ({
        params: {
          slug: article.slug.current,
        },
      })) || [],
    fallback: false,
  };
}

export default ArticleDetail;
