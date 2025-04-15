
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
  sys: contentful.EntitySys
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
  sys: contentful.EntitySys
}

export type AuthorEntrySkeleton = {
  contentTypeId: "author"
  fields: {
    name: contentful.EntryFieldTypes.Text
    bio: contentful.EntryFieldTypes.Text
    avatar: contentful.EntryFieldTypes.AssetLink
  },
  sys: contentful.EntitySys
}

export type ContactEntrySkeleton = {
  contentTypeId: "contact"
  fields: {
    title: contentful.EntryFieldTypes.Text
    content: contentful.EntryFieldTypes.RichText
    phone: contentful.EntryFieldTypes.Text
  },
  sys: contentful.EntitySys,
  query: {content_type: string, select: Array<string>}

}

export interface ServicesEntrySkeleton {
  contentTypeId: "style"
  fields: {
    title: contentful.EntryFieldTypes.Text
    description: contentful.EntryFieldTypes.Text
  },
  sys: contentful.EntitySys
  query: {content_type: string, select: Array<string>}
}

export interface TeamEntrySkeleton {
  contentTypeId: "teamMember"
  fields: {
    name: contentful.EntryFieldTypes.Text
    bio: contentful.EntryFieldTypes.Text
    avatar: contentful.EntryFieldTypes.AssetLink
    role: Array<contentful.EntryFieldTypes.Text>
  },
  sys: contentful.EntitySys
  query: {content_type: string, select: Array<string>}
}