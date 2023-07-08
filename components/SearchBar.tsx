import React from 'react'

export default function SearchBar(): JSX.Element {
  return(
    <div>
      <label>
        <input
          className="text-l font-small w-full text-start resize-none border-2 border-neutral-400 placeholder:pl-[5px]"
          placeholder="Enter Pick Up Location"
        ></input>
      </label>
    </div>
  )
}