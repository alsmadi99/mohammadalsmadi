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

// GitHub API response types
export type GitHubPullRequest = {
  html_url: string;
  merged_at: string | null;
};

export type GitHubIssue = {
  title: string;
  html_url: string;
  repository_url: string;
  closed_at: string | null;
  pull_request: GitHubPullRequest;
};

export type GitHubContributionsResponse = {
  items: Array<GitHubIssue>;
};

export type GitHubRepoDetails = {
  full_name: string;
  stargazers_count: number;
  forks_count: number;
};
