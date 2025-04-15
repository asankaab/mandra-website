'use server';

import { client } from "@/lib/client";
import { BlogEntrySkeleton, ContactEntrySkeleton, HomepageEntrySkeleton, ProjectEntrySkeleton, ServicesEntrySkeleton, TeamEntrySkeleton } from "@/lib/types";

export async function getHomepageData() {
    const homepageData = await client.getEntry<HomepageEntrySkeleton>('4enTabsbalVOcWNbC0sfYw')
  
    const parsedData = await JSON.parse(JSON.stringify(homepageData))

    return parsedData;
}

export async function getShowcaseData(limit?: number, skip?: number) {
    const showcaseData = await client.getEntries<ProjectEntrySkeleton>({
        content_type: 'project', limit: limit, skip: skip,
        select: ['fields.title', 'fields.slug', 'fields.shortDescription', 'fields.media', 'sys.createdAt'],
      });

    const parsedData = await JSON.parse(JSON.stringify(showcaseData))

    return parsedData;
}

export async function getBlogData(limit?: number, skip?: number) {
  const blogData = await client.getEntries<BlogEntrySkeleton>({
      content_type: 'blogArticle', limit: limit, skip: skip,
      select: ['fields.title', 'fields.slug', 'fields.coverPhoto', 'fields.content', 'sys.updatedAt'],
    });

  const parsedData = await JSON.parse(JSON.stringify(blogData))

  return parsedData;
}

export async function getContactPage() {
  const contactData = await client.getEntry<ContactEntrySkeleton>('76WVnRHmn7FesVhI3o5aG6');

  const parsedData = await JSON.parse(JSON.stringify(contactData))

  return parsedData;
}

export async function getServices() {
  const servicesData = await client.getEntries<ServicesEntrySkeleton>({
    content_type: 'style',
  })

  const parsedData = await JSON.parse(JSON.stringify(servicesData))

  return parsedData;
}

export async function getTeam(limit: number) {
  const teamData = await client.getEntries<TeamEntrySkeleton>({
    content_type: 'teamMember', limit: limit
  })

  const parsedData = await JSON.parse(JSON.stringify(teamData))

  return parsedData;
}