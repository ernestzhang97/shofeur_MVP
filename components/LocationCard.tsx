import React from 'react'
import Image from 'next/image'
import SantaMonica from '../public/images/SantaMonica.jpeg'

export default function LocationCard(): JSX.Element {
  return (
    <div className="flex justify-evenly ml-5 mt-5">
      <div className="w-80 h-45 max-w-screen-md rounded overflow-hidden shadow-lg">
        <Image
          src={SantaMonica}
          alt="SantaMonica"
          width={0}
          height={0}
          style={{width: '100%', height:'85%', objectFit: "cover"}}
        />
        <p className="text-center">Santa Monica</p>
      </div>
    </div>
  )
}