import React from 'react'

const NewsLetter = () => {
  return (
    <div>
        <div className="mt-10 bg-white p-6 rounded-lg shadow-md text-center mb-10">
          <h2 className="text-2xl font-semibold">
            Subscribe to our <span className="text-red-500">Newsletter</span>
          </h2>
          <div className="mt-4 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-1/2 p-3 border rounded-l-lg outline-none"
            />
            <button className="bg-red-600 text-white px-6 py-3 rounded-r-lg shadow-md">
              Subscribe
            </button>
          </div>
        </div>
    </div>
  )
}

export default NewsLetter