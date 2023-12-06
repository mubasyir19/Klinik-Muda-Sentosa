'use client';

import Image from 'next/image';
import { Suspense, useCallback, useEffect, useState } from 'react';
import { Components } from '@/components';
import Link from 'next/link';
import { Work_Sans } from 'next/font/google';
import { getDataConsultation } from '@/services/data';

const workSans = Work_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function DataConsultation() {
  const [consultation, setConsultation] = useState([]);
  const [error, setError] = useState(null);

  const getConsultationList = useCallback(async () => {
    try {
      const data = await getDataConsultation();
      const filterData = data.filter((item) => item.answer !== null);
      setConsultation(filterData);
    } catch (error) {
      setError('"Tampaknya ada masalah dengan sumber data. Menampilkan data yang tersedia sementara ini."');
    }
  }, [getDataConsultation]);

  useEffect(() => {
    getConsultationList();
  }, []);

  // const fetchData = await getDataConsultation();

  return (
    <Suspense fallback={<Components.Loading />}>
      {error ? (
        <div>{error}</div>
      ) : (
        <div>
          {consultation.length > 0 ? (
            <div>
              {consultation.map((consul) => (
                <div key={consul.id} className='quest-card lg:w-[700px] h-fit p-5 mt-4 mx-auto bg-accent rounded-lg'>
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
                      <Link href={`/konsultasi/${consul.id}`} className='font-bold text-base cursor-pointer'>
                        {consul.question}
                      </Link>
                      <p className='text-base'>Oleh: {consul.asker}</p>
                      <p className='text-slate-500 text-base'>Dijawab oleh dr. Fulan Al Fulan</p>
                    </div>
                  </div>
                  <div>
                    {/* <p>{`${consul.answer.slice(0, 80)}...`}</p> */}
                    <p>{consul.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>Silakan bertanya kepada kami</div>
          )}
        </div>
      )}
    </Suspense>
  );
}
