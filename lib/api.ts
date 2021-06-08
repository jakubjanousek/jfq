import client, { previewClient } from "./sanity";
import { format } from "date-fns";
import sanityImage from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { BlockContentProps } from "@sanity/block-content-to-react";
const getClient = (preview: boolean) => (preview ? previewClient : client);

const todayDate = format(new Date(), "yyyy-MM-dd");

export type AlbumOverview = {
  datacia_rok: string;
  nazov: string;
  kategoria: string;
  picture: SanityImageSource;
  slug: string;
};
export type AlbumDetail = {
  datacia_rok: string;
  datacia_plna: string;
  nazov: string;
  kategoria: string;
  picture: SanityImageSource;
  slug: string;
  data?: BlockContentProps;
  o_albume?: BlockContentProps;
  disky?: AlbumDisk[];
};
export type AlbumDisk = { title: string; tracklist?: AlbumTrack[] };
export type AlbumTrack = {
  title: string;
  autor?: string;
  slug: { current: string };
  o_pesnicke?: BlockContentProps;
  text?: BlockContentProps;
};
export type AlbumWithLyrics = {
  nazov: string;
  picture: SanityImageSource;
  slug: string;
  disky?: AlbumDisk[];
};

export const imageBuilder = sanityImage(client);

export async function getAllPostsForHome(preview: boolean) {
  const results = await getClient(preview)
    .fetch(`*[_type == "novinka"] | order(date desc, _updatedAt desc){
        date, content
      }[0..2]`);
  return results;
}

export async function getLongFormsForHome(preview: boolean) {
  const results = await getClient(preview)
    .fetch(`*[_type in ["clanky", "blog"]] | order(date desc, _updatedAt desc){
        title, date, slug, datacia, _type, excerpt, link
      }[0..2]`);
  return results;
}

export async function getAllAlbums(): Promise<AlbumOverview[]> {
  const results =
    await client.fetch(`*[_type == "album"] | order(datacia_rok desc){
          datacia_rok, nazov, kategoria, picture, 'slug': slug.current
        }`);
  return results;
}

const hasLyrics = "&& defined(disky[].tracklist[1].text)";
// const hasLyrics = "";
export async function getAlbumsWithLyrics(): Promise<AlbumWithLyrics[]> {
  const results =
    await client.fetch(`*[_type == "album" && defined(disky[].tracklist[].text)] | order(date desc, _updatedAt desc){
      datacia_rok, nazov, kategoria, picture, 'slug': slug.current, disky
    }`);
  return results;
}

export async function getAlbum(
  slug: string,
  preview: boolean
): Promise<AlbumDetail> {
  const results = await getClient(preview)
    .fetch(`*[_type == "album" && slug.current == "${slug}"] | order(date desc, _updatedAt desc){
            datacia_rok, datacia_plna, nazov, kategoria, picture, 'slug': slug.current, data, disky, o_albume
          }[0]`);
  return results;
}

export async function getFutureConcerts(preview: boolean) {
  const results = await getClient(preview)
    .fetch(`*[_type == "koncert" && date > "${todayDate}"] | order(date asc){
          date, content
        }`);
  return results;
}

export async function getBlogPosts(limit?: number) {
  const limitString = limit ? `[0..${limit}]` : "";
  const results =
    await client.fetch(`*[_type == "blog"]${limitString} | order(date desc, _updatedAt desc){
          title, date, slug, excerpt
        }`);
  return results;
}

export async function getBlogPost(slug: string, preview: boolean) {
  const results = await getClient(preview)
    .fetch(`*[_type == "blog" && slug.current == "${slug}"] | order(date desc, _updatedAt desc)[0]
          `);
  return results;
}

export async function getArticles(limit?: number) {
  const limitString = limit ? `[0..${limit}]` : "";
  const results =
    await client.fetch(`*[_type == "clanky"]${limitString} | order(date desc, _updatedAt desc){
          title, date, slug, excerpt, link, datacia
        }`);
  return results;
}

export async function getArticle(slug: string, preview: boolean) {
  const results = await getClient(preview).fetch(
    `*[_type == "clanky" && slug.current == "${slug}"] | order(date desc, _updatedAt desc)[0]`
  );
  return results;
}

export async function getInvites(limit?: number) {
  const limitString = limit ? `[0..${limit}]` : "";
  const results =
    await client.fetch(`*[_type == "pozvanka"]${limitString} | order(date desc, _updatedAt desc){
          picture, date
        }`);
  return results;
}
