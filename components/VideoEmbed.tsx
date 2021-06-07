type Props = { src: string; className?: string };

const VideoEmbed: React.FC<Props> = ({ src, className }) => (
  <iframe
    className={className}
    src={src}
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    loading="lazy"
  ></iframe>
);

export default VideoEmbed;
