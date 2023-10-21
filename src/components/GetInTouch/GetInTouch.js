import { Work_Sans, Yeseva_One } from 'next/font/google';
import React from 'react';

const yesevaOne = Yeseva_One({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});

const workSans = Work_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function GetInTouch() {
  return (
    <section className='mt-16'>
      <div className='text-center'>
        <p className='text-secondary text-base lg:text-lg' style={workSans.style}>
          GET IN TOUCH
        </p>
        <h1 className='text-primary text-2xl md:text-4xl' style={yesevaOne.style}>
          Contact
        </h1>
      </div>
      <div className='px-4 md:px-10 lg:px-4 mt-12 flex flex-col gap-y-4 md:grid md:grid-cols-2 md:gap-x-10 lg:flex lg:flex-row lg:gap-x-4 lg:justify-center'>
        <div className='py-7 w-full lg:w-60 lg:p-7 bg-accent hover:bg-primary hover:text-white rounded-md'>
          <svg
            className='mx-auto hover:'
            width='41'
            height='39'
            viewBox='0 0 41 39'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M24.1459 33.1262C24.7274 32.7905 25.1502 32.2347 25.3211 31.5811C25.492 30.9275 25.3972 30.2296 25.0574 29.6411L23.7761 27.4219C23.4363 26.8333 22.8794 26.4022 22.2279 26.2235C21.5764 26.0447 20.8837 26.1329 20.3021 26.4687C15.9167 29.0006 13.3542 24.5622 12.0729 22.343C10.7917 20.1238 8.22919 15.6854 12.6146 13.1535C13.1962 12.8178 13.6189 12.2619 13.7899 11.6084C13.9608 10.9548 13.8659 10.2569 13.5261 9.66835L12.2449 7.44916C11.905 6.8606 11.3481 6.42952 10.6966 6.25075C10.0451 6.07199 9.35243 6.16019 8.77089 6.49594C3.28908 9.66086 1.28125 13.779 7.6875 24.875C14.0938 35.9709 18.6641 36.2911 24.1459 33.1262Z'
              stroke='#1F2B6C'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M35.8156 23.9621C36.9804 19.4989 36.3314 14.7346 34.0113 10.716C31.6911 6.69743 27.8896 3.75324 23.442 2.53032M29.1022 22.12C29.4492 20.7945 29.5325 19.4104 29.3472 18.0469C29.162 16.6835 28.712 15.3672 28.0227 14.1735C27.3335 12.9798 26.4187 11.9319 25.3305 11.0897C24.2423 10.2476 23.002 9.62766 21.6806 9.26539M22.4248 20.2645C22.6577 19.3714 22.5278 18.4181 22.0635 17.6141C21.5993 16.81 20.8387 16.2208 19.9488 15.9759'
              stroke='#1F2B6C'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <div className='text-center'>
            <p className='text-lg font-bold'>DARURAT</p>
            <p>+62 896 3738 7706</p>
            {/* <p>(237) 666-331-894</p> */}
          </div>
        </div>
        <div className='py-7 w-full lg:w-60 lg:p-7 bg-accent hover:bg-primary hover:text-white rounded-md'>
          <svg
            className='mx-auto'
            width='39'
            height='41'
            viewBox='0 0 19 23'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 9.23919C1 17.4784 9.58249 21.598 9.58249 21.598C9.58249 21.598 18.165 17.4784 18.165 9.23919C18.165 4.69047 14.3243 1 9.58249 1C4.84067 1 1 4.69047 1 9.23919Z'
              stroke='#1F2B6C'
              strokeWidth='1.5'
            />
            <path
              d='M9.58226 12.0542C11.2128 12.0542 12.5346 10.7323 12.5346 9.10179C12.5346 7.47124 11.2128 6.14941 9.58226 6.14941C7.95171 6.14941 6.62988 7.47124 6.62988 9.10179C6.62988 10.7323 7.95171 12.0542 9.58226 12.0542Z'
              stroke='#159EEC'
              strokeWidth='1.5'
            />
          </svg>
          <div className='text-center'>
            <p className='text-lg font-bold'>LOKASI</p>
            <p>Bojong Kulur</p>
            <p>Bogor</p>
          </div>
        </div>
        <div className='py-7 w-full lg:w-60 lg:p-7 bg-accent hover:bg-primary hover:text-white rounded-md'>
          <svg
            className='mx-auto '
            width='39'
            height='32'
            viewBox='0 0 39 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1.7998 1H37.1998V30.5H1.7998V1Z'
              stroke='#1F2B6C'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M37.1998 6.8999L19.4998 18.6999L1.7998 6.8999'
              stroke='#1F2B6C'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <div className='text-center'>
            <p className='text-lg font-bold'>EMAIL</p>
            <p>admin@karmus.id</p>
            {/* <p>myebstudios@gmail.com</p> */}
          </div>
        </div>
        <div className='py-7 w-full lg:w-60 lg:p-7 bg-accent hover:bg-primary hover:text-white rounded-md'>
          <svg
            className='mx-auto'
            width='33'
            height='32'
            viewBox='0 0 33 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M16.6777 31C24.962 31 31.6777 24.2843 31.6777 16C31.6777 7.71573 24.962 1 16.6777 1C8.39346 1 1.67773 7.71573 1.67773 16C1.67773 24.2843 8.39346 31 16.6777 31Z'
              stroke='#1F2B6C'
              strokeWidth='2'
              strokeLinecap='round'
            />
            <path d='M21.6777 23.5L16.6777 16V6' stroke='#1F2B6C' strokeWidth='2' strokeLinecap='round' />
          </svg>
          <div className='text-center'>
            <p className='text-lg font-bold'>JAM KERJA</p>
            <p>Mon-Sat 09:00-20:00</p>
            <p>Sunday Emergency only</p>
          </div>
        </div>
      </div>
    </section>
  );
}
