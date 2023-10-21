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

export default function DokterGigi() {
  return (
    <>
      <Components.Topmost />
      <Components.Navbar />
      <Components.Header withLink={false} headTitle='Dokter Gigi'>
        <span>
          <Link href='/'>Beranda</Link> / <Link href='/layanan'>Layanan</Link> / Dokter Gigi
        </span>
      </Components.Header>
      <main>
        <section
          id='welcome'
          className='mt-16 px-5 md:px-20 lg:px-32 grid grid-cols-1 lg:grid-cols-2 place-items-center'
        >
          <div className='hidden md:block md:mb-6'>
            <Image
              className='object-cover object-center rounded-xl md:w-full lg:w-[408px] lg:h-[509px]'
              src='/assets/images/sanlat.jpg'
              width={408}
              height={509}
              alt='photo'
            />
          </div>
          <div className=''>
            <p
              className='text-sm text-secondary font-bold md:text-lg md:text-center lg:text-left'
              style={workSans.style}
            >
              Dokter Gigi
            </p>
            <h1 className='text-2xl text-primary md:text-3xl' style={yesevaOne.style}>
              Mengubah Senyuman, Mengubah Hidup
            </h1>
            <div className='mt-6 text-justify' style={workSans.style}>
              <p className='mt-4 indent-8'>
                Layanan kami mencakup berbagai aspek perawatan gigi, mulai dari pemeriksaan gigi rutin hingga perawatan
                estetika yang canggih. Dengan pengalaman dan keahlian kami, kami siap untuk membantu Anda menjaga
                senyuman yang sehat dan cantik.
              </p>
              <p className='mt-4 indent-8'>
                Kami memahami bahwa setiap pasien memiliki kebutuhan yang berbeda, dan kami berkomitmen untuk memberikan
                perawatan yang personal dan berkualitas tinggi. Temukan layanan-layanan dokter gigi kami di bawah ini
                dan jadwalkan janji untuk menjaga kesehatan gigi Anda.
              </p>
            </div>
          </div>
        </section>
        <section
          className='grid grid-cols-2 lg:grid-cols-4 px-5 gap-5 lg:gap-x-2 py-8 md:px-20 lg:px-32'
          style={workSans.style}
        >
          <div className=''>
            <p className='text-lg lg:text-2xl font-bold text-secondary'>Pelayanan Umum</p>
            <ul className='list-disc list-outside pl-6 lg:text-base'>
              <li>Pemeriksaan Gigi Rutin</li>
              <li>Pembersihan Gigi dan Skaling</li>
              <li>Ekstraksi Gigi (Pencabutan)</li>
            </ul>
          </div>
          <div className=''>
            <p className='text-lg lg:text-2xl font-bold text-secondary'>Perawatan Anak-Anak</p>
            <ul className='list-disc list-outside pl-6 lg:text-base'>
              <li>Pemeriksaan Gigi Anak</li>
              <li>Penanganan Karies Gigi Pada Anak</li>
              <li>Pencegahan Kebiasaan Buruk</li>
            </ul>
          </div>
          <div className=''>
            <p className='text-lg lg:text-2xl font-bold text-secondary'>Perawatan Khusus</p>
            <ul className='list-disc list-outside pl-6 lg:text-base'>
              <li>Perawatan Endodontik (Saluran Akar)</li>
              <li>Perawatan Periodontik (Penyakit Gusi)</li>
              <li>Perawatan Ortodontik untuk Dewasa</li>
            </ul>
          </div>
          <div className=''>
            <p className='text-lg lg:text-2xl font-bold text-secondary'>Konsultasi dan Edukasi</p>
            <ul className='list-disc list-outside pl-6 lg:text-base'>
              <li>Konsultasi Gigi</li>
              <li>Edukasi Kesehatan Gigi dan Mulut</li>
              <li>Perencanaan Perawatan Jangka Panjang</li>
            </ul>
          </div>
        </section>
      </main>

      <Components.GetInTouch />
      <Components.Footer />
    </>
  );
}
