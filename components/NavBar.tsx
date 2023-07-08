import React, { useState, useEffect } from 'react'
import { SearchBar } from './'

type NavBarProps = {
  onButtonClick: (params: React.MouseEvent<Element>) => any;
}

export default function NavBar({ onButtonClick }: NavBarProps): JSX.Element {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [searchBar, setSearchBar] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const threshold = 200;

      setIsSticky(position > threshold);
      setSearchBar(position > threshold);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  }, []);

  return (
    <nav className={`${isSticky ? 'fixed top-0 bg-white shadow' : 'bg-white'} w-full z-10`}>
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between">
        <h1 className="text-2xl font-bold">Shofeur</h1>
        <div className="pr-20 min-w-[30em]">
          {searchBar && <SearchBar/>}
        </div>
        <div>
          <button
            className="rounded-md border-2 border-gray-500 w-20 shadow mr-5"
            onClick={onButtonClick}
          >
            Signup
          </button>
          <button
            className="rounded-md border-2 border-gray-500 w-20 shadow"
            onClick={onButtonClick}
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  )
}