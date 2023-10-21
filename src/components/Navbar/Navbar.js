'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Work_Sans } from 'next/font/google';
import Image from 'next/image';

const workSans = Work_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isSubMenuLayananOpen, setIsSubMenuLayananOpen] = useState(false);
  const [isHoverSubMenuLayananOpen, setIsHoverSubMenuLayananOpen] = useState(false);

  const toogleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toogleSubMenuLayananOpen = () => {
    setIsSubMenuLayananOpen(!isSubMenuLayananOpen);
  };

  const hoverLayananMouseEnter = () => {
    setIsHoverSubMenuLayananOpen(true);
  };
  const hoverLayananMouseLeave = () => {
    setIsHoverSubMenuLayananOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // <nav className='bg-dark-blue text-white' style={workSans.style}>
    <nav
      className={`bg-primary text-white md:px-4 lg:px-16 z-10 ${
        hasScrolled ? 'fixed top-0 left-0 right-0 md:px-16 transition-all bg-dark-blue' : 'transition-all'
      }`}
      style={workSans.style}
    >
      <div className='py-4 md:py-0 px-5 flex justify-between lg:justify-around relative'>
        <div className='flex gap-x-2'>
          <Image
            src='/assets/images/logo-Klinik.png'
            className='my-auto w-10 h-10 bg-white rounded-full'
            width={100}
            height={100}
            alt='logo'
          />
          <Link href='/' className='my-auto text-base lg:text-2xl font-medium italic'>
            Klinik <span className=' text-secondary'>Muda</span> Sentosa
          </Link>
        </div>
        <div className='hidden md:flex my-auto'>
          <Link href='/' className='py-4 px-3 md:text-sm lg:text-lg hover:bg-secondary'>
            Beranda
          </Link>
          <Link href='/profil' className='py-4 px-3 md:text-sm lg:text-lg hover:bg-secondary'>
            Profil
          </Link>
          <Link
            href='/layanan'
            className='relative py-4 px-3 md:text-sm lg:text-lg flex gap-x-2 hover:bg-secondary'
            onMouseEnter={hoverLayananMouseEnter}
            onMouseLeave={hoverLayananMouseLeave}
          >
            Layanan
            <svg
              className='my-auto'
              width='10'
              height='5'
              viewBox='0 0 10 5'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M0 0L5 5L10 0H0Z' fill='white' />
            </svg>
            {isHoverSubMenuLayananOpen && (
              <ul className='absolute left-0 top-full md:w-32 lg:w-40 bg-primary border border-secondary'>
                <li className='py-2 px-3 hover:bg-secondary'>
                  <Link href='/layanan/dokter-gigi'>Dokter Gigi</Link>
                </li>
                <li className='py-2 px-3 hover:bg-secondary'>
                  <Link href='/layanan/dokter-umum'>Dokter Umum</Link>
                </li>
              </ul>
            )}
          </Link>
          <Link href='/dokter' className='py-4 px-3 md:text-sm lg:text-lg hover:bg-secondary'>
            Dokter
          </Link>
          <Link href='/konsultasi' className='py-4 px-3 md:text-sm lg:text-lg hover:bg-secondary'>
            Konsultasi
          </Link>
          <Link href='/berita' className='py-4 px-3 md:text-sm lg:text-lg hover:bg-secondary'>
            Berita
          </Link>
          <Link href='/kontak' className='py-4 px-3 md:text-sm lg:text-lg hover:bg-secondary'>
            Kontak
          </Link>
        </div>
        <div className='md:hidden my-auto'>
          <button onClick={toogleMenuOpen}>
            <svg className='h-8 w-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
          {isMenuOpen && (
            <div
              className={`absolute inset-y-0 right-0 w-3/4 z-10 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
              <div className='bg-black bg-opacity-90 pt-6 space-y-3 text-right h-screen'>
                <button className='pr-6' onClick={toogleMenuOpen}>
                  <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M12.4948 10L19.478 3.01684C19.8094 2.68601 19.9958 2.23707 19.9962 1.76879C19.9966 1.3005 19.811 0.851233 19.4802 0.519814C19.1494 0.188395 18.7004 0.00197318 18.2321 0.00155962C17.7638 0.00114607 17.3146 0.186774 16.9832 0.517609L10 7.50077L3.01684 0.517609C2.68542 0.18619 2.23592 0 1.76723 0C1.29853 0 0.849028 0.18619 0.517609 0.517609C0.18619 0.849028 0 1.29853 0 1.76723C0 2.23592 0.18619 2.68542 0.517609 3.01684L7.50077 10L0.517609 16.9832C0.18619 17.3146 0 17.7641 0 18.2328C0 18.7015 0.18619 19.151 0.517609 19.4824C0.849028 19.8138 1.29853 20 1.76723 20C2.23592 20 2.68542 19.8138 3.01684 19.4824L10 12.4992L16.9832 19.4824C17.3146 19.8138 17.7641 20 18.2328 20C18.7015 20 19.151 19.8138 19.4824 19.4824C19.8138 19.151 20 18.7015 20 18.2328C20 17.7641 19.8138 17.3146 19.4824 16.9832L12.4948 10Z'
                      fill='white'
                    />
                  </svg>
                </button>
                <Link href='/' className='pt-2 px-4 block text-lg text-white text-justify'>
                  Beranda
                </Link>
                <Link href='/profil' className='pt-2 px-4 block text-lg text-white text-justify'>
                  Profil
                </Link>
                <div className='flex justify-between'>
                  <Link href='/layanan' className='pt-2 px-4 block text-lg my-auto text-white text-justify'>
                    Layanan
                  </Link>
                  <button className='p-4' onClick={toogleSubMenuLayananOpen}>
                    {isSubMenuLayananOpen ? (
                      <svg width='14' height='14' viewBox='0 0 14 2' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M14 2H0V0H14V2Z' fill='#00D2DF' />
                      </svg>
                    ) : (
                      <svg
                        className='my-auto'
                        width='14'
                        height='14'
                        viewBox='0 0 14 14'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z' fill='#00D2DF' />
                      </svg>
                    )}
                  </button>
                </div>
                {isSubMenuLayananOpen && (
                  <div className='ml-4 mt-0'>
                    <Link href='/layanan/dokter-gigi' className='pt-2 px-4 mb-2 block text-lg text-white text-justify'>
                      Dokter Gigi
                    </Link>
                    <Link href='/layanan/dokter-umum' className='pt-2 px-4 block text-lg text-white text-justify'>
                      Dokter Umum
                    </Link>
                  </div>
                )}
                <Link href='/dokter' className='pt-2 px-4 block text-lg text-white text-justify'>
                  Dokter
                </Link>
                <Link href='/konsultasi' className='pt-2 px-4 block text-lg text-white text-justify'>
                  Konsultasi
                </Link>
                <Link href='/berita' className='pt-2 px-4 block text-lg text-white text-justify'>
                  Berita
                </Link>
                <Link href='/kontak' className='pt-2 px-4 block text-lg text-white text-justify'>
                  Kontak
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
