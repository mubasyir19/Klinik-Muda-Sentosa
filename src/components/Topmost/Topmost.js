import { Work_Sans, Yeseva_One } from 'next/font/google';
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

export default function Topmost() {
  return (
    <section
      className='p-4 grid grid-cols-2 gap-x-8 gap-y-4 md:flex md:justify-center lg:flex lg:justify-center'
      style={workSans.style}
    >
      <div className='flex justify-center'>
        <svg
          className='my-auto'
          width='27'
          height='27'
          viewBox='0 0 23 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M13.8155 18.9536C14.1482 18.7615 14.3901 18.4435 14.4879 18.0695C14.5857 17.6955 14.5314 17.2963 14.337 16.9595L13.6039 15.6897C13.4095 15.353 13.0908 15.1063 12.7181 15.0041C12.3453 14.9018 11.9489 14.9522 11.6162 15.1443C9.10699 16.593 7.64082 14.0535 6.90773 12.7838C6.17464 11.5141 4.70847 8.97456 7.21767 7.52587C7.55041 7.33377 7.79229 7.01575 7.89009 6.64178C7.98789 6.26782 7.93361 5.86854 7.73918 5.53178L7.00609 4.26204C6.81167 3.92528 6.49302 3.67863 6.12026 3.57635C5.74749 3.47406 5.35115 3.52453 5.0184 3.71664C1.8819 5.5275 0.733088 7.88376 4.39853 14.2325C8.06397 20.5812 10.679 20.7644 13.8155 18.9536Z'
            stroke='#118087'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M20.4925 13.7102C21.159 11.1565 20.7876 8.43049 19.4601 6.13119C18.1326 3.83188 15.9575 2.14732 13.4127 1.4476M16.6513 12.6562C16.8499 11.8977 16.8975 11.1058 16.7915 10.3257C16.6855 9.54555 16.428 8.79245 16.0337 8.10944C15.6394 7.42642 15.1159 6.82686 14.4933 6.34501C13.8706 5.86316 13.161 5.50846 12.4049 5.30118M12.8308 11.5945C12.964 11.0835 12.8896 10.5381 12.624 10.078C12.3584 9.61794 11.9232 9.28084 11.4141 9.14072'
            stroke='#00D2DF'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <div className='ml-4 my-auto'>
          <p className='text-sm text-primary font-medium'>Telpon</p>
          <p className='text-sm text-secondary font-medium'>(021) 234-567-890</p>
        </div>
      </div>
      <div className='flex justify-center'>
        <svg
          className='my-auto'
          width='20'
          height='27'
          viewBox='0 0 19 23'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1 9.23919C1 17.4784 9.58249 21.598 9.58249 21.598C9.58249 21.598 18.165 17.4784 18.165 9.23919C18.165 4.69047 14.3243 1 9.58249 1C4.84067 1 1 4.69047 1 9.23919Z'
            stroke='#118087'
            strokeWidth='1.5'
          />
          <path
            d='M9.58226 12.0542C11.2128 12.0542 12.5346 10.7323 12.5346 9.10179C12.5346 7.47124 11.2128 6.14941 9.58226 6.14941C7.95171 6.14941 6.62988 7.47124 6.62988 9.10179C6.62988 10.7323 7.95171 12.0542 9.58226 12.0542Z'
            stroke='#00D2DF'
            strokeWidth='1.5'
          />
        </svg>
        <div className='ml-4 my-auto'>
          <p className='text-sm text-primary font-medium'>Lokasi</p>
          <p className='text-sm text-secondary font-medium'>Bojong Kulur</p>
        </div>
      </div>
      <div className='col-span-2 flex justify-center'>
        <svg
          className='my-auto'
          width='27'
          height='27'
          viewBox='0 0 19 19'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.58249 18.165C14.3225 18.165 18.165 14.3225 18.165 9.58249C18.165 4.84251 14.3225 1 9.58249 1C4.84251 1 1 4.84251 1 9.58249C1 14.3225 4.84251 18.165 9.58249 18.165Z'
            stroke='#118087'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
          <path d='M12.4434 13.8738L9.58252 9.5825V3.86084' stroke='#00D2DF' strokeWidth='1.5' strokeLinecap='round' />
        </svg>
        <div className='ml-4 my-auto'>
          <p className='text-sm text-primary font-medium'>Jam Operasional</p>
          <p className='text-sm text-secondary font-medium'>09:00 - 20:00 (Senin - Jumat)</p>
        </div>
      </div>
    </section>
  );
}
