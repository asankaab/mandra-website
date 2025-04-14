
import * as contentful from 'contentful';

export type HomepageEntrySkeleton = {
  contentTypeId: "homepage"
  fields: {
    mainHeading: contentful.EntryFieldTypes.Text
    subHeading: contentful.EntryFieldTypes.Text
    description: contentful.EntryFieldTypes.Text
    social: contentful.EntryFieldTypes.Array<contentful.EntryFieldTypes.Symbol>
    heroImages: Array<contentful.EntryFieldTypes.AssetLink>
    brandLogo: contentful.EntryFieldTypes.AssetLink
  }
}

export type ProjectEntrySkeleton = {
  contentTypeId: "project"
  fields: {
    title: contentful.EntryFieldTypes.Text
    slug: contentful.EntryFieldTypes.Text
    shortDescription: contentful.EntryFieldTypes.Text
    content: contentful.EntryFieldTypes.RichText
    media: Array<contentful.EntryFieldTypes.AssetLink>
  },
  sys: { id: string, createdAt: contentful.EntryFieldTypes.Date }
}

export interface ProjectEntryType {
  fields: {
    title: string;
    slug: string;
    shortDescription: string;
    media: Array<{
      contentTypeId: "media"
      fields: {
        file: { url: string },
        title: string
      },
      sys: { id: string, createdAt: contentful.EntryFieldTypes.Date }
    }>;
  };
  sys: {
    createdAt: string;
    id: string
  };
  contentTypeId?: string; 
}

export type BlogEntrySkeleton = {
  contentTypeId: "blogArticle"
  fields: {
    title: contentful.EntryFieldTypes.Text
    slug: contentful.EntryFieldTypes.Text
    content: contentful.EntryFieldTypes.RichText
    coverPhoto: contentful.EntryFieldTypes.AssetLink
    author: contentful.EntryFieldTypes.EntryLink<AuthorEntrySkeleton>
  },
  sys: { id: string, createdAt: contentful.EntryFieldTypes.Date }
}

export type AuthorEntrySkeleton = {
  contentTypeId: "author"
  fields: {
    name: contentful.EntryFieldTypes.Text
    bio: contentful.EntryFieldTypes.Text
    avatar: contentful.EntryFieldTypes.AssetLink
  },
  sys: { id: string, createdAt: contentful.EntryFieldTypes.Date }
}

export interface BlogEntryType {
  fields: {
    title: string;
    slug: string;
    content: { content: [{content: [{value: string}]}]};
    coverPhoto: {
      contentTypeId: "media"
      fields: {
        file: { url: string },
        title: string
      },
      sys: { id: string, createdAt: contentful.EntryFieldTypes.Date }
    };
  };
  sys: {
    createdAt: string;
    id: string
  };
  contentTypeId?: string; 
}

export type ContactEntrySkeleton = {
  contentTypeId: "contact"
  fields: {
    title: contentful.EntryFieldTypes.Text
    content: contentful.EntryFieldTypes.RichText
    phone: contentful.EntryFieldTypes.Text
  },
  sys: { id: string, createdAt: contentful.EntryFieldTypes.Date },
  query: {content_type: string, select: Array<string>}

}