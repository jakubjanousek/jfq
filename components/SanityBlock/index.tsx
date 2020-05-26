import BlockContent, {
  BlockContentProps,
} from "@sanity/block-content-to-react";
import markdownStyles from "./index.module.css";

type Props = {
  blocks: BlockContentProps;
  imgLeft?: boolean;
};

const SanityBlock: React.FC<Props> = ({ blocks, imgLeft }) => (
  <div className={markdownStyles.markdown}>
    <BlockContent
      blocks={blocks}
      projectId={process.env.NEXT_EXAMPLE_CMS_SANITY_PROJECT_ID}
      dataset="production"
    />
  </div>
);

export default SanityBlock;
