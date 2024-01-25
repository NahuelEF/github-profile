import { useState } from 'react';
import { SearchSvg } from '@/assets/icons';

export const Search = () => {
  const [userName, setUserName] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => setUserName(event.target.value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(userName);
  };

  return (
    <form className="mt-8 w-full max-w-md overflow-hidden rounded-2xl bg-dark-grayish-blue" onSubmit={handleSubmit}>
      <label className="flex w-full items-center  p-4">
        <i className="inline-block size-6">
          <SearchSvg />
        </i>
        <input
          className="flex-1 appearance-none bg-dark-grayish-blue pl-4 text-lightest-blue caret-light-blue outline-none"
          name="username"
          type="search"
          placeholder="username"
          value={userName}
          onChange={handleChange}
        />
      </label>
    </form>
  );
};
