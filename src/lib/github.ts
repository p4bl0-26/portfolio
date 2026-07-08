import { FEATURED_REPOS, HIDDEN_REPOS } from "@/constants/github";

export interface GithubRepo {
  id: number | string;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics?: string[];
  updated_at?: string;
  fork?: boolean;
  private?: boolean;
  owner: {
    login: string;
  };
}

export interface GithubUser {
  login: string;
  name: string;
  public_repos: number;
  followers: number;
  following: number;
}

export async function fetchGithubRepos(): Promise<GithubRepo[]> {
  // Fetch all featured repos in parallel
  const fetchPromises = FEATURED_REPOS.map(async (featured) => {
    try {
      const res = await fetch(
        `https://api.github.com/repos/${featured.owner}/${featured.repo}`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        }
      );

      if (!res.ok) {
        throw new Error(`Failed to fetch ${featured.owner}/${featured.repo}`);
      }

      const data = await res.json();
      return data as GithubRepo;
    } catch (err) {
      // Graceful fallback on error/rate-limit
      return {
        id: `fallback-${featured.repo}`,
        name: featured.repo,
        full_name: `${featured.owner}/${featured.repo}`,
        description: featured.fallback.description,
        html_url: `https://github.com/${featured.owner}/${featured.repo}`,
        stargazers_count: 0,
        forks_count: 0,
        language: featured.fallback.language,
        owner: { login: featured.owner },
      } as GithubRepo;
    }
  });

  const repos = await Promise.all(fetchPromises);

  // Filter out any hidden repos (just in case) and return in the exact order of FEATURED_REPOS
  return repos.filter((repo) => !HIDDEN_REPOS.includes(repo.name));
}

export async function fetchGithubUser(
  username: string
): Promise<GithubUser> {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  });

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }

  return res.json();
}
