import Image from "next/image";
import Link from "next/link";
import React from "react";

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
];

const VideoGallery = () => {
  return (
    <div className="p-6 mx-20">
      <h2 className="text-2xl w-1/2 font-bold mb-4">Browse Our Videos</h2>
      <div className="h-[400px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <div key={video.id} className="relative rounded-lg overflow-hidden shadow-lg">
            <Link href={video.videoUrl} target="_blank" rel="noopener noreferrer">
              <Image
                width={100}
                height={100}
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <button className="bg-red-600 text-white p-2 rounded-full text-xl">
                  ▶
                </button>
              </div>
            </Link>
            <p className="p-2 text-center font-semibold">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
