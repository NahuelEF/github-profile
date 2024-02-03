import { ChieldAltSvg, NestingSvg, StarSvg } from '@/assets/icons';
import { Repository } from '@/types/api';

interface RepoDetailsProps {
  repository: Repository;
}

interface ItemProps {
  children: React.ReactNode;
  icon?: JSX.Element;
}

type Option = 'year' | 'month' | 'day';

const formatTime = (time: number, str: Option): string => {
  return time > 1 ? `${time} ${str}s ago` : `${time} ${str} ago`;
};

const calculateLastUpdate = (lastUpdateDate: Date): string => {
  const today = new Date();
  const timeDifference = today.getTime() - lastUpdateDate.getTime();

  const years = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));
  if (years > 0) {
    return formatTime(years, 'year');
  }

  const months = Math.floor(timeDifference / (30 * 24 * 60 * 60 * 1000));
  if (months > 0) {
    return formatTime(months, 'month');
  }

  const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
  if (days > 0) {
    return formatTime(days, 'day');
  }

  return 'now';
};

export const RepoDetails = ({ repository }: RepoDetailsProps) => {
  const formattedForksCount = new Intl.NumberFormat('en-US').format(repository.forks_count);

  const date = new Date(repository.updated_at);

  const lastUpdate: string = calculateLastUpdate(date);

  return (
    <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
      <article className="space-y-4 rounded-2xl bg-gradient-to-r from-darkest-blue to-dark-blue-gray p-4">
        <h2 className="text-xl">{repository.name}</h2>
        <p className="text-pretty text-base">{repository.description}</p>
        <ul className="flex flex-wrap items-center gap-4 text-base">
          {repository.license && <ListItem icon={<ChieldAltSvg />}>{repository.license.spdx_id}</ListItem>}
          <ListItem icon={<NestingSvg />}>{formattedForksCount}</ListItem>
          <ListItem icon={<StarSvg />}>{repository.stargazers_count}</ListItem>
          <ListItem>
            <time className="text-xs" dateTime={`${repository.updated_at}`}>
              {`updated ${lastUpdate}`}
            </time>
          </ListItem>
        </ul>
      </article>
    </a>
  );
};

const ListItem = ({ children, icon }: ItemProps) => (
  <li className="flex items-center gap-1">
    {icon && <i className="inline-block size-6">{icon}</i>}
    {children}
  </li>
);
