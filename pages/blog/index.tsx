import Layout from "../../components/Layout";
import { getBlogPosts } from "../../lib/api";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import PageSubHeading from "../../components/PageSubHeading";
import PageHeading from "../../components/PageHeading";
import Date from "../../components/Date";

type Props = { blogPosts: any[] };

const Blog: React.FC<Props> = ({ blogPosts }) => {
  return (
    <Layout sideImg="/jfq-bg-sneh-together.png">
      <PageHeading>Blog</PageHeading>
      {blogPosts.map((blog) => (
        <Link href="/blog/[slug]" as={`/blog/${blog.slug.current}`}>
          <a className="block mb-4">
            <div className="underline hover:no-underline">
              <strong>
                {blog.title} (<Date dateString={blog.date} />)
              </strong>
            </div>
            <div className="no-underline">{blog.excerpt}</div>
          </a>
        </Link>
      ))}
    </Layout>
  );
};

export async function getStaticProps({ preview = false }) {
  const blogPosts = await getBlogPosts();
  return {
    props: { blogPosts, preview },
  };
}

export default Blog;
