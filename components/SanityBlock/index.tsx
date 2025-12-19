import { PortableText, PortableTextComponents } from "@portabletext/react";
import markdownStyles from "./index.module.css";
import { imageBuilder } from "../../lib/api";

type Props = {
  blocks: any;
  imgLeft?: boolean;
};

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          src={imageBuilder.image(value).url()}
          alt={value.alt || " "}
          loading="lazy"
        />
      );
    },
    youtube: ({ value }: { value: any }) => {
      const { url } = value;
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
    <PortableText value={blocks} components={components} />
  </div>
);

export default SanityBlock;
