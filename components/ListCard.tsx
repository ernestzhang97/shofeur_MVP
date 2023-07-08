import { useState } from 'react'
import Image from 'next/image'
import { Rides } from '../util/Fake'
import { StarRating } from './'


type ListCardProps = {
  rental: Rides
}

export default function ListCard({ rental }: ListCardProps): JSX.Element {
  return (
    <div className="flex justify-evenly ml-5 mt-5 w-[25em]">
      <div className="w-80 h-80 min-w-[12em] min-h-[16em] max-w-screen-sm rounded shadow-lg">
        <Image
          src={rental.images[0]}
          alt="rental"
          width={150}
          height={150}
          style={{width: '100%', height:'50%', objectFit: "cover"}}
        />
        <div className="font-bold text-xl mt-2 mb-2 ml-2">{rental.title}</div>
        <div className="flex w-auto justify-between px-6 pt-4 pb-2">
          <div className="text-gray-700 text-base">{`${rental.reviews} reviews`}</div>
          <StarRating rating={rental.rating}></StarRating>
        </div>
        <div className="flex justify-between px-7 pt-5 pb-3">
          <div className="text-gray-700 text-base">{`${rental.occupancy} occupancy`}</div>
          <div className="text-gray-700 text-base">{rental.rate}</div>
        </div>
      </div>
    </div>
  )
}