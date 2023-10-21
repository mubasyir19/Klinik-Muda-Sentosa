'use client';

import { Components } from '@/components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Work_Sans, Yeseva_One } from 'next/font/google';
import { useEffect } from 'react';
import Link from 'next/link';

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

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <Components.Topmost />
      <Components.Navbar />
      <Components.Header withLink={true} headTitle='Kesehatan Berkualitas, Kehidupan yang Lebih Sejahtera'>
        <p>CARING FOR LIFE</p>
      </Components.Header>
      <section id='welcome' className='text-center px-4 mt-12' style={workSans.style}>
        <h2 className='text-sm text-secondary font-bold md:text-lg'>Selamat datang di Klinik Muda Sentosa</h2>
        <h1 className='text-2xl text-primary md:text-3xl' style={yesevaOne.style}>
          Sehat Berkualitas Hidup Sejahtera
        </h1>
        <p className='mt-2 mb-4 text-base lg:w-1/2 lg:mx-auto'>
          Klinik Muda Sentosa berintegrasi dan berfokus dalam memberikan pelayanan kesehatan, pengobatan dan pencegahan
          penyakit. Klinik Muda Sentosa tumbuh dari kepedulian kesehatan dan kesejahteraan masyarakat yang diharapkan
          dapat membangun lingkungan sekitar.
        </p>
        <Link href='/profil' className='flex gap-x-2.5 justify-center'>
          <span className='text-base text-secondary font-normal'>Selengkapnya</span>
          <svg
            className='my-auto'
            width='13'
            height='12'
            viewBox='0 0 13 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.21795 11L11.8333 6M11.8333 6L7.21795 1M11.8333 6H1'
              stroke='#1F2B6C'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Link>
      </section>
      <section id='slider' className='mt-12'>
        <div className='lg:px-48'>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className='mySwiper'
          >
            <SwiperSlide>
              <Image
                className='w-full h-72 object-cover object-center'
                src='/assets/images/profil.jpg'
                sizes='100vw'
                width={375}
                height={150}
                alt='doctorss'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className='w-full h-72 object-cover object-center'
                src='/assets/images/bazar.jpg'
                sizes='100vw'
                width={375}
                height={150}
                alt='doctorss'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className='w-full h-72 object-cover object-top'
                src='/assets/images/fotbar-santunan.jpg'
                sizes='100vw'
                width={375}
                height={150}
                alt='doctorss'
              />
            </SwiperSlide>
          </Swiper>
          {/* <Image
            className='w-full h-72 object-cover object-center'
            src='/assets/images/Home-Karmus.jpg'
            sizes='100vw'
            width={375}
            height={150}
            alt='doctorss'
          /> */}
        </div>
      </section>
      <Components.ServiceTab />
      <Components.GetInTouch />
      <Components.Footer />
    </>
  );
}
