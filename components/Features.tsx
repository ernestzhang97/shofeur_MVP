import React from 'react'
import Image from 'next/image'
import chauffeur_stock2 from '../public/images/chauffeur_stock2.jpg'

export default function Features(): JSX.Element {
  return (
    <>
      <p className="ml-4 mt-4 text-4xl font-bold">Features</p>
      <div className="flex flex-row flex-wrap mt-5 max-w-screen-xl justify-between">
        <div className="flex flex-row">
          <div className="mr-6 overflow-clip max-w-sm max-h-sm min-w-xs min-h-xs ">
            <h1 className="font-bold text-2xl">Search</h1>
            <p className="text-l">Search for an assortment of rental vehicles such as party bus, limousine</p>
            <button className="mt-4 text-white">{'Start your search ->'}</button>
          </div>
          <div className="mr-6 overflow-clip max-w-sm max-h-sm min-w-xs min-h-xs">
            <h1 className="font-bold text-2xl">Become a Driver</h1>
            <p>Grow your business by listing your services on our app</p>
            <button className="mt-4 text-white">{'Log in to start listing ->'}</button>
          </div>
          <div className="overflow-clip max-w-sm max-h-sm min-w-xs min-h-xs">
            <h1 className="font-bold text-2xl">Enjoy the Shofeur Experience</h1>
            <p className="text-l">Get the app for the best Shofeur has to offer</p>
            <button className="mt-4 text-white">{'Get the app ->'}</button>
          </div>
        </div>
      </div>
      <Image
        src={chauffeur_stock2}
        alt="chauffeur_stock_image_2"
        style={{width: '30em', marginTop:"20px"}}
      />
    </>
  )
}