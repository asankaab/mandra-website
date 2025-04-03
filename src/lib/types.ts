
import * as contentful from 'contentful';

export type HomepageEntrySkeleton = {
  contentTypeId: string
  fields: {
    mainHeading: contentful.EntryFieldTypes.Text
    subHeading: contentful.EntryFieldTypes.Text
    description: contentful.EntryFieldTypes.Text
    social: contentful.EntryFieldTypes.Array<contentful.EntryFieldTypes.Symbol>
  }
}