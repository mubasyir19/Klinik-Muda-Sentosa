'use client';
import { Components } from '@/components';
import { Work_Sans, Yeseva_One } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
// import QuestData from '../../data/question.json';
import Image from 'next/image';

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

export default function QuestPage({ question }) {
  const router = useRouter();
  //   const { quest } = router.query;
  // const { quests } = QuestData;
  //   console.log('Question =>', quest);
  // console.log('quests =>', quests);

  return (
    <>
      <Components.Topmost />
      <Components.Navbar />
      <Components.Header withLink={false} headTitle='Tanya Jawab Konsultasi'>
        <span>
          <Link href='/'>Beranda</Link> / <Link href='/konsultasi'>Konsultasi</Link> / test
        </span>
      </Components.Header>
      <main style={workSans.style}>
        <section className='px-6 lg:w-[1024px] mx-auto'>
          <div className='mt-10'>
            <Link href='/konsultasi' className='flex gap-x-3'>
              <svg
                className='my-auto'
                width='13'
                height='12'
                viewBox='0 0 13 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.6153 11L0.999919 6M0.999919 6L5.6153 1M0.999919 6H11.8333'
                  stroke='#1F2B6C'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <p className='my-auto'>Kembali ke Halaman Konsultasi</p>
            </Link>
          </div>
          <div className='quest-card mt-10 p-4'>
            <div className='flex justify-between'>
              <div className='flex gap-x-2 md:gap-x-5'>
                <Image
                  className='w-10 h-full'
                  src='/assets/icons/avatar.svg'
                  width={40}
                  height={40}
                  alt='profile_users'
                />
                <div>
                  <p className='font-bold'>Pasien</p>
                  <p>Anggota</p>
                </div>
              </div>
              <div className='my-auto'>
                <p className=''>28 September 2023</p>
              </div>
            </div>
            <div className='question px-4 mt-3'>
              <p className='text-base'>
                Saya mau tanya dok. Kenapa ya udah 2 hari ini saya merasa pusing dan terasa mual tapi nggak bisa muntah
                dok. Kira2 kenapa ya dok? saya harus minum apa biar cepat sembuh dok. makasih
              </p>
            </div>
          </div>
          <div className='answer-card mt-4 border-2 border-slate-200 p-4 rounded-xl'>
            <div>
              <p>Dijawab oleh:</p>
            </div>
            <div className='mt-2 flex justify-between'>
              <div className='flex gap-x-2 md:gap-x-5'>
                <Image
                  className='w-10 h-full'
                  src='/assets/icons/avatar.svg'
                  width={40}
                  height={40}
                  alt='profile_users'
                />
                <div>
                  <p className='font-bold'>dr.Fulan</p>
                  <p>Dokter Anak</p>
                </div>
              </div>
              <div className='my-auto'>
                <p className=''>28 September 2023</p>
              </div>
            </div>
            <div className='question px-4 mt-3'>
              <div className='text-base'>
                Alo, saya dr. Tirtawati Wijaya. Terima kasih sudah bertanya ke Alodokter.
                <div className='h-2'></div>
                Oralit adalah larutan gula garam untuk menggantikan cairan tubuh yang hilang. Fungsi utama oralit adalah
                mencegah terjadinya dehidrasi. Pemberian oralit tidak akan menghentikan mencret, karena memang bukan
                dirancang untuk itu.
                <div className='h-2'></div>
                Mencret pada bayi dapat disebabkan oleh berbagai hal, antara lain:
                <div className='h-2'></div>
                <ul className='list-disc list-inside'>
                  <li>
                    infeksi virus, seperti norovirus, rotavirus, adenovirus. Masih banyak lagi contoh virus lain yang
                    dapat menyebabkan mencret; virus penyebab COVID 19 juga bisa menyebabkan diare.
                  </li>
                  <li>Infeksi bakteri, seperti Salmonella, Escherichia coli, Shigella, Clostridium, dan sebagainya</li>
                  <li>Infeksi parasite, seperti Giardia, Cryptosporidium, Microsporidium</li>
                  <li>Keracunan makanan</li>
                </ul>
                <div className='h-2'></div>
                Berbagai penyebab ini membutuhkan penanganan yang berbeda-beda, sesuai penyebabnya. Infeksi bakteri
                diobati dengan antibiotic. Infeksi virus diobati dengan anti-virus. Infeksi parasite diobati dengan anti
                parasite. Keracunan makanan umumnya ditangani dengan mengeluarkan zat beracun atau memberikan antidote.
                Penanganan yang tidak tepat tidak akan menyembuhkan pasien. Jadi penting sekali untuk memastikan dulu
                apa penyebabnya sebelum berupaya mengobati. Pemberian oralit sebagai pertolongan pertama sudah tepat,
                karena komplikasi terburuk dari mencret adalah dehidrasi, yang bila tidak ditangani tepat waktu dan
                benar bisa berakibat fatal. Apapun penyebab mencret-nya, bayi mengalami kehilangan cairan dalam jumlah
                banyak dan harus segera diganti jumlah yang hilang tersebut dengan memberikan oralit. Namun dalam kasus
                yang berat hal ini tidak cukup, karena cairan yang hilang lebih banyak dan lebih cepat dibandingkan
                dengan penggantiannya. Apalagi bila orang menganggap oralit sebagai obat dan pemberiannya dibatasi
                karena takut overdosis. Mengingat bayi sudah mengalami mencret sejak semalam dan kondisinya belum
                membaik, dan karena bayi lebih berisiko tinggi mengalami dehidrasi, sebaiknya segera periksakan bayi
                Anda ke IGD terdekat. Bila kondisi bayi Anda berisiko, mungkin harus dilakukan rawat inap untuk
                memastikan penggantian cairannya adekuat. Bila menurut dokter kondisi bayi Anda baik, perawatannya bisa
                dilakukan di rumah. Berikut ini yang harus Anda lakukan:
                <br /> <br />
                <ul className='list-disc list-inside'>
                  <li>Bawa bayi ke IGD terdekat untuk segera mendapat pemeriksaan dan pertolongan yang diperlukan.</li>
                  <li>Berikan oralit sebanyak cairan tubuh yang hilang, yang diperkirakan dari volume mencretnya.</li>
                  <li>
                    Berikan bayi ASI sebanyak dan sesering ia mau; jangan dibatasi. Bila bayi sudah tidak mendapat ASI,
                    hentikan pemberian sufor untuk sementara waktu hingga dinyatakan aman oleh dokter yang memeriksa,
                    karena susu selain ASI juga memiliki risiko memperberat mencret.
                  </li>
                  <li>Bawa bayi ke IGD terdekat untuk segera mendapat pemeriksaan dan pertolongan yang diperlukan.</li>
                </ul>
                <div className='h-2'></div>
                Demikianlah penjelasan saya, semoga bermanfaat.
              </div>
            </div>
          </div>
        </section>
      </main>
      <Components.Footer />
    </>
  );
}
