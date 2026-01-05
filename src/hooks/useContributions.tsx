import { useState, useEffect } from "react";
import { fetchContributions, fetchRepoDetails } from "../utils";
import {
  ContributionsHashMap,
  GitHubContributionsResponse,
  GitHubIssue,
  GitHubRepoDetails,
} from "../types";

export const useContributions = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [latestContributions, setLatestContributions] =
    useState<ContributionsHashMap>({});
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getLatestContribution = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const contributionsData =
          (await fetchContributions()) as GitHubContributionsResponse;

        if (!contributionsData || !contributionsData.items) {
          throw new Error("Invalid response from GitHub API");
        }

        const filteredContributions = contributionsData.items.filter(
          (item: GitHubIssue) => !item.repository_url.includes("alsmadi99"),
        );

        const contributionsHashMap: ContributionsHashMap = {};
        for (const item of filteredContributions) {
          try {
            const repo = item.repository_url.split("repos/").pop()?.toLowerCase();
            if (!repo) continue;

            const link = item.html_url.split("/pull")[0];

            if (!contributionsHashMap[repo]) {
              try {
                const repoDetails =
                  (await fetchRepoDetails(repo)) as GitHubRepoDetails | null;
                contributionsHashMap[repo] = {
                  // Display as `org/repo` in the UI (falls back to the URL-derived value).
                  name: (repoDetails?.full_name || repo) as string,
                  link: link,
                  items: [],
                  details: {
                    stars: Number(repoDetails?.stargazers_count ?? 0),
                    forks: Number(repoDetails?.forks_count ?? 0),
                  },
                };
              } catch (repoError) {
                // If repo details fail, still create entry with basic info
                contributionsHashMap[repo] = {
                  name: repo,
                  link: link,
                  items: [],
                  details: {
                    stars: 0,
                    forks: 0,
                  },
                };
              }
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
          } catch (itemError) {
            // Continue processing other items if one fails
            console.warn("Failed to process contribution item:", itemError);
          }
        }

        setLatestContributions(contributionsHashMap);
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "Failed to fetch latest contributions";
        console.error(errorMessage, error);
        setError(error instanceof Error ? error : new Error(errorMessage));
        setLatestContributions({});
      } finally {
        setIsLoading(false);
      }
    };

    getLatestContribution();
  }, []);

  return { latestContributions, isLoading, error };
};
