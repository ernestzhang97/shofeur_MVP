import React from 'react'

export default function Footer(): JSX.Element {
  return (
    <div className="flex flex-row justify-between">
      <div className="ml-3">{'Social Media Icon Location'}</div>
      <div className="w-auto flex">
        <span className="mr-4">
          <button>{'Contact Us'}</button>
        </span>
        <span className="mr-4">
          <button>{'Blog'}</button>
        </span>
        <span className="mr-4">
          <button>{'Help Center'}</button>
        </span>
        <span className="mr-4">
          <button>{'Private Policy'}</button>
        </span>
        <span className="mr-4">
          <button>{'Terms and Condition'}</button>
        </span>
      </div>
    </div>
  )
}