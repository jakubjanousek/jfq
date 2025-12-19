import type { YouTubeEmbed as YtProps } from "@next/third-parties/dist/types/google";
import { YouTubeEmbed } from "@next/third-parties/google";

type Props = { src: string; className?: string };

const VideoEmbed: React.FC<YtProps> = (props) => (
  <div className="rounded-lg overflow-hidden">
    <YouTubeEmbed {...props} />
  </div>
);

export default VideoEmbed;
