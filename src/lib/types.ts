
import * as contentful from 'contentful';

export type HomepageEntrySkeleton = {
  contentTypeId: "homepage"
  fields: {
    mainHeading: contentful.EntryFieldTypes.Text
    subHeading: contentful.EntryFieldTypes.Text
    description: contentful.EntryFieldTypes.Text
    social: contentful.EntryFieldTypes.Array<contentful.EntryFieldTypes.Symbol>
    heroImages: Array<contentful.EntryFieldTypes.AssetLink>
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
  }
}