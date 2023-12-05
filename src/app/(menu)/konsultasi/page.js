import { Components } from '@/components';
import { Yeseva_One } from 'next/font/google';
import Link from 'next/link';

const yesevaOne = Yeseva_One({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});

export default function Konsultasi() {
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
          <Components.DataConsultation />
        </section>
        <section className='px-4 md:px-20 lg:px-0 mt-10'>
          <h2 className='text-center font-semibold text-xl text-primary' style={yesevaOne.style}>
            Tulis Pertanyaanmu Di sini!!!
          </h2>
          <Components.FormConsultation />
        </section>
      </main>
      <Components.GetInTouch />
      <Components.Footer />
    </>
  );
}
