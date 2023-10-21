import { Components } from '@/components';
import { Work_Sans, Yeseva_One } from 'next/font/google';
import Link from 'next/link';
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

export default function Kontak() {
  return (
    <>
      <Components.Topmost />
      <Components.Navbar />
      <Components.Header withLink={false} headTitle='Kontak Kami'>
        <span>
          <Link href='/'>Beranda</Link> / Kontak{' '}
        </span>
      </Components.Header>
      <main>
        <section className='my-20 px-12 flex justify-center'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.444898555143!2d106.96422257483007!3d-6.336371893653286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6993dbeb659c39%3A0x47ef7886769adb12!2sYayasan%20Karya%20Muda%20Sentosa!5e0!3m2!1sid!2sid!4v1694631903280!5m2!1sid!2sid'
            className='w-full h-[500px] lg:w-[1300px] lg:h-[450px]'
            // width='1000'
            // height='450'
            // style={{ border: 0 }}
            // style='border:0;'
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </section>
        <section className='px-10 lg:px-44 grid grid-cols-1 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 lg:items-center'>
          <div className='left'>
            <div className='text-center md:text-left'>
              <p className='uppercase text-secondary text-lg' style={workSans.style}>
                get in touch
              </p>
              <h2 className='text-primary text-3xl' style={yesevaOne.style}>
                Contact
              </h2>
            </div>
            <div style={workSans.style}>
              <form className='mt-4'>
                <div className='lg:flex'>
                  <div className='lg:w-1/2'>
                    <input
                      className='w-full bg-primary px-5 py-3.5 text-white'
                      type='text'
                      name=''
                      placeholder='Nama'
                    />
                  </div>
                  <div className='lg:w-1/2'>
                    <input
                      className='w-full bg-primary px-5 py-3.5 text-white'
                      type='text'
                      name=''
                      placeholder='Email'
                    />
                  </div>
                </div>
                <div className=''>
                  <input
                    className='w-full bg-primary px-5 py-3.5 text-white'
                    type='text'
                    name=''
                    placeholder='Subjek'
                  />
                </div>
                <div className='  '>
                  <textarea className='w-full h-32 bg-primary px-5 py-3.5 text-white' placeholder='Pesan'></textarea>
                </div>
                <button
                  type='submit'
                  className='w-full py-4 text-center text-base font-medium text-primary bg-accent border-none'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className='right mt-12 grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:gap-x-4 lg:place-items-center'>
            <div className='py-7 w-full lg:w-60 lg:p-7 bg-accent hover:bg-primary hover:text-accent rounded-md'>
              <svg
                className='mx-auto hover:text-accent'
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
                <p>(237) 666-331-894</p>
              </div>
            </div>
            <div className='py-7 w-full lg:w-60 lg:p-7 bg-accent hover:bg-primary hover:text-accent rounded-md'>
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
            <div className='py-7 w-full lg:w-60 lg:p-7 bg-accent hover:bg-primary hover:text-accent rounded-md'>
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
                <p>myebstudios@gmail.com</p>
              </div>
            </div>
            <div className='py-7 w-full lg:w-60 lg:p-7 bg-accent hover:bg-primary hover:text-accent rounded-md'>
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
      </main>
      <Components.Footer />
    </>
  );
}
