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

export default function Profil() {
  return (
    <>
      <Components.Topmost />
      <Components.Navbar />
      <Components.Header withLink={false} headTitle='Profil'>
        <span className='text-center'>
          <Link href='/'>Beranda</Link> / Profil
        </span>
      </Components.Header>
      <main>
        <section
          id='welcome'
          className='mt-16 px-5 md:px-20 lg:px-40 grid grid-cols-1 lg:grid-cols-2 md:gap-x-10 place-items-center'
        >
          <div className='hidden md:block md:mb-6'>
            <Image
              className='object-cover object-right rounded-xl md:w-full lg:w-[408px] lg:h-[509px]'
              src='/assets/images/regist-gcu.jpg'
              width={408}
              height={509}
              alt='photo'
            />
          </div>
          <div className=''>
            <p className='text-sm text-secondary font-bold md:text-lg' style={workSans.style}>
              Selamat Datang di Klinik Muda Sentosa
            </p>
            <h1 className='text-2xl text-primary md:text-3xl' style={yesevaOne.style}>
              Sehat Berkualitas Hidup Sejahtera
            </h1>
            <div className='mt-6 text-justify' style={workSans.style}>
              <p className='mt-4 indent-8'>
                Kami dengan bangga memperkenalkan diri sebagai mitra kesehatan Anda yang berkomitmen untuk memberikan
                pelayanan medis berkualitas tinggi. Sejak pendirian kami, kami telah mendedikasikan diri untuk menjadi
                penyedia perawatan kesehatan yang dapat diandalkan bagi masyarakat kami dan sekitarnya.
              </p>
              <p className='mt-4 indent-8'>
                Di Klinik Muda Sentosa, kami percaya bahwa kesehatan adalah harta yang paling berharga, dan setiap
                individu berhak mendapatkan perawatan yang cermat dan peduli. Itu sebabnya, kami telah merancang tim
                medis kami dengan teliti, terdiri dari para profesional berpengalaman dan berdedikasi yang siap untuk
                memahami kebutuhan kesehatan Anda dan memberikan perawatan terbaik.
              </p>
            </div>
          </div>
        </section>
        <section
          className='mt-16 py-10 px-10 grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-x-10 lg:px-40 bg-cover bg-center'
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(17, 128, 135, 0.6), rgba(17, 128, 135, 0.6)), url('/assets/images/background2.png')",
          }}
        >
          <div className=''>
            <h2 className='text-2xl text-center lg:text-4xl lg:font-semibold text-accent' style={yesevaOne.style}>
              Visi
            </h2>
            <p className='mt-5 text-lg text-justify md:text-xl text-white' style={workSans.style}>
              Menginspirasi dan memajukan pelayanan kesehatan yang berkualitas tinggi, inovatif, dan berorientasi pada
              pasien untuk meningkatkan kualitas hidup masyarakat.
            </p>
          </div>
          <div className=''>
            <h2 className='text-2xl text-center lg:text-4xl lg:font-semibold text-accent' style={yesevaOne.style}>
              Misi
            </h2>
            <ul className='mt-5 list-decimal list-inside text-justify md:text-xl text-white' style={workSans.style}>
              <li className='mb-2'>
                Memberikan pelayanan kesehatan yang komprehensif dan terjangkau kepada setiap pasien dengan perhatian
                yang penuh kepada kebutuhan individu mereka.
              </li>
              <li className='mb-2'>
                Memperkenalkan inovasi dalam pengobatan dan teknologi medis untuk memastikan diagnosis yang tepat dan
                perawatan yang efisien.
              </li>
              <li className='mb-2'>
                Mengedepankan prinsip etika dan profesionalisme tinggi dalam setiap tindakan medis dan hubungan dengan
                pasien.
              </li>
              <li className='mb-2'>
                Mendorong pendidikan dan kesadaran masyarakat tentang pentingnya kesehatan dan pencegahan penyakit.
              </li>
              <li className='mb-2'>
                Mengembangkan tim medis yang terlatih dan berkualitas tinggi yang selalu berusaha untuk meningkatkan
                pengetahuan dan keterampilan mereka.
              </li>
            </ul>
          </div>
        </section>
        <section className='px-5' id='doktetKami'>
          <div className='mt-12 text-center'>
            <p className='text-secondary text-sm font-bold md:text-lg' style={workSans.style}>
              Perawatan Terpercaya
            </p>
            <p className='text-primary text-2xl font-normal md:text-4xl' style={yesevaOne.style}>
              Dokter Kami
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-10 place-items-center xl:px-48'>
            <div className='card w-317 mt-10' style={workSans.style}>
              <div className='w-[317px] h-[350px] bg-slate-300 flex justify-center items-center'>
                <h1 className='text-3xl'>Foto Dokter</h1>
              </div>
              {/* <Image
                src='/assets/images/doctor1.png'
                style={{ width: '317px', height: '350px' }}
                width={317}
                height={350}
                sizes='100vh'
                alt='doctor'
              /> */}
              <div className='bg-accent text-center py-6'>
                <h1 className='text-primary text-lg mb-2'>Dokter 1</h1>
                <p className='text-primary font-bold text-lg mb-2'>Dokter Gigi</p>
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
                <Link href='#' className='text-accent'>
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
                <h1 className='text-primary text-lg mb-2'>Dokter 2</h1>
                <p className='text-primary font-bold text-lg mb-2'>Dokter Umum</p>
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
                <Link href='#' className='text-accent'>
                  Lihat Profil
                </Link>
              </div>
            </div>
            {/* <div className='card w-317 mt-10' style={workSans.style}>
              <Image
                src='/assets/images/doctor3.png'
                style={{ width: '317px', height: '350px' }}
                width={317}
                height={350}
                sizes='100vh'
                alt='doctor'
              />
              <div className='bg-accent text-center py-6'>
                <h1 className='text-primary text-lg mb-2'>Dokter 3</h1>
                <p className='text-primary font-bold text-lg mb-2'>Spesialis Penyakit Dalam</p>
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
                <Link href='#' className='text-accent'>
                  Lihat Profil
                </Link>
              </div>
            </div> */}
          </div>
        </section>
      </main>
      <Components.GetInTouch />
      <Components.Footer />
    </>
  );
}
