export type PublicationVenueType = {
  type: "Q1" | "Q2" | "Q3" | "Q4" | "Conf." | "A*";
  text: string;
};

export const A_STAR_ALIASES = [
  "CVPR",
  "ICCV",
  "ECCV",
  "NeurIPS",
  "ICML",
  "ICLR",
  "WACV",
  "AAAI",
  "IJCAI",
];
