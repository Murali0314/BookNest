import React from 'react'

function Banner() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-6'>
        {/* Text Section */}
        <div className='order-2 md:order-1 w-full md:w-1/2 mt-6 md:mt-12'>
          <div className='space-y-6'>
            <h1 className='text-4xl font-bold'>
              Hello, Welcome to learn something
              <span className='text-pink-500'> New everyday!!!</span>
            </h1>
            <p className='text-xl'>
              Books are more than just pages — they are gateways to knowledge,
              imagination, and personal growth. At our BookNest, we believe that
              every book has the power to inspire, educate, and transform lives.
            </p>

            <label className="input validator">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">Enter valid email address</div>
          </div>
          <button className="mt-4 btn btn-secondary">Get Started</button>
        </div>

        {/* Image Section */}
        <div className="order-1 w-full md:w-1/2 mt-4 md:mt-12 flex justify-center">
          <img src="/Book.jpg" alt="BannerHlo" className="rounded-lg w-3/4" />
        </div>
      </div>
    </>
  )
}

export default Banner
