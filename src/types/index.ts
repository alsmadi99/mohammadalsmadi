export type ContributionItem = {
  name: string;
  link: string;
  isMerged: boolean;
};

export type Contribution = {
  name: string;
  link: string;
  items: Array<ContributionItem>;
  details: {
    stars: number;
    forks: number;
  };
};

export type ContributionsHashMap = {
  [repo: string]: Contribution;
};
