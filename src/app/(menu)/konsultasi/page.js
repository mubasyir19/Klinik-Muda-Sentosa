import { Components } from '@/components';
import { Work_Sans, Yeseva_One } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import QuestData from '@/data/question.json';

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

export default function Konsultasi() {
  const { quests } = QuestData;
  // console.log(quests);
  const ask = quests.question;
  console.log('Tanya =>', ask);

  return (
    <>
      <Components.Topmost />
      <Components.Navbar />
      <Components.Header withLink={false} headTitle='Konsultasi Dokter'>
        <span>
          <Link href='/'>Beranda</Link> / Konsultasi
        </span>
      </Components.Header>
      <main className=' '>
        <section className='px-4 md:px-20 lg:px-0 mt-10'>
          <h1 className='text-center text-xl font-semibold text-primary' style={yesevaOne.style}>
            Konsultasikan kepada kami
          </h1>
          {/* <div className='lg:w-[1000px] mx-auto bg-red-200'> */}
          {quests.map((quest) => (
            <div key={quest.id} className='quest-card lg:w-[700px] h-fit p-5 mt-4 mx-auto bg-accent rounded-lg'>
              <div className='flex gap-x-3'>
                <div className=''>
                  <Image
                    className='w-10 h-10'
                    src='/assets/icons/avatar.svg'
                    width={40}
                    height={40}
                    alt='photo doctor'
                  />
                  <Image
                    className='w-auto h-auto rounded-full md:relative md:bottom-6 md:right-[-18px]'
                    src='/assets/images/doctor1.png'
                    width={40}
                    height={40}
                    alt='photo doctor'
                  />
                </div>
                <div style={workSans.style} className='md:ml-6'>
                  <Link href={`/konsultasi/${quest.id}`} className='font-bold text-lg cursor-pointer'>
                    {quest.title}
                  </Link>
                  <p className='text-base'>Oleh: Fulan</p>
                  <p className='text-slate-500 text-base'>Dijawab oleh dr. Fulan Al Fulan</p>
                </div>
              </div>
              <div>
                <p>{`${quest.question.slice(0, 80)}...`}</p>
              </div>
            </div>
          ))}
          {/* </div> */}
          {/* <div className='quest-card w-full h-fit p-5 mt-4 bg-sky-300 rounded-lg'>
            <div className='flex gap-x-3'>
              <div className=''>
                <Image
                  className='w-10 h-10'
                  src='https://class.buildwithangga.com/images/default-avatar.svg'
                  width={40}
                  height={40}
                  alt='photo doctor'
                />
                <Image
                  className='w-auto h-auto rounded-full md:relative md:bottom-6 md:right-[-18px]'
                  src='/assets/images/doctor1.png'
                  width={40}
                  height={40}
                  alt='photo doctor'
                />
              </div>
              <div style={workSans.style} className='md:ml-6'>
                <Link href='#' className='font-bold text-lg cursor-pointer'>
                  Penyebab tulang rusuk bagian kiri bagian dalam terasa sakit
                </Link>
                <p className='text-base'>Oleh: Fulan</p>
                <p className='text-light-blue text-base'>Dijawab oleh dr. Fulan Al Fulan</p>
              </div>
            </div>
            <div>
              <p>
                Saya mau tanya dok. Kenapa ya udah 2 hari ini saya merasa pusing dan terasa mual tapi nggak bisa muntah
                dok. Kira2 kenapa ya dok? saya harus minum apa biar cepat sembuh dok. makasih
              </p>
            </div>
          </div> */}
        </section>
        <section className='px-4 md:px-20 lg:px-0 mt-10'>
          <h2 className='text-center font-semibold text-xl text-primary' style={yesevaOne.style}>
            Tulis Pertanyaanmu Di sini!!!
          </h2>
          <form className='mt-4 lg:w-[800px] mx-auto'>
            <div className=''>
              <input className='w-full bg-primary px-5 py-3.5 text-white' type='text' name='nama' placeholder='Nama' />
            </div>
            <div className=''>
              <input
                className='w-full bg-primary px-5 py-3.5 text-white'
                type='text'
                name='email'
                placeholder='Email'
              />
            </div>
            <div className=''>
              <input
                className='w-full bg-primary px-5 py-3.5 text-white'
                type='text'
                name='Judul'
                placeholder='Subjek'
              />
            </div>
            <div className=''>
              <textarea className='w-full h-32 bg-primary px-5 py-3.5 text-white' placeholder='Pertanyaan'></textarea>
            </div>
            <button
              type='submit'
              className='w-full py-4 text-center text-base font-medium text-primary bg-accent border-none'
            >
              Submit
            </button>
          </form>
        </section>
      </main>
      <Components.GetInTouch />
      <Components.Footer />
    </>
  );
}
