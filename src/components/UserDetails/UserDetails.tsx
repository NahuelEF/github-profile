import { User } from '@/types/api';

interface UserDetailsProps {
  user: User | undefined;
}

type Details = Array<[string, string | number | undefined]>;

export const UserDetails = ({ user }: UserDetailsProps) => {
  const details: Details = [
    ['Followers', user?.followers],
    ['Following', user?.following],
    ['Location', user?.location],
  ];

  return (
    <>
      <div className="mb-6 flex flex-wrap items-start gap-x-4">
        <img
          className="-mt-12 size-32 rounded-3xl border-8 border-dark-grayish-blue"
          width="128px"
          height="128px"
          src={user?.avatar_url}
          alt={user?.name}
        />
        <ul className="mt-4 flex flex-1 flex-wrap gap-4">
          {details.map(([title, detail]) => (
            <ListItem key={title} title={title}>
              {detail}
            </ListItem>
          ))}
        </ul>
      </div>
      <a
        className="text-[2rem] font-bold hover:underline"
        href={user?.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {user?.name}
      </a>
      <p>{user?.bio}</p>
    </>
  );
};

interface ListItemProps {
  title: string;
  children: React.ReactNode;
}

const ListItem = ({ title, children }: ListItemProps) => (
  <li className=" relative flex items-center rounded-2xl bg-darkest-blue p-4 text-light-grayish-blue">
    {title} <span className="mx-4 inline-block h-[150%] w-[1px] bg-light-grayish-blue" aria-hidden="true"></span>{' '}
    <span className="text-lightest-blue">{children}</span>
  </li>
);
