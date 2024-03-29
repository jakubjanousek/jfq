import Layout from "../../components/Layout";
import { getBlogPosts, getBlogPost } from "../../lib/api";
import { GetStaticProps } from "next";
import SanityBlock from "../../components/SanityBlock";
import PageHeading from "../../components/PageHeading";
import Date from "../../components/Date";
import Article from "../../components/Article";
import React from "react";
import getPageTitle from "../../utils/getPageTitle";
import Head from "next/head";

type Props = { blog: any };

const BlogPost: React.FC<Props> = ({ blog }) => {
  return (
    <Layout>
      <Head>
        <title>{getPageTitle(`${blog.title} - blog`)}</title>
      </Head>
      <Article coverImg={blog.cover_img}>
        <div className="font-italic fontserif">
          <Date dateString={blog.date} />
        </div>
        <PageHeading>{blog.title}</PageHeading>
        <SanityBlock blocks={blog.content} />
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

  const blog = await getBlogPost(params.slug, preview);
  return {
    props: { blog, preview },
    revalidate: 60,
  };
};

export async function getStaticPaths() {
  const allBlogs = await getBlogPosts();
  return {
    paths:
      allBlogs?.map((blog: any) => ({
        params: {
          slug: blog.slug.current,
        },
      })) || [],
    fallback: "blocking",
  };
}

export default BlogPost;
