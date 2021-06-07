import BlockContent, {
  BlockContentProps,
} from "@sanity/block-content-to-react";
import markdownStyles from "./index.module.css";

type Props = {
  blocks: BlockContentProps;
  imgLeft?: boolean;
};

const serializers = {
  types: {
    youtube: ({ node }: { node: any }) => {
      const { url } = node;
      return (
        <iframe
          loading="lazy"
          src={url}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    },
  },
};

const SanityBlock: React.FC<Props> = ({ blocks, imgLeft }) => (
  <div className={markdownStyles.markdown}>
    <BlockContent
      projectId={process.env.NEXT_EXAMPLE_CMS_SANITY_PROJECT_ID}
      dataset="production"
      {...{ blocks, serializers }}
    />
  </div>
);

export default SanityBlock;
