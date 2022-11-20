import Layout from "../../components/Layout";
import { getBlogPosts, getArticles } from "../../lib/api";
import Link from "next/link";
import PageHeading from "../../components/PageHeading";
import Date from "../../components/Date";
import React from "react";
import getPageTitle from "../../utils/getPageTitle";
import Head from "next/head";
import vzducholod from "../../public/sidebg1.jpg";

type Props = { articles: any[] };

const Articles: React.FC<Props> = ({ articles }) => {
  return (
    <Layout sideImg={vzducholod}>
      <Head>
        <title>{getPageTitle("Články")}</title>
      </Head>
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
            key={article.link}
          >
            {linkContent}
          </a>
        ) : (
          <Link
            href="/clanky/[slug]"
            as={`/clanky/${article.slug.current}`}
            key={article.slug.current}
            className="block mb-4"
          >
            {linkContent}
          </Link>
        );
      })}
    </Layout>
  );
};

export async function getStaticProps({ preview = false }) {
  const articles = await getArticles();
  return {
    props: { articles, preview },
    revalidate: 60,
  };
}

export default Articles;
