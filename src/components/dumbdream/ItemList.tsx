'use client'
import Autoplay from "embla-carousel-autoplay"
import Link from 'next/link'
import { FC, useRef } from 'react'
import { FashionitemDocument } from '../../../prismicio-types'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
type Props = {
  dumbDreamItems: FashionitemDocument<string>[]
}

const navLinks = [
  { href: "/", label: "T-shirt" },
  { href: "/shopifyProducts", label: "New" },
  { href: "/table", label: "Shirt" },
  { href: "/ticket", label: "Jean" },
  { href: "/react-hook-form", label: "Short" },
];
export const ItemList: FC<Props> = ({ dumbDreamItems }) => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )
  return (
    <div className='flex flex-col'>
      <div className="relative w-full h-[100vh] overflow-hidden brightness-80">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover xl:object-contain"
        >
          <source src="/videos/myVideo.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="grid md:grid-cols-3 items-center py-3">
        <h1 className=" text-center
      text-5xl md:text-7xl font-extrabold
      uppercase tracking-tight
      text-white
      drop-shadow-[0_4px_2px_rgba(0,0,0,0.7)]
      [text-shadow:_3px_3px_0_#000,6px_6px_0_#ffff]
      font-['Impact','Anton','Oswald',sans-serif]
    ">
          We make the couture
        </h1>
        <img src="/images/logo.png" className=" 2xl:w-1/3 justify-self-center" />
        <h1 className=" text-center
      text-5xl md:text-7xl font-extrabold
      uppercase tracking-tight
      text-white
      drop-shadow-[0_4px_2px_rgba(0,0,0,0.7)]
      [text-shadow:_3px_3px_0_#000,6px_6px_0_#ffff]
      font-['Impact','Anton','Oswald',sans-serif]
    ">
          You make the trend
        </h1>
      </div>
      <Carousel
        plugins={[plugin.current]}
      >
        <CarouselContent className="w-fit">
          <CarouselItem className="basis-1/2">
            <img src="/images/man1.png" />
          </CarouselItem>
          <CarouselItem className="basis-1/2">
            <img src="/images/man2.png" />
          </CarouselItem>
          <CarouselItem className="basis-1/2">
            <img src="/images/man3.png" />
          </CarouselItem>
          <CarouselItem className="basis-1/2">
            <img src="/images/man4.png" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className='flex w-full  justify-between'>
        {navLinks.map((link) => (
          <Link className='text-center text-xl hover:text-2xl  px-5' href={link.href} key={link.href}>{link.label}</Link>
        )
        )}

      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 2xl:gap-y-5'>
        {dumbDreamItems.map((dumbDreamItem) => (
          <div key={dumbDreamItem.uid} className='border-2 border-black justify-items-center'>
            <img src={dumbDreamItem.data?.image?.url || ""} />
          </div>
        ))}
      </div>
    </div>

  )
}
