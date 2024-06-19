export const GITHUB_PRS_API_URL =
  'https://api.github.com/search/issues?q=is:pr+author:smadixd';

export const GET_GITHUB_REPO_DETAILS_API_URL = (repo) =>
  `https://api.github.com/repos/${repo}`;

const START_DATE = '2020-08-01';

export const getYearsOfExperience = (date = START_DATE, endDate = '') => {
  const MILLISECONDS_IN_YEAR = 1000 * 60 * 60 * 24 * 365;
  const startDate = new Date(date);
  const currentDate = endDate ? new Date(endDate) : new Date();
  const experienceInMilliseconds = currentDate - startDate;
  const experienceInYears = experienceInMilliseconds / MILLISECONDS_IN_YEAR;
  const experienceInWholeYears = Math.ceil(experienceInYears);

  return `${experienceInWholeYears} year${
    experienceInWholeYears > 1 ? 's' : ''
  }`;
};

export const formatNumber = (number) => {
  if (number < 1000) {
    return number;
  }

  if (number < 1000000) {
    return `${(number / 1000).toFixed(1)}k`;
  }

  return `${(number / 1000000).toFixed(1)}m`;
};
