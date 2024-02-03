import { useEffect, useState } from 'react';
import { Repository, User } from '@/types/api';

interface UserData {
  user: User;
  repositories: Repository[];
}

export const useFetchData = (username: string) => {
  const [data, setData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`);

        const repositoriesResponse = await fetch(`https://api.github.com/users/${username}/repos`);

        if (!userResponse.ok || !repositoriesResponse.ok) {
          throw new Error(`Error to fetch data: ${userResponse.status || repositoriesResponse.status}`);
        }

        const user = await userResponse.json();
        const repositories = await repositoriesResponse.json();

        setData({ user, repositories });
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message || `Error getting data`);
        }
      }
    };

    fetchData();
  }, [username]);

  return { data, error };
};
