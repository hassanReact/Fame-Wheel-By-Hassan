import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"


interface Props {
    title: string
    description: string
    image: string
}

export default function ServiceCard({description, title,image} : Props) {
  return (
    <Card className="p-6 flex items-center gap-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
        <Image
          src={image}
          alt="Car with keys"
          width={128}
          height={96}
          className="object-contain"
        />
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-gray-600">{description}.</p>
        <Link href="/sell-car" className="text-red-600 hover:text-red-700 font-medium mt-1">
          Explore More
        </Link>
      </div>
    </Card>
  )
}
