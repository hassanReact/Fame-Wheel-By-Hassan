"use client"
import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"

interface Props {
    title: string
    description: string
    image: string
}

export default function ServiceCard({description, title, image}: Props) {
  return (
    <Card className="group overflow-hidden">
      <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <div className="w-full sm:w-auto flex justify-center">
          <Image
            src={image}
            alt={title}
            width={128}
            height={96}
            className="object-contain w-24 h-24 sm:w-32 sm:h-24 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-semibold line-clamp-2">{title}</h2>
          <p className="text-gray-600 text-sm sm:text-base line-clamp-2">{description}</p>
          <Link 
            href="/sell-car" 
            className="text-red-600 hover:text-red-700 font-medium mt-1 inline-block transition-colors duration-200"
          >
            Explore More
          </Link>
        </div>
      </div>
    </Card>
  )
}