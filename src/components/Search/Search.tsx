import { useState } from 'react';
import { SearchSvg } from '@/assets/icons';

interface SearchProps {
  onSearch: (name: string) => void;
}

export const Search = ({ onSearch }: SearchProps) => {
  const [userName, setUserName] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => setUserName(event.target.value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (userName.trim() !== '') {
      onSearch(userName);
    }
  };

  return (
    <form
      className="mt-8 w-full max-w-lg overflow-hidden rounded-2xl bg-dark-grayish-blue focus-within:outline focus-within:outline-2 focus-within:outline-light-blue"
      onSubmit={handleSubmit}
    >
      <label className="flex w-full items-center  p-4">
        <i className="inline-block size-6">
          <SearchSvg />
        </i>
        <input
          className="flex-1 appearance-none bg-dark-grayish-blue pl-4 text-lightest-blue caret-light-blue outline-none"
          name="username"
          type="search"
          placeholder="username"
          autoComplete="nickname"
          value={userName}
          onChange={handleChange}
        />
      </label>
    </form>
  );
};
