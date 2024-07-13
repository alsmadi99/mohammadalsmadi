import { useState, useEffect } from "react";
import { fetchContributions, fetchRepoDetails } from "../utils";
import { ContributionsHashMap } from "../types";

export const useContributions = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [latestContributions, setLatestContributions] =
    useState<ContributionsHashMap>({});

  useEffect(() => {
    const getLatestContribution = async () => {
      try {
        const contributionsData = await fetchContributions();
        const filteredContributions = contributionsData.items.filter(
          (item: any) => !item.repository_url.includes("smadixd"),
        );

        const contributionsHashMap: ContributionsHashMap = {};
        for (const item of filteredContributions) {
          const repo = item.repository_url.split("repos/").pop().toLowerCase();
          const link = item.html_url.split("/pull")[0];

          if (!contributionsHashMap[repo]) {
            const repoDetails = await fetchRepoDetails(repo);
            contributionsHashMap[repo] = {
              name: repoDetails.name,
              link: link,
              items: [],
              details: {
                stars: repoDetails.stargazers_count,
                forks: repoDetails.forks_count,
              },
            };
          }

          if (
            contributionsHashMap[repo].items.length < 3 &&
            ((!item.closed_at && !item.pull_request.merged_at) ||
              (!!item.closed_at && !!item.pull_request.merged_at))
          ) {
            contributionsHashMap[repo].items.push({
              name: item.title,
              link: item.pull_request.html_url,
              isMerged: !!item.pull_request.merged_at,
            });
          }
        }

        setLatestContributions(contributionsHashMap);
      } catch (error) {
        console.error("Failed to fetch latest contributions:", error);
      }
    };

    getLatestContribution();
  }, []);

  useEffect(() => {
    // Debounce the loading state
    if (Object.keys(latestContributions).length > 0) {
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    }
  }, [latestContributions]);

  return { latestContributions, isLoading };
};
