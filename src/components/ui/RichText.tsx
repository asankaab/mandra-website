import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, Node, NodeData } from "@contentful/rich-text-types";
import Heading2 from "./Heading2";
import Paragraph from "./Paragraph";
import ImageLoader from "./ImageLoader";

export default function RichText({ document }: { document: Document }) {

    const richTextOptions: NodeData = {
        renderNode: {
          [BLOCKS.HEADING_1]: (node: Node, children: React.ReactNode) => <Heading2>{children}</Heading2>,
          [BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => <Paragraph>{children}</Paragraph>,
          [BLOCKS.EMBEDDED_ASSET]: (node: Node, children: React.ReactNode) => 
              <ImageLoader fit="fill"
              src={node.data.target.fields.file.url}
              alt={node.data.target.fields.title} 
              width={800}
              height={200}
              />
        },
        renderText: (text: string) => text.replace('!', '?'),
      };

    return (
        <>
            {documentToReactComponents(document, richTextOptions)}
        </>
    )
}