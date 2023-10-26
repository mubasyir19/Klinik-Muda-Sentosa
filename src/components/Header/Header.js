'use client';

import { Work_Sans, Yeseva_One } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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

export default function Header({ withLink, headTitle, children }) {
  const pathname = usePathname();

  return (
    <header
      className={`${
        pathname === '/' ? 'h-96' : 'h-64'
      } bg-cover bg-center bg-no-repeat flex justify-center items-center text-center lg:px-32 lg:items-center lg:text-start lg:grid lg:grid-cols-2`}
      style={{
        backgroundImage:
          "linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/background.jpg')",
      }}
    >
      <div className='px-4'>
        <div className='text-secondary text-sm font-bold md:text-base lg:text-lg' style={workSans.style}>
          {children}
        </div>
        <h1 className='text-white text-2xl mb-8 md:text-4xl lg:text-5xl' style={yesevaOne.style}>
          {headTitle}
        </h1>
        {withLink && (
          <Link href='#layanan' className='py-3 px-9 text-base text-primary font-medium bg-accent rounded-full'>
            Layanan Kami
          </Link>
        )}
      </div>
      <div></div>
    </header>
  );
}
