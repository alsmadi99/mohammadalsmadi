import { VITE_GITHUB_TOKEN } from "../config";

export const GITHUB_PRS_API_URL =
  "https://api.github.com/search/issues?q=is:pr+author:alsmadi99";

export const GET_GITHUB_REPO_DETAILS_API_URL = (repo: string) =>
  `https://api.github.com/repos/${repo}`;

const START_DATE = "2020-08-01";

export const getYearsOfExperience = (
  date = START_DATE,
  endDate?: string | null,
) => {
  const MILLISECONDS_IN_YEAR = 1000 * 60 * 60 * 24 * 365;
  const MILLISECONDS_IN_MONTH = MILLISECONDS_IN_YEAR / 12;

  const startDate = new Date(date).getTime();
  const currentDate = (endDate ? new Date(endDate) : new Date()).getTime();
  const experienceInMilliseconds = currentDate - startDate;

  if (experienceInMilliseconds < MILLISECONDS_IN_MONTH * 9) {
    const months = Math.max(
      1,
      Math.floor(experienceInMilliseconds / MILLISECONDS_IN_MONTH),
    );
    return `${months} month${months > 1 ? "s" : ""}`;
  }

  const totalMonths = experienceInMilliseconds / MILLISECONDS_IN_MONTH;
  let years = Math.floor(totalMonths / 12);

  const remainingMonths = Math.floor(totalMonths % 12);
  if (remainingMonths >= 6) {
    years++;
  }

  const yearStr = `${years} year${years !== 1 ? "s" : ""}`;

  return yearStr;
};

export const formatNumber = (value: number) => {
  if (value < 1000) {
    return value;
  }

  if (value < 1000000) {
    return `${(value / 1000).toFixed(1)}k`;
  }

  return `${(value / 1000000).toFixed(1)}m`;
};

export const fetchContributions = () =>
  fetch(GITHUB_PRS_API_URL, {
    headers: {
      "User-Agent": "alsmadi99",
      accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  }).then((response) => response.json());

export const fetchRepoDetails = (repo: string) =>
  fetch(GET_GITHUB_REPO_DETAILS_API_URL(repo), {
    headers: {
      "User-Agent": "alsmadi99",
      accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      Authorization: `Token ${VITE_GITHUB_TOKEN}`,
    },
  }).then((response) => response.json());
