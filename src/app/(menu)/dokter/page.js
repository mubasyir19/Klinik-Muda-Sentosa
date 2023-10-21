import { Components } from '@/components';
import { Work_Sans, Yeseva_One } from 'next/font/google';
import Image from 'next/image';
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

export default function Berita() {
  return (
    <>
      <Components.Topmost />
      <Components.Navbar />
      <Components.Header withLink={false} headTitle='Dokter Kami'>
        <span>
          <Link href='/'>Beranda</Link> / Dokter
        </span>
      </Components.Header>
      <main className='mt-10'>
        <section className='grid grid-cols-1 md:grid-cols-2 md:gap-x-10 place-items-center md:px-6 lg:px-64'>
          <div className='card w-317 mt-10' style={workSans.style}>
            <div className='w-[317px] h-[350px] bg-slate-300 flex justify-center items-center'>
              <h1 className='text-3xl'>Foto Dokter</h1>
            </div>
            {/* <Image
              className=''
              src='/assets/images/doctor1.png'
              style={{ width: '317px', height: '350px' }}
              width={317}
              height={350}
              sizes='100vh'
              alt='doctor'
            /> */}
            <div className='bg-accent text-center py-6'>
              <h1 className='text-black text-lg mb-2'>Dokter 1</h1>
              <p className='text-black font-bold text-lg mb-2'>Dokter Gigi</p>
              <div className='flex justify-center gap-x-5 mt-4'>
                <Link href='#'>
                  <Image
                    src='/assets/images/linkedIn-dark.png'
                    className='cursor-pointer'
                    width={24}
                    height={24}
                    alt='linkedIn'
                  />
                </Link>
                <Link href='#'>
                  <Image
                    src='/assets/images/facebook-dark.png'
                    className='cursor-pointer'
                    width={24}
                    height={24}
                    alt='facebook'
                  />
                </Link>
                <Link href='#'>
                  <Image
                    src='/assets/images/instagram-dark.png'
                    className='cursor-pointer'
                    width={24}
                    height={24}
                    alt='instagram'
                  />
                </Link>
              </div>
            </div>
            <div className='bg-primary text-center py-3 rounded-b-md'>
              <Link href='#' className='text-white'>
                Lihat Profil
              </Link>
            </div>
          </div>
          <div className='card w-317 mt-10' style={workSans.style}>
            <div className='w-[317px] h-[350px] bg-slate-300 flex justify-center items-center'>
              <h1 className='text-3xl'>Foto Dokter</h1>
            </div>
            {/* <Image
              src='/assets/images/doctor2.png'
              style={{ width: '317px', height: '350px' }}
              width={317}
              height={350}
              sizes='100vh'
              alt='doctor'
            /> */}
            <div className='bg-accent text-center py-6'>
              <h1 className='text-black text-lg mb-2'>Dokter 2</h1>
              <p className='text-black font-bold text-lg mb-2'>Dokter Umum</p>
              <div className='flex justify-center gap-x-5 mt-4'>
                <Link href='#'>
                  <Image
                    src='/assets/images/linkedIn-dark.png'
                    className='cursor-pointer'
                    width={24}
                    height={24}
                    alt='linkedIn'
                  />
                </Link>
                <Link href='#'>
                  <Image
                    src='/assets/images/facebook-dark.png'
                    className='cursor-pointer'
                    width={24}
                    height={24}
                    alt='facebook'
                  />
                </Link>
                <Link href='#'>
                  <Image
                    src='/assets/images/instagram-dark.png'
                    className='cursor-pointer'
                    width={24}
                    height={24}
                    alt='instagram'
                  />
                </Link>
              </div>
            </div>
            <div className='bg-primary text-center py-3 rounded-b-md'>
              <Link href='#' className='text-white'>
                Lihat Profil
              </Link>
            </div>
          </div>
          {/* <div className='card w-317 mt-10'>
            <Image
              src='/assets/images/doctor3.png'
              style={{ width: '317px', height: '350px' }}
              width={317}
              height={350}
              sizes='100vh'
              alt='doctor'
            />
            <div className='bg-accent text-center py-6'>
              <h1 className='text-black text-lg mb-2'>Dokter 3</h1>
              <p className='text-black font-bold text-lg mb-2'>Spesialis Penyakit Dalam</p>
              <div className='flex justify-center gap-x-5 mt-4'>
                <Link href='#'>
                  <Image
                    src='/assets/images/linkedIn-dark.png'
                    className='cursor-pointer'
                    width={24}
                    height={24}
                    alt='linkedIn'
                  />
                </Link>
                <Link href='#'>
                  <Image
                    src='/assets/images/facebook-dark.png'
                    className='cursor-pointer'
                    width={24}
                    height={24}
                    alt='facebook'
                  />
                </Link>
                <Link href='#'>
                  <Image
                    src='/assets/images/instagram-dark.png'
                    className='cursor-pointer'
                    width={24}
                    height={24}
                    alt='instagram'
                  />
                </Link>
              </div>
            </div>
            <div className='bg-primary text-center py-3 rounded-b-md'>
              <Link href='#' className='text-white'>
                Lihat Profil
              </Link>
            </div>
          </div>
          <div className='card w-317 mt-10'>
            <Image
              src='/assets/images/doctor1.png'
              style={{ width: '317px', height: '350px' }}
              width={317}
              height={350}
              sizes='100vh'
              alt='doctor'
            />
            <div className='bg-accent text-center py-6'>
              <h1 className='text-black text-lg mb-2'>Dokter 1</h1>
              <p className='text-black font-bold text-lg mb-2'>Dokter Anak</p>
              <div className='flex justify-center gap-x-5 mt-4'>
                <Link href='#'>
                  <Image
                    src='/assets/images/linkedIn-dark.png'
                    className='cursor-pointer'
                    width={24}
                    height={24}
                    alt='linkedIn'
                  />
                </Link>
                <Link href='#'>
                  <Image
                    src='/assets/images/facebook-dark.png'
                    className='cursor-pointer'
                    width={24}
                    height={24}
                    alt='facebook'
                  />
                </Link>
                <Link href='#'>
                  <Image
                    src='/assets/images/instagram-dark.png'
                    className='cursor-pointer'
                    width={24}
                    height={24}
                    alt='instagram'
                  />
                </Link>
              </div>
            </div>
            <div className='bg-primary text-center py-3 rounded-b-md'>
              <Link href='#' className='text-white'>
                Lihat Profil
              </Link>
            </div>
          </div>
          <div className='card w-317 mt-10'>
            <Image
              src='/assets/images/doctor2.png'
              style={{ width: '317px', height: '350px' }}
              width={317}
              height={350}
              sizes='100vh'
              alt='doctor'
            />
            <div className='bg-accent text-center py-6'>
              <h1 className='text-black text-lg mb-2'>Dokter 2</h1>
              <p className='text-black font-bold text-lg mb-2'>Dokter Umum</p>
              <div className='flex justify-center gap-x-5 mt-4'>
                <Link href='#'>
                  <Image
                    src='/assets/images/linkedIn-dark.png'
                    className='cursor-pointer'
                    width={24}
                    height={24}
                    alt='linkedIn'
                  />
                </Link>
                <Link href='#'>
                  <Image
                    src='/assets/images/facebook-dark.png'
                    className='cursor-pointer'
                    width={24}
                    height={24}
                    alt='facebook'
                  />
                </Link>
                <Link href='#'>
                  <Image
                    src='/assets/images/instagram-dark.png'
                    className='cursor-pointer'
                    width={24}
                    height={24}
                    alt='instagram'
                  />
                </Link>
              </div>
            </div>
            <div className='bg-primary text-center py-3 rounded-b-md'>
              <Link href='#' className='text-white'>
                Lihat Profil
              </Link>
            </div>
          </div>
          <div className='card w-317 mt-10'>
            <Image
              src='/assets/images/doctor3.png'
              style={{ width: '317px', height: '350px' }}
              width={317}
              height={350}
              sizes='100vh'
              alt='doctor'
            />
            <div className='bg-accent text-center py-6'>
              <h1 className='text-black text-lg mb-2'>Dokter 3</h1>
              <p className='text-black font-bold text-lg mb-2'>Spesialis Penyakit Dalam</p>
              <div className='flex justify-center gap-x-5 mt-4'>
                <Link href='#'>
                  <Image
                    src='/assets/images/linkedIn-dark.png'
                    className='cursor-pointer'
                    width={24}
                    height={24}
                    alt='linkedIn'
                  />
                </Link>
                <Link href='#'>
                  <Image
                    src='/assets/images/facebook-dark.png'
                    className='cursor-pointer'
                    width={24}
                    height={24}
                    alt='facebook'
                  />
                </Link>
                <Link href='#'>
                  <Image
                    src='/assets/images/instagram-dark.png'
                    className='cursor-pointer'
                    width={24}
                    height={24}
                    alt='instagram'
                  />
                </Link>
              </div>
            </div>
            <div className='bg-primary text-center py-3 rounded-b-md'>
              <Link href='#' className='text-white'>
                Lihat Profil
              </Link>
            </div>
          </div> */}
        </section>
        <section
          className='mt-16 py-16 px-10 bg-cover bg-center'
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(17, 128, 135, 0.6), rgba(17, 128, 135, 0.6)), url('/assets/images/background2.png')",
          }}
        >
          <Image className='mx-auto' src='/assets/images/quote.png' width={45} height={30} alt='quote' />
          <div className='mt-10 mx-auto text-center text-white lg:w-1/2' style={workSans.style}>
            <p className='text-lg lg:text-2xl'>
              Tidak ada penyakit yang lebih merusak tubuh manusia daripada kekhawatiran, tidak ada obat yang lebih baik
              daripada kebahagiaan.
            </p>
            <div className='w-56 h-[2px] my-5 mx-auto bg-accent'></div>
            <p className='md:text-xl lg:text-2xl font-semibold'>Ibnu Sina</p>
          </div>
        </section>
      </main>
      <Components.GetInTouch />
      <Components.Footer />
    </>
  );
}
