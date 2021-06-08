export type SideImg = { src: string; width: number; height: number };

const sideImgs: Record<string, SideImg> = {
  vzducholod: { src: "/sidebg1.png", width: 440, height: 1336 },
  ryba: { src: "/sidebg2.png", width: 440, height: 1575 },
  chobotnica: { src: "/sidebg3.png", width: 440, height: 1083 },
  tukan: { src: "/sidebg4.png", width: 440, height: 1510 },
  dalekohlad: { src: "/sidebg5.png", width: 440, height: 1295 },
};

export default sideImgs;
