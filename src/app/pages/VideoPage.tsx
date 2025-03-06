import Image from "next/image"
import Link from "next/link"

const videos = [
  {
    id: "1",
    title: "Missed Car Inspection",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
  },
  {
    id: "2",
    title: "Best Car Inspection Service",
    videoUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/0.jpg",
  },
  {
    id: "3",
    title: "Famewheels Car Inspection",
    videoUrl: "https://www.youtube.com/embed/L_jWHffIx5E",
    thumbnail: "https://img.youtube.com/vi/L_jWHffIx5E/0.jpg",
  },
  {
    id: "4",
    title: "Car Inspections Before Purchase",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
    thumbnail: "https://img.youtube.com/vi/tgbNymZ7vqY/0.jpg",
  },
]

const VideoGallery = () => {
  return (
    <div className="p-4 sm:p-6 mx-4 sm:mx-8 md:mx-12 lg:mx-20">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 w-full sm:w-1/2">Browse Our Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <div key={video.id} className="relative rounded-lg overflow-hidden shadow-lg">
            <Link href={video.videoUrl} target="_blank" rel="noopener noreferrer">
              <div className="relative aspect-video">
                <Image
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center transition-opacity hover:bg-opacity-30">
                  <div className="bg-red-600 text-white p-2 sm:p-3 rounded-full flex items-center justify-center">
                    <span className="text-lg sm:text-xl">▶</span>
                  </div>
                </div>
              </div>
            </Link>
            <p className="p-2 text-sm sm:text-base text-center font-semibold truncate">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VideoGallery

