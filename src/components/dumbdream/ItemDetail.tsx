'use client'

import { FC } from "react"
import { FashionitemDocument } from "../../../prismicio-types"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"

type Props = {
  item: FashionitemDocument<string>
}

export const ItemDetail: FC<Props> = ({ item }) => {
  return (
    <div className="grid grid-cols-2 min-h-[calc(100vh-200px)]">
      <Accordion
        type="multiple"
        className="mx-auto w-[80%] mt-10 "
        defaultValue={["item-1", "item-2"]}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>PRODUCT NAME</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-center">
            <h1 className="text-2xl font-bold">{item.data.title ?? ""}</h1>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Description</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-center">
            <p className="font-bold">
              Men&apos;s 3b Football Long Sleeve V-neck T-shirt in Black/anthracite
            </p>
            <p>
              3B Football Long Sleeve V-Neck T-Shirt in black and anthracite dry jersey
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>SIZE: (FR/EUR)</AccordionTrigger>
          <AccordionContent className="px-5">
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="S" id="S" />
                <Label htmlFor="S">S</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="M" id="M" />
                <Label htmlFor="M">M</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="L" id="L" />
                <Label htmlFor="L">L</Label>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Product details</AccordionTrigger>
          <AccordionContent className="px-5" >
            <div className="flex flex-col gap-1">
              <p>• Dry jersey</p>
              <p>• V-neck</p>
              <p>• Dropped shoulders</p>
              <p>• Long sleeves</p>
              <p>• Gathered cuffs</p>
              <p>• 3B sports icon artwork printed and embroidered at front and back</p>
              <p>• Made in Portugal</p>
              <p>Main material: 100% cotton</p>
              <p>Collar: 95% cotton, 5% elastane</p>
              <p>Cuffs: 100% cotton</p>
              <p>Embroidery: 100% polyester</p>
              <p>Application: 100% polyester</p>
              <p>Product ID: 857085TTVQ61066</p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Product Care</AccordionTrigger>
          <AccordionContent className="px-5">
            <p>
              Wash Max 30°C - Mild Process. Clean Separately. Clean Inside Out. Do Not Bleach. Do Not Tumble Dry. Line Dry In The Shade. Iron At Maximum Temperature 120°C. Iron Inside Out. Do Not Iron The Print. Do Not Dry Clean.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Sustainability </AccordionTrigger>
          <AccordionContent className="px-5">
            <p>
              Sustainability approach: Sustainability and innovation are integral to our brand values and creative vision.
              We are committed to concrete actions with quantified objectives to guide our journey towards a lower environmental and social impact.
              Our work is backed by figures, progress reports, and key performance indicators that help us develop our roadmap, decisions, and actions in our offices, stores, fashion shows, and supply chains.
            </p>
          </AccordionContent>
        </AccordionItem>
        <hr />
      </Accordion>
      <div className="h-full flex justify-end">
        <img
          className="border border-white h-full w-auto object-cover"
          src={item.data.image.url ?? ""}
          alt={item.data.title ?? ""}
        />
      </div>
    </div >
  )

}