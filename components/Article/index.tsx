import { ReactNode } from "react";
import { imageBuilder } from "../../lib/api";

type Props = {
  coverImg?: any;
};

const Article: React.FC<Props> = ({ children, coverImg }) => (
  <div className="flex flex-wrap justify-center -m-4">
    <div className="p-4 w-full md:w-2/3">{children}</div>
    {coverImg && (
      <div className="p-4 w-full md:w-1/3 md:order-first">
        <img
          className="block w-full"
          style={{ maxWidth: "450px" }}
          src={imageBuilder.image(coverImg).url()!}
        />
      </div>
    )}
  </div>
);

export default Article;
