import BlockContent, {
  BlockContentProps,
} from "@sanity/block-content-to-react";
import markdownStyles from "./index.module.css";

type Props = {
  blocks: BlockContentProps;
};

const SanityBlock: React.FC<Props> = ({ blocks }) => (
  <div className={markdownStyles.markdown}>
    <BlockContent blocks={blocks} />
  </div>
);

export default SanityBlock;
