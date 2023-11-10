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

export default function DokterUmum() {
  return (
    <>
      <Components.Topmost />
      <Components.Navbar />
      <header
        className='h-64 bg-cover bg-center bg-no-repeat flex justify-center items-center text-center lg:px-32 lg:items-center lg:text-start lg:grid lg:grid-cols-2'
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/background.jpg')",
        }}
      >
        <div className=''>
          <p className='text-secondary text-sm font-bold md:text-base lg:text-lg' style={workSans.style}>
            <Link href='/'>Beranda</Link> / <Link href='/layanan'>Layanan</Link> / Dokter Umum
          </p>
          <h1 className='text-white text-2xl mb-8 md:text-4xl lg:text-5xl' style={yesevaOne.style}>
            Dokter Umum
          </h1>
        </div>
        <div></div>
      </header>
      <main>
        <section
          id='welcome'
          className='mt-16 px-5 md:px-20 lg:px-32 grid grid-cols-1 lg:grid-cols-2 place-items-center'
        >
          <div className='hidden md:block md:mb-6'>
            <Image
              className='object-cover object-center rounded-xl md:w-full lg:w-[408px] lg:h-[509px]'
              src='/assets/images/gcu.jpg'
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
              Dokter Umum
            </p>
            <h1 className='text-2xl text-primary md:text-3xl' style={yesevaOne.style}>
              Merawat Keluarga Anda Seperti Keluarga Kami
            </h1>
            <div className='mt-6 text-justify' style={workSans.style}>
              <p className='mt-4 indent-8'>
                Layanan dokter umum kami mencakup pemeriksaan rutin, penanganan penyakit akut, manajemen penyakit
                kronis, hingga konsultasi kesehatan khusus. Kami berkomitmen untuk memberikan perawatan medis yang
                holistik dan individual sesuai dengan kebutuhan Anda. Apapun yang mungkin Anda hadapi, tim dokter umum
                kami siap membantu Anda mencapai kualitas hidup yang lebih baik.
              </p>
              <p className='mt-4 indent-8'>
                Temukan lebih lanjut mengenai layanan-layanan kami di bawah ini dan jadwalkan konsultasi hari ini untuk
                perjalanan menuju kesehatan yang lebih baik.
              </p>
            </div>
          </div>
        </section>
        <section
          className='grid grid-cols-2 lg:grid-cols-4 px-5 gap-5 lg:gap-x-6 py-8 md:px-20 lg:px-32'
          style={workSans.style}
        >
          <div className=''>
            <p className='text-lg lg:text-2xl font-bold text-secondary'>Pemeriksaaan Rutin</p>
            <ul className='list-disc list-outside pl-6 lg:text-base'>
              <li>Pemeriksaan Kesehatan Umum</li>
              <li>Pemeriksaan Kesehatan Anak-anak</li>
              <li>Pemeriksaan Kesehatan Lanjut Usia</li>
            </ul>
          </div>
          <div className=''>
            <p className='text-lg lg:text-2xl font-bold text-secondary'>Manajemen Penyakit Kronis</p>
            <ul className='list-disc list-outside pl-6 lg:text-base'>
              <li>Diabetes</li>
              <li>Hipertensi (Tekanan Darah Tinggi)</li>
              <li>Penyakit Jantung</li>
            </ul>
          </div>
          <div className=''>
            <p className='text-lg lg:text-2xl font-bold text-secondary'>Vaksinasi</p>
            <ul className='list-disc list-outside pl-6 lg:text-base'>
              <li>Vaksinasi Anak-anak</li>
              <li>Vaksinasi Dewasa</li>
              <li>Vaksinasi untuk Perjalanan</li>
            </ul>
          </div>
          <div className=''>
            <p className='text-lg lg:text-2xl font-bold text-secondary'>Konsultasi Kesehatan</p>
            <ul className='list-disc list-outside pl-6 lg:text-base'>
              <li>Konsultasi Gizi dan Diet</li>
              <li>Konsultasi Kesehatan Mental</li>
              <li>Konsultasi Kehamilan</li>
            </ul>
          </div>
        </section>
      </main>
      <Components.GetInTouch />
      <Components.Footer />
    </>
  );
}
