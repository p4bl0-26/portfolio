"use client";

import { useEffect, useState } from "react";
import { fetchGithubRepos, type GithubRepo } from "@/lib/github";
import { META } from "@/constants/meta";

interface GithubReposState {
  repos: GithubRepo[];
  loading: boolean;
  error: string | null;
}

export function useGithubRepos(): GithubReposState {
  const [state, setState] = useState<GithubReposState>({
    repos: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    fetchGithubRepos()
      .then((repos) => {
        if (!cancelled) {
          setState({ repos, loading: false, error: null });
        }
      })
      .catch((err: Error) => {
        if (!cancelled) {
          setState({ repos: [], loading: false, error: err.message });
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
