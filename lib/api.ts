import client, { previewClient } from "./sanity";
import { format } from "date-fns";
import sanityImage from "@sanity/image-url";
const getClient = (preview: boolean) => (preview ? previewClient : client);

const todayDate = format(new Date(), "yyyy-MM-dd");

type Post = { date: string };

const postFields = `
  date,content
`;

export const imageBuilder = sanityImage(client);

export async function getAllPostsForHome(preview: boolean) {
  const results = await getClient(preview)
    .fetch(`*[_type == "novinka"][0..2] | order(date desc, _updatedAt desc){
        ${postFields}
      }`);
  return results;
}

export async function getAllAlbums() {
  const results = await client.fetch(`*[_type == "album"] | order(date desc, _updatedAt desc){
          datacia_rok, nazov, kategoria, picture, slug
        }`);
  return results;
}

export async function getAlbum(slug: string, preview: boolean) {
  const results = await getClient(preview)
    .fetch(`*[_type == "album" && slug.current == "${slug}"][0] | order(date desc, _updatedAt desc){
            datacia_rok, datacia_plna, nazov, kategoria, picture, slug, data, tracklist, o_pesnickach
          }`);
  return results;
}

export async function getFutureConcerts(preview: boolean) {
  const results = await getClient(preview)
    .fetch(`*[_type == "koncert" && date > "${todayDate}"] | order(date asc){
          ${postFields}
        }`);
  return results;
}

export async function getAllBlogPosts() {
  const results = await client.fetch(`*[_type == "blog"] | order(date desc, _updatedAt desc){
          title, date, slug, excerpt
        }`);
  return results;
}

export async function getBlogPost(slug: string, preview: boolean) {
  const results = await getClient(preview)
    .fetch(`*[_type == "blog" && slug.current == "${slug}"][0] | order(date desc, _updatedAt desc)
          `);
  return results;
}

export async function getAllArticles() {
  const results = await client.fetch(`*[_type == "clanky"] | order(date desc, _updatedAt desc){
          title, date, slug, excerpt, link, datacia
        }`);
  return results;
}

export async function getArticle(slug: string, preview: boolean) {
  const results = await getClient(preview)
    .fetch(`*[_type == "clanky" && slug.current == "${slug}"][0] | order(date desc, _updatedAt desc)
          `);
  return results;
}
