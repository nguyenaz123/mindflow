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
      {/* <div className="w-screen h-screen overflow-hidden">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/mrHGKmwfNYQ?autoplay=1&mute=1&controls=0&loop=1&playlist=mrHGKmwfNYQ&modestbranding=1&rel=0&iv_load_policy=3`}
          title="Clean Fullscreen YouTube Video"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div> */}
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

      <div className='grid grid-cols-1 md:grid-cols-3 '>
        {dumbDreamItems.map((dumbDreamItem) => (
          <div key={dumbDreamItem.uid} className='border-2 border-black '>
            <img src={dumbDreamItem.data?.image?.url || ""} />
          </div>
        ))}
      </div>
    </div>

  )
}
