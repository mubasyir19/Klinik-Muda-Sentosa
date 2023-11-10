'use client';

import { Components } from '@/components';
import { Work_Sans, Yeseva_One } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname, useRouter, useSelectedLayoutSegment } from 'next/navigation';
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

export default function ArtikelPage() {
  const params = useParams();
  const paramsTitle = params.title;
  const decodeTitle = decodeURIComponent(paramsTitle).replace(/-/g, ' ');
  // console.log('params:', params);
  // console.log('params title:', params.title);

  function toTitleCase(text) {
    return text
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  const title = toTitleCase(decodeTitle);

  return (
    <>
      <Components.Topmost />
      <Components.Navbar />
      <Components.Header withLink={false} headTitle={title}>
        <span>
          <Link href='/'>Beranda</Link> / <Link href='/berita'>Berita</Link> / {title}
        </span>
      </Components.Header>
      <main>
        <section className='grid grid-cols-1 md:grid-cols-3 md:gap-x-6 lg:gap-x-20 md:px-6 lg:px-44'>
          <div className='left px-10 md:px-0 col-span-2'>
            <div className='news mt-10 place-self-center'>
              <Image
                className='w-full h-auto md:h-auto'
                src='/assets/images/nurse2.png'
                width={660}
                height={400}
                alt='card news'
              />
              <div className='my-8'>
                <p className='mt-4 text-justify text-base' style={workSans.style}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare
                  ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit
                  nascetur proin massa in. Consequat faucibus porttitor enim Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque
                  tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat
                  faucibus porttitor enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat
                  scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis
                  vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque
                  placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin
                  massa in. Consequat faucibus porttitor enim Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare
                  Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare
                  ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit
                  nascetur proin massa in. Consequat faucibus porttitor enim et.
                </p>
              </div>
            </div>
          </div>
          <div className='mt-10 md:mt-0 px-4 md:px-0'>
            <div className='w-full py-3.5 px-5 mt-2 md:mt-10 mx-auto bg-dark-blue text-pasty-blue flex justify-between gap-x-6 rounded'>
              <input
                className='md:w-full bg-dark-blue text-pasty-blue no-focus-outline my-auto'
                type='text'
                placeholder='Search'
                style={workSans.style}
              />
              <svg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M9.88894 18.7779C14.7982 18.7779 18.7779 14.7982 18.7779 9.88894C18.7779 4.97971 14.7982 1 9.88894 1C4.97971 1 1 4.97971 1 9.88894C1 14.7982 4.97971 18.7779 9.88894 18.7779Z'
                  stroke='#BFD2F8'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M21.0001 21.0001L16.1667 16.1667'
                  stroke='#BFD2F8'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <div className='mt-4 px-4 border-2 border-slate-300'>
              <h3 className='mt-4 text-center lg:text-start text-xl lg:text-4xl' style={yesevaOne.style}>
                Recent Posts
              </h3>
              <div className='mb-6'>
                <div className='card-news mt-6 flex md:block lg:flex gap-x-2.5'>
                  <Image
                    className='rounded-md h-20 w-20 my-auto'
                    src={'/assets/images/doctor3.png'}
                    width={60}
                    height={60}
                    // sizes=''
                    alt='image-post'
                  />
                  <div className='mt-2 lg:my-auto' style={workSans.style}>
                    <p className='text-light-blue text-xs md:text-sm'>Senin, 5 September 2023</p>
                    <p className='mt-1 text-sm md:text-base font-semibold'>
                      This Article’s Title goes Here, but not too long.
                    </p>
                  </div>
                </div>
                <div className='card-news mt-6 flex md:block lg:flex gap-x-2.5'>
                  <Image
                    className='rounded-md h-20 w-20 my-auto'
                    src={'/assets/images/doctor3.png'}
                    width={60}
                    height={60}
                    // sizes=''
                    alt='image-post'
                  />
                  <div className='mt-2 lg:my-auto' style={workSans.style}>
                    <p className='text-light-blue text-xs md:text-sm'>Senin, 5 September 2023</p>
                    <p className='mt-1 text-sm md:text-base font-semibold'>
                      This Article’s Title goes Here, but not too long.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-4 px-4 border-2 border-slate-300 rounded-md'>
              <h3 className='mt-4 text-center text-dark-blue lg:text-start text-xl lg:text-4xl' style={yesevaOne.style}>
                Kategori
              </h3>
              <div className='my-6' style={workSans.style}>
                <div className='w-full px-4 py-2 bg-dark-blue text-pasty-blue rounded-md'>
                  <Link href='#' className='flex justify-between cursor-pointer'>
                    <span className='my-auto text-base lg:text-lg'>Event</span>
                    <span className='py-1 px-3 my-auto text-sm lg:text-base text-white bg-light-blue rounded-full'>
                      5
                    </span>
                  </Link>
                </div>
                <div className='w-full px-4 py-2'>
                  <Link href='#' className='flex justify-between cursor-pointer'>
                    <span className='my-auto text-base lg:text-lg'>Artikel</span>
                    <span className='py-1 px-3 my-auto text-sm lg:text-base text-white bg-light-blue rounded-full'>
                      13
                    </span>
                  </Link>
                </div>
                <div className='w-full px-4 py-2'>
                  <Link href='#' className='flex justify-between cursor-pointer'>
                    <span className='my-auto text-base lg:text-lg'>Health Care</span>
                    <span className='py-1 px-3 my-auto text-sm lg:text-base text-white bg-light-blue rounded-full'>
                      3
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Components.GetInTouch />
      <Components.Footer />
    </>
  );
}
