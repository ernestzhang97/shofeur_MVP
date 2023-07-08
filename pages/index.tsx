"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { NavBar, Features, Modal, ListCard, SearchBar, LocationCard, Footer } from '../components'
import { Fake, Rides } from '../util/Fake'
import chauffeur_stock from '../public/images/chauffeur_stock.webp'

export default function Home() {
  const [rentals, setRentals] = useState<Array<Rides>>([]);
  const [accountModal, setAccountModal] = useState<boolean>(false);

  useEffect(() => {
    const rentalsArr: Rides[] = Fake.sort((obj1: Rides, obj2:Rides) => obj2.rating - obj1.rating);
    setRentals(rentalsArr.slice(0,6));
  },[])

  const onButtonClick = (e: React.MouseEvent<Element>) => {
    setAccountModal(!accountModal)
  }

  return (
    <div
      className="flex flex-col relative flex-wrap justify-center overflow-scroll"
      onClick={accountModal ? onButtonClick: undefined}
    >
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Shofeur Challenge</title>
      </Head>

    {accountModal && <Modal></Modal>}

      <div
        className={`${accountModal ? 'opacity-50' : ''}`}
        onClick={accountModal ? onButtonClick : undefined}
      >
        <NavBar onButtonClick={onButtonClick}/>

        <div className="flex relative items-center justify-center max-h-[45rem] min-h-[10rem] overflow-hidden">
          <Image
            src={chauffeur_stock}
            alt={"chauffeur_stock_image"}
            style={{width: '100%', height: '100%', objectFit: "fill"}}
          />
          <div className="flex flex-col absolute">
            <p className="text-center mt-4 mb-4 text-4xl text-white font-bold">
              Chauffeured reservations made simple
            </p>
            <SearchBar/>
          </div>
        </div>

        <div className="flex flex-col h-screen max-h-[60rem] justify-start items-center mt-6">
          <p className="ml-4 mt-4 text-xl font-bold">Favorite Rentals Near Los Angeles, CA</p>
          <div className="flex flex-row flex-wrap mt-5 max-w-screen-xl min-h-96 min-w-80 justify-center overflow-y-auto [&::-webkit-scrollbar]:hidden">
            {rentals.map((obj: Rides) => <ListCard key={obj?.id} rental={obj} />)}
          </div>
        </div>

        <div className="flex flex-col h-screen max-h-[40rem] min-h-80 min-w-80 justify-start items-center bg-orange-700">
          <Features/>
        </div>

        <div className="flex flex-col h-[40rem] min-h-[10em] max-h-[70rem] justify-start items-center">
          <p className="ml-4 mt-4 text-xl font-bold">Visit These Popular Attractions Near You</p>
          <div className="flex flex-row flex-wrap mt-5 max-w-screen-xl justify-center overflow-y-auto [&::-webkit-scrollbar]:hidden">
            {[1, 2, 3, 4, 5, 6].map((num) => <LocationCard key={num}/>)}
          </div>
        </div>

        <div className="flex flex-col min-h-[20em] max-h-[60rem] justify-center items-center bg-neutral-500">
          <p className="text-xl font-bold">Interested? Join Our Newsletter</p>
          <label>
            <input
              className="min-w-[20em] placeholder: text-center"
              placeholder={'Enter your email address'}
            ></input>
          </label>
          <button className="rounded-md border-2 border-gray-500 w-20 shadow mt-5">Subscribe</button>
        </div>

        <div className="flex flex-col h-20 max-h-[60rem] w-50 mt-5">
          <Footer/>
        </div>

      </div>
    </div>
  )
}