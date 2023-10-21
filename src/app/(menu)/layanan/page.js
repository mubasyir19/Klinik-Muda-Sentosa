'use client';

import { Components } from '@/components';
import { Work_Sans, Yeseva_One } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

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

export default function Layanan() {
  const [isHoveredCard1, setIsHoveredCard1] = useState(false);
  const [isHoveredCard2, setIsHoveredCard2] = useState(false);

  const mouseEnterCard1 = () => {
    setIsHoveredCard1(true);
  };

  const mouseLeaveCard1 = () => {
    setIsHoveredCard1(false);
  };

  const mouseEnterCard2 = () => {
    setIsHoveredCard2(true);
  };

  const mouseLeaveCard2 = () => {
    setIsHoveredCard2(false);
  };
  return (
    <>
      <Components.Topmost />
      <Components.Navbar />
      <Components.Header withLink={false} headTitle='Layanan Kami'>
        <span>
          <Link href='/'>Beranda</Link> / Layanan
        </span>
      </Components.Header>
      <main className='mt-10'>
        <section className='px-8 lg:grid lg:grid-cols-2 place-items-center'>
          <div
            className='card mt-10 rounded-md text-pasty-blue flex justify-center items-center z-0'
            style={workSans.style}
          >
            <div className='relative' onMouseEnter={mouseEnterCard1} onMouseLeave={mouseLeaveCard1}>
              <Image
                className='object-cover object-left rounded-xl md:w-full lg:w-[500px] lg:h-[400px]'
                src='/assets/images/sanlat.jpg'
                width={500}
                height={400}
                alt='photo'
              />
              {isHoveredCard1 && (
                <div className='absolute inset-0 bg-primary bg-opacity-80 rounded-md flex flex-col justify-center items-center'>
                  <svg width='48' height='48' viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M18.4994 4.71581C18.233 4.71581 17.9775 4.83082 17.7891 5.03555C17.6007 5.24028 17.4949 5.51795 17.4949 5.80748C17.4949 6.097 17.6007 6.37468 17.7891 6.5794C17.9775 6.78413 18.233 6.89914 18.4994 6.89914C18.9856 6.89914 19.3874 7.05634 19.6788 7.33581C19.9641 7.6131 20.2313 8.09343 20.3076 8.92528C20.3208 9.06792 20.3597 9.20634 20.4221 9.33264C20.4846 9.45894 20.5692 9.57064 20.6714 9.66137C20.7735 9.7521 20.8911 9.82007 21.0174 9.86141C21.1438 9.90276 21.2763 9.91666 21.4076 9.90232C21.5388 9.88799 21.6662 9.84569 21.7824 9.77786C21.8987 9.71003 22.0014 9.61799 22.0849 9.50699C22.1684 9.39598 22.231 9.2682 22.269 9.13093C22.307 8.99366 22.3198 8.84959 22.3066 8.70695C22.1901 7.43406 21.7401 6.41008 21.0148 5.70704C20.3177 5.05057 19.4217 4.69751 18.4994 4.71581ZM11.5159 1.56744C10.7978 0.91883 9.95511 0.453462 9.04971 0.205591C8.14431 -0.0422799 7.19928 -0.0663429 6.28419 0.135173C4.64076 0.484507 3.1902 1.47137 2.22785 2.60234L2.22383 2.60889C1.17308 3.86213 0.0982218 5.49089 0.00580385 7.86418V7.86855C-0.0343778 9.03445 0.118313 10.7353 0.964137 12.0365L0.976192 12.0518C1.87224 13.3727 2.37251 14.1456 2.62364 14.8923C2.91094 15.7482 2.91094 16.6128 2.91094 17.8988V18.0036C2.92099 19.2481 3.16409 20.9664 3.74873 22.5296C4.32735 24.0711 5.32184 25.6736 6.96126 26.3221L7.00144 26.3374L7.04564 26.3505C7.99593 26.6256 8.90605 26.5339 9.59718 25.833C10.1999 25.2217 10.441 24.3178 10.5776 23.534C10.7022 22.8113 10.7645 21.9707 10.8267 21.1541L10.8488 20.8463C10.9212 19.9031 11.0035 18.9686 11.1723 18.0909V18.0844C11.6284 15.6762 12.2813 15.2984 12.5324 15.2133C13.2758 15.0059 13.7218 15.115 14.0111 15.2941C14.3246 15.4884 14.6139 15.8617 14.865 16.4774C15.3833 17.7547 15.536 19.5647 15.6767 21.2415C15.7972 22.9074 16.1187 24.4401 16.7495 25.4335C17.081 25.9553 17.5572 26.4182 18.2081 26.5688C18.8651 26.7238 19.4979 26.512 20.0464 26.1321C22.0435 24.7457 23.1886 21.8834 23.49 18.1521C23.6306 16.3814 23.7954 15.591 24.0385 14.9535C24.163 14.626 24.3197 14.3116 24.5407 13.8989L24.7537 13.5059C24.9345 13.1784 25.1455 12.7898 25.3765 12.34L25.3805 12.3378C25.8145 11.4907 26.5297 9.94053 26.6121 8.124C26.6985 6.22886 26.0898 4.14378 24.0505 2.34907C22.1098 0.63734 20.2895 0.00635654 18.6521 0.10024C17.0308 0.19194 15.7349 0.986674 14.8087 1.83599L14.7766 1.86656L14.7485 1.89712C13.8685 2.85343 13.4968 2.97788 13.2959 2.96696C13.0508 2.95604 12.5967 2.74208 11.6002 1.64822L11.5601 1.60456L11.5159 1.56744ZM2.01288 7.95588C2.07717 6.33366 2.78236 5.18304 3.70654 4.08264C4.40972 3.25734 5.48659 2.53029 6.66793 2.27921C7.2872 2.13962 7.92739 2.15268 8.5414 2.31742C9.15542 2.48216 9.72764 2.79439 10.216 3.23114C11.1602 4.26386 12.1085 5.09789 13.2095 5.15029C14.3547 5.20269 15.2829 4.39923 16.1367 3.47568C16.8339 2.84251 17.7159 2.34034 18.7566 2.27921C19.7973 2.22026 21.1434 2.59798 22.7848 4.04334C24.3097 5.38609 24.6613 6.79434 24.605 8.01701C24.5468 9.31173 24.0224 10.4973 23.6266 11.2702C23.3608 11.7847 23.0869 12.2943 22.8049 12.7985C22.5718 13.2352 22.3609 13.65 22.1821 14.1172C21.8204 15.0692 21.6356 16.1303 21.4869 17.9599C21.2077 21.4249 20.183 23.4466 18.9655 24.2916C18.8832 24.3529 18.7923 24.3994 18.6963 24.4291C18.6501 24.4401 18.632 24.4357 18.63 24.4357C18.6093 24.4293 18.5902 24.4181 18.5738 24.4029C18.5072 24.3431 18.4496 24.2724 18.403 24.1933C18.0815 23.6912 17.7922 22.6388 17.6797 21.0646V21.0515L17.6657 20.8878C17.5371 19.3376 17.3603 17.2154 16.7033 15.5975C16.3557 14.7395 15.8294 13.9055 15.0036 13.3946C14.1558 12.8706 13.1432 12.7832 12.0101 13.1064L11.994 13.1107L11.9799 13.1151C10.6339 13.5408 9.7137 14.9578 9.20741 17.6455C9.00851 18.6695 8.9181 19.7241 8.84578 20.6651L8.82569 20.9707C8.78363 21.6947 8.70921 22.4161 8.60268 23.1322C8.48213 23.8396 8.32743 24.1322 8.22296 24.237C8.20086 24.2588 8.09036 24.3833 7.60617 24.2545C6.76637 23.9008 6.08931 22.986 5.61115 21.7065C5.18014 20.5206 4.94614 19.2609 4.92003 17.9861V17.7612C4.92003 16.5997 4.92404 15.3748 4.51017 14.1456C4.14251 13.0452 3.44335 12.0081 2.59953 10.7658C2.13342 10.0453 1.97672 8.93183 2.01288 7.95588Z'
                      fill='#00D2DF'
                    />
                  </svg>
                  <h1 className='text-xl text-white'>Dokter Gigi</h1>
                  <div className='mt-2 flex gap-x-4'>
                    <Link href='/layanan/dokter-gigi' className='text-secondary'>
                      Selengkapnya
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div
            className='card mt-10 rounded-md text-pasty-blue flex justify-center items-center z-0'
            style={workSans.style}
          >
            <div className='relative' onMouseEnter={mouseEnterCard2} onMouseLeave={mouseLeaveCard2}>
              <Image
                className='object-cover object-right rounded-xl md:w-full lg:w-[500px] lg:h-[400px]'
                src='/assets/images/opening.jpg'
                width={500}
                height={400}
                alt='photo'
              />
              {isHoveredCard2 && (
                <div className='absolute inset-0 bg-primary bg-opacity-80 rounded-md flex flex-col justify-center items-center'>
                  <svg width='48' height='48' viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M8.10174 12.2862C6.56694 12.2862 5.09501 11.7468 4.00974 10.7868C2.92448 9.82672 2.31478 8.52463 2.31478 7.16692V3.07154C2.31478 2.8 2.43672 2.53958 2.65377 2.34757C2.87083 2.15556 3.16521 2.04769 3.47217 2.04769H4.62956C4.93652 2.04769 5.23091 1.93982 5.44796 1.74781C5.66501 1.55581 5.78695 1.29539 5.78695 1.02385C5.78695 0.752305 5.66501 0.491886 5.44796 0.299878C5.23091 0.107869 4.93652 0 4.62956 0H3.47217C2.5513 0 1.66813 0.323608 1.01698 0.899633C0.365817 1.47566 0 2.25692 0 3.07154V7.16692C0.00148773 8.3236 0.320333 9.46267 0.929153 10.4863C1.53797 11.51 2.41857 12.3876 3.49532 13.0438C4.52983 13.8506 5.3688 14.8345 5.96159 15.9361C6.55438 17.0376 6.88869 18.2341 6.94434 19.4531C6.94434 21.3539 7.79792 23.1768 9.31729 24.5209C10.8367 25.8649 12.8974 26.62 15.0461 26.62C17.1948 26.62 19.2555 25.8649 20.7749 24.5209C22.2942 23.1768 23.1478 21.3539 23.1478 19.4531V18.2859C24.2388 18.0367 25.1897 17.4441 25.8221 16.6191C26.4545 15.7941 26.7251 14.7934 26.5831 13.8045C26.4411 12.8157 25.8963 11.9066 25.0508 11.2476C24.2054 10.5887 23.1172 10.2252 21.9904 10.2252C20.8636 10.2252 19.7755 10.5887 18.93 11.2476C18.0845 11.9066 17.5397 12.8157 17.3978 13.8045C17.2558 14.7934 17.5264 15.7941 18.1588 16.6191C18.7912 17.4441 19.742 18.0367 20.833 18.2859V19.4531C20.833 20.8108 20.2233 22.1129 19.1381 23.0729C18.0528 24.033 16.5809 24.5723 15.0461 24.5723C13.5113 24.5723 12.0394 24.033 10.9541 23.0729C9.86882 22.1129 9.25913 20.8108 9.25913 19.4531C9.31771 18.2325 9.65564 17.0352 10.2525 15.9336C10.8493 14.8319 11.6926 13.8488 12.7313 13.0438C13.8038 12.3853 14.6799 11.5067 15.2846 10.4832C15.8893 9.45968 16.2046 8.32178 16.2035 7.16692V3.07154C16.2035 2.25692 15.8377 1.47566 15.1865 0.899633C14.5353 0.323608 13.6522 0 12.7313 0H11.5739C11.2669 0 10.9726 0.107869 10.7555 0.299878C10.5385 0.491886 10.4165 0.752305 10.4165 1.02385C10.4165 1.29539 10.5385 1.55581 10.7555 1.74781C10.9726 1.93982 11.2669 2.04769 11.5739 2.04769H12.7313C13.0383 2.04769 13.3326 2.15556 13.5497 2.34757C13.7668 2.53958 13.8887 2.8 13.8887 3.07154V7.16692C13.8887 7.83919 13.739 8.50487 13.4482 9.12597C13.1574 9.74706 12.7311 10.3114 12.1937 10.7868C11.6564 11.2621 11.0184 11.6392 10.3163 11.8965C9.6142 12.1537 8.86169 12.2862 8.10174 12.2862ZM21.9904 16.3815C21.3765 16.3815 20.7877 16.1658 20.3536 15.7818C19.9195 15.3978 19.6756 14.8769 19.6756 14.3338C19.6756 13.7908 19.9195 13.2699 20.3536 12.8859C20.7877 12.5019 21.3765 12.2862 21.9904 12.2862C22.6043 12.2862 23.1931 12.5019 23.6272 12.8859C24.0613 13.2699 24.3052 13.7908 24.3052 14.3338C24.3052 14.8769 24.0613 15.3978 23.6272 15.7818C23.1931 16.1658 22.6043 16.3815 21.9904 16.3815Z'
                      fill='#00D2DF'
                    />
                  </svg>
                  <h1 className='text-xl text-white'>Dokter Umum</h1>
                  <div className='mt-2 flex gap-x-4'>
                    <Link href='/layanan/dokter-umum' className='text-secondary'>
                      Selengkapnya
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Components.GetInTouch />
      <Components.Footer />
    </>
  );
}
