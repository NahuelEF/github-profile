import { Suspense, useState } from 'react';
import { RepoDetails, Search, UserDetails } from './components';
import { useFetchData } from './hooks/useFetchData';
import { User } from './types/api';
import './App.css';

const App = () => {
  const [userName, setUserName] = useState('github');
  const { data, error } = useFetchData(userName);

  const handleSearchUser = (name: string): void => {
    setUserName(name);
  };

  return (
    <>
      <header className="flex min-h-60 items-start justify-center bg-[url(./assets/hero-image-github-profile.png)] bg-cover bg-center bg-no-repeat">
        <Search onSearch={handleSearchUser} />
      </header>
      <main className="container mx-auto px-8 text-lightest-blue xl:px-28">
        {error ? (
          <p className="text-center">{error}</p>
        ) : (
          <Suspense fallback={<p>Loading user data...</p>}>
            <section className="w-full">
              <UserDetails user={data?.user as User} />
            </section>
            <Suspense fallback={<p>Loading repository data...</p>}>
              <section className="w-full">
                <div className="my-7 grid grid-cols-auto-fill items-start gap-8">
                  {data?.repositories.slice(0, 4).map((repository) => {
                    return <RepoDetails repository={repository} key={repository.id} />;
                  })}
                </div>
                <p className="mb-5 text-center">View all respositories</p>
              </section>
            </Suspense>
          </Suspense>
        )}
      </main>
    </>
  );
};

export default App;
