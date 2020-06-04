const backgrounds = ["bg1", "bg2", "bg3", "bg4"];

export const getRandomPandulak = () =>
  backgrounds[Math.floor(Math.random() * backgrounds.length)];
