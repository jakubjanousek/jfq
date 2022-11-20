import Layout from "../components/Layout";
import {
  getAllPostsForHome,
  getFutureConcerts,
  getInvites,
  imageBuilder,
  getBlogPosts,
  getLongFormsForHome,
} from "../lib/api";
import Date from "../components/Date";
import SanityBlock from "../components/SanityBlock";
import PageSubHeading from "../components/PageSubHeading";
import Pandulak from "../components/Pandulak";
import Divider from "../components/Divider";
import Link from "next/link";

type Props = {
  posts: any[];
  shows: any[];
  longForms: any[];
  invites: any[];
  preview: boolean;
};

const HomeSubHeading: React.FC = ({ children }) => (
  <>
    <PageSubHeading className="text-center">{children}</PageSubHeading>
    <Divider className="-mt-2 mb-6" />
  </>
);

const Section: React.FC<{ bg: string }> = ({ bg, children }) => (
  <div className="p-4 w-full lg:w-1/3">
    <Pandulak bg={bg} />
    {children}
  </div>
);

const Home: React.FC<Props> = ({ posts, shows, invites, longForms }) => {
  return (
    <Layout>
      <div className="flex flex-wrap -m-4">
        <Section bg="bg2">
          <HomeSubHeading>Novinky</HomeSubHeading>
          {posts.map((post: any, index) => (
            <div className="mb-4" key={index}>
              <div className="font-serif">
                <Date dateString={post.date} />
              </div>
              <SanityBlock blocks={post.content} />
            </div>
          ))}
          {/*<Link href="/novinky">
            <a className="underline">...viac noviniek</a>
          </Link>*/}
        </Section>
        <Section bg="bg9">
          <HomeSubHeading>Články a blogy</HomeSubHeading>
          {longForms.map((longForm: any, index) => {
            const externalLink = longForm.link;
            const slug = longForm?.slug?.current;
            const linkParams =
              longForm._type === "clanky"
                ? { href: "/clanky/[slug]", as: `/clanky/${slug}` }
                : { href: "/blog/[slug]", as: `/blog/${slug}` };

            const content = (
              <>
                <div className="font-serif">
                  <Date dateString={longForm.date} />
                </div>
                <div className="mb-1">
                  <div className="underline hover:no-underline">
                    <strong>{longForm.title}</strong>
                  </div>
                  {longForm.datacia && (
                    <div className="italic text-sm">({longForm.datacia})</div>
                  )}
                </div>
                {longForm.excerpt}
              </>
            );

            return (
              <div className="mb-4" key={index}>
                {externalLink ? (
                  <a
                    href={externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                ) : (
                  <Link {...linkParams}>
                    {content}
                  </Link>
                )}
              </div>
            );
          })}
          <Link href="/clanky" className="block underline">
            ...články
          </Link>
          <Link href="/blog" className="block underline">
            ...blog
          </Link>
        </Section>
        <Section bg="bg16">
          <HomeSubHeading>Koncerty</HomeSubHeading>
          <div className="mb-12">
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
          <HomeSubHeading>Posledné pozvánky</HomeSubHeading>
          <div className="mb-12">
            <div className="-m-4 flex items-center">
              {invites.map((invite: any) => (
                <div className="p-4" key={invite.date}>
                  <a
                    href={imageBuilder.image(invite.picture).url()!}
                    target="_blank"
                    className="block border border-gray-300"
                  >
                    <img
                      className="block"
                      height={200}
                      src={
                        imageBuilder.image(invite.picture).height(300).url()!
                      }
                    />
                  </a>
                </div>
              ))}
            </div>
            {/*<Link href="/novinky">
              <a className="block mt-4 underline">...viac pozvánok</a>
                    </Link>*/}
          </div>
          <HomeSubHeading>Video</HomeSubHeading>
          <iframe
            loading="lazy"
            src="https://www.youtube.com/embed/ZHbKyAijx-s"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Section>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ preview = false }) {
  const posts = await getAllPostsForHome(preview);
  const invites = await getInvites(2);
  const shows = await getFutureConcerts(preview);
  const longForms = await getLongFormsForHome(preview);
  return {
    props: { posts, shows, preview, invites, longForms },
  };
}

export default Home;
